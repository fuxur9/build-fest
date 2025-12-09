"use client";

/**
 * Project Showcase Page
 *
 * Displays projects submitted by participants in the hackathon
 */

import ProjectsGrid from "@/components/ProjectsGrid";
import { useEffect, useState } from "react";
import { GalleryProject, RouteResponse } from "../api/gallery/types";
import { string_join } from "@/utils/render";

export default function ProjectShowcasePage() {

  const [projects, set_projects] = useState([] as GalleryProject[]);

  const update_projects = async () => {
    const projects_data: RouteResponse<GalleryProject[]> = await fetch("/api/gallery").then(response => response.json());
    set_projects(projects_data.result);
  };

  useEffect(() => {
    update_projects();
  }, []);

  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-background via-primary/10 to-background'>
      <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Project Showcase
            </h1>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Explore the amazing projects built during Badger Build Fest 2025
            </p>
          </div>

          <ProjectsGrid projects={projects.map(project_data => ({
            id:          project_data.project_id.toString(),
            name:        project_data.project_name,
            team:        string_join(project_data.project_members.map(member_data => member_data.member_name)),
            track:       (project_data.project_tracks[0] as any),
            description: project_data.project_description,
            demoUrl:     project_data.project_url,
            githubUrl:   undefined,
          }))} />
        </div>
      </section>
    </div>
  );
}