import * as cheerio from "cheerio";
import { GalleryPagination, GalleryProject, GalleryProjectMember, RouteResponse } from "./types";

// route cache in seconds
export const revalidate = 300;

export async function GET(request: Request) {
    const route_response: RouteResponse<GalleryProject[]> = {
        success: true,
        result:  await get_projects(),
        updated: (new Date())
    };
    return new Response(JSON.stringify(route_response), {
        status: 200,
        headers: {"Content-Type": "application/json"}
    });
}

async function get_pagination(): Promise<GalleryPagination> {
    const gallery_dom       = await get_dom();
    const gallery_pages     = gallery_dom("#submission-gallery > div.pagination-info > span.selection > ul > li").slice(1, -1).length;
    const gallery_info      = gallery_dom("#submission-gallery > div.pagination-info > span.items_info > p").text().match(/^(\d+)\s–\s(\d+)\sof\s(\d+)$/);
    const gallery_parameter = ((gallery_info !== null) ? gallery_info.map(parameter => parseInt(parameter)) : (new Array(3).fill(0) as number[]));
    return {
        page_capacity: (gallery_parameter[2] - gallery_parameter[1] + 1),
        page_count:    gallery_pages
    } as GalleryPagination;
}

async function get_projects(page_max?: number): Promise<GalleryProject[]> {
    const gallery_pagination = await get_pagination();
    const gallery_pages      = ((page_max !== undefined) ? Math.min(gallery_pagination.page_count, page_max) : gallery_pagination.page_count);
    const page_projects      = await Promise.all(new Array(gallery_pages).fill(0).map((_, page_index) => new Promise(async (resolve) => {
        const page_dom      = await get_dom(page_index + 1);
        const page_projects = page_dom("#submission-gallery > div.row > div.gallery-item");
        resolve(new Array(page_projects.length).fill(0).map((_, project_index) => {
            const project_dom     = page_projects.eq(project_index);
            const project_members = project_dom.find("a > div > footer > div.members > span.user-profile-link");
            const project_badges  = project_dom.find("a > div > aside.entry-badge > img");
            return {
                project_id:          project_dom.attr("data-software-id"),
                project_name:        project_dom.find("a > div > figure > figcaption > div > h5").text().trim(),
                project_description: project_dom.find("a > div > figure > figcaption > div > p") .text().trim(),
                project_image:       project_dom.find("a > div > figure > img").attr("src"),
                project_members:     new Array(project_members.length).fill(0).map((_, member_index) => {
                    const member_dom   = project_members.eq(member_index);
                    const member_match = member_dom.attr("data-url")?.match(/^https:\/\/devpost\.com\/([\w-]+)$/)
                    return {
                        member_name:     member_dom.find("img").attr("alt"),
                        member_username: (((member_match !== undefined) && (member_match !== null)) ? member_match[1] : ""),
                        member_image:    member_dom.find("img").attr("src"),
                        member_profile:  member_dom.attr("data-url")
                    } as GalleryProjectMember;
                }),
                project_likes:       parseInt(project_dom.find("a > div > footer > div.counts > span[data-count=\"like\"]")   .text().trim()),
                project_comments:    parseInt(project_dom.find("a > div > footer > div.counts > span[data-count=\"comment\"]").text().trim()),
                project_badges:      new Array(project_badges.length).fill(0).map((_, badge_index) => project_badges.eq(badge_index).attr("alt")),
                project_url:         project_dom.find("a").attr("href")
            } as GalleryProject;
        }) as GalleryProject[]);
    })));
    return (page_projects as GalleryProject[][]).flat();
}

async function get_dom(page_number?: number): Promise<cheerio.CheerioAPI> {
    const gallery_html  = await fetch(`https://badger-build-fest.devpost.com/project-gallery?page=${page_number ?? ""}`).then(response => response.text());
    return cheerio.load(gallery_html);
}