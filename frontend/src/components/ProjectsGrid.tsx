"use client";

/**
 * ProjectsGrid Component
 *
 * Displays a grid of project cards with filtering capabilities
 */

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  team: string;
  track: "Venture" | "Blockchain";
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedTrack, setSelectedTrack] = useState<
    "All" | "Venture" | "Blockchain"
  >("All");

  // Filter projects based on selected track
  const filteredProjects =
    selectedTrack === "All"
      ? projects
      : projects.filter((project) => project.track === selectedTrack);

  return (
    <>
      {/* Filter Tabs */}
      <div className='flex justify-center gap-4 mb-12'>
        <Button
          variant={selectedTrack === "All" ? "default" : "outline"}
          className='px-6'
          onClick={() => setSelectedTrack("All")}
        >
          All Projects
        </Button>
        <Button
          variant={selectedTrack === "Venture" ? "default" : "outline"}
          className='px-6'
          onClick={() => setSelectedTrack("Venture")}
        >
          Venture Track
        </Button>
        <Button
          variant={selectedTrack === "Blockchain" ? "default" : "outline"}
          className='px-6'
          onClick={() => setSelectedTrack("Blockchain")}
        >
          Blockchain Track
        </Button>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className='bg-card/50 backdrop-blur-md border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
          >
            <CardHeader>
              <div className='flex items-start justify-between mb-2'>
                <CardTitle className='text-xl'>{project.name}</CardTitle>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    project.track === "Venture"
                      ? "bg-primary/20 text-primary"
                      : "bg-accent/20 text-accent-foreground"
                  }`}
                >
                  {project.track}
                </span>
              </div>
              <p className='text-sm text-muted-foreground'>by {project.team}</p>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-card-foreground mb-4 line-clamp-3'>
                {project.description}
              </p>
              <div className='flex gap-2'>
                {project.demoUrl && (
                  <Button
                    variant='outline'
                    size='sm'
                    asChild
                    className='flex-1'
                  >
                    <a
                      href={project.demoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Globe className='w-4 h-4 mr-2' />
                      Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant='outline'
                    size='sm'
                    asChild
                    className='flex-1'
                  >
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github className='w-4 h-4 mr-2' />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className='text-center py-20'>
          <p className='text-xl text-muted-foreground mb-4'>
            {selectedTrack === "All"
              ? "No projects submitted yet"
              : `No ${selectedTrack} track projects yet`}
          </p>
          <p className='text-muted-foreground'>
            Check back after the hackathon to see amazing projects!
          </p>
        </div>
      )}
    </>
  );
}
