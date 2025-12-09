export type GalleryTracks = {[key: string]: string};

export interface RouteResponse<Type> {
    success: boolean,
    result:  Type,
    updated: Date
};
export interface GalleryEvent {
    event_name:   string,
    event_tracks: GalleryTracks
};
export interface GalleryPagination {
    page_capacity: number;
    page_count:    number;
};
export interface GalleryProject {
    project_id:          number,
    project_name:        string,
    project_description: string,
    project_image:       string,
    project_members:     GalleryProjectMember[],
    project_likes:       number,
    project_comments:    number,
    project_tracks:      string[],
    project_badges:      string[],
    project_url:         string
};
export interface GalleryProjectMember {
    member_name:     string,
    member_username: string
    member_image:    string,
    member_profile:  string
};
