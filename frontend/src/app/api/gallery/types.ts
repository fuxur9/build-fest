export interface RouteResponse<Type> {
    success: boolean,
    result:  Type,
    updated: Date
};
export interface GalleryPagination {
    page_capacity: number;
    page_count:    number;
};
export interface GalleryProject {
    project_id:          string,
    project_name:        string,
    project_description: string,
    project_image:       string,
    project_members:     GalleryProjectMember[],
    project_likes:       number,
    project_comments:    number,
    project_badges:      string[],
    project_url:         string
};
export interface GalleryProjectMember {
    member_name:     string,
    member_username: string
    member_image:    string,
    member_profile:  string
};
