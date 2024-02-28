"use client";
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="lg:max-w-md w-full">
      <CardHeader>
        <CardTitle>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="pt-3 line-clamp-3">
            {project.desc}
          </CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {project.thumbnail && (
          <Image
            src={"https:" + project.thumbnail?.fields.file?.url}
            width={project.thumbnail.fields.file?.details.image?.width}
            height={project.thumbnail.fields.file?.details.image?.height}
            alt={project.title}
          />
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">{project.date.toDateString()}</p>
      </CardFooter>
    </Card>
  )
}
