"use client";

/**
 * Project Showcase Page
 *
 * Displays projects submitted by participants in the hackathon
 */

import ProjectsGrid, { Project } from "@/components/ProjectsGrid";

// Placeholder project data - replace with actual data from your API or data source
const sampleProjects: Project[] = [
  {
    id: "1",
    name: "Sample Project 1",
    team: "Team Alpha",
    track: "Venture",
    description:
      "An innovative solution that solves real-world problems with cutting-edge technology.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "2",
    name: "Sample Project 2",
    team: "Team Beta",
    track: "Blockchain",
    description:
      "A decentralized application built on Solana that provides transparent and secure transactions.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
];

export default function ProjectShowcasePage() {
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

          <ProjectsGrid projects={sampleProjects} />
        </div>
      </section>
    </div>
  );
}
