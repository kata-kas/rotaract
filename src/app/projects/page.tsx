import { Entry } from 'contentful';
import { TypeAboutPageSkeleton, TypeProjectsSkeleton } from '@/contentful/types';
import { Metadata } from 'next';
import { fetchContentfulItems } from '@/lib/utils';
import ProjectCard from '@/components/project-card';
import { Project } from '@/types/project';

type ProjectsEntry = Entry<TypeProjectsSkeleton, undefined, string>
function parseContentfulData(data?: ProjectsEntry): Project | null {
    if (!data) {
        return null
    }

    const fields = data.fields
    return {
        title: fields.title || "",
        date: new Date(fields.date!),
        slug: fields.slug || "",
        desc: fields.desc || "",
        thumbnail: fields.thumbnail || null
    }
}

export const metadata: Metadata = {
    title: "Projects | Rotaract Arad Cetate",
    description: "Learn more about Rotaract Arad Cetate Club!"
}

const Projects = async () => {
    const res = await fetchContentfulItems<TypeAboutPageSkeleton, Project>(
      "projects",
      parseContentfulData
    );
    if (!res) {
        return null;
    }

    return (
      <main className="flex flex-col items-center justify-center gap-10 px-40 py-12">
          <h1 className="text-4xl">Projects</h1>
          <div className="flex">
              {res && res.map((project, index) => (
                <ProjectCard
                  project={project}
                  key={index}
                />
              ))}
          </div>
      </main>
    );
};

export default Projects;
