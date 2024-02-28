import { Entry, type EntryFieldTypes } from 'contentful';
import { TypeAboutPageSkeleton, TypeProjectsFields, TypeProjectsSkeleton } from '@/contentful/types';
import { Metadata } from 'next';
import { fetchContentfulItem, fetchContentfulItems, parseContentfulContentImage } from '@/lib/utils';

interface Project {
    title?: string;
    date?: Date |  `${number}-${number}-${number}T${number}:${number}:${number}Z`;
    slug?: string;
    desc?: string;
}

type ProjectsEntry = Entry<TypeProjectsSkeleton, undefined, string>
function parseContentfulData(data?: ProjectsEntry): Project | null {
    if (!data) {
        return null
    }
    const fields = data.fields
    return {
        title: fields.title || "",
        date: fields.date || new Date(),
        slug: fields.slug || "",
        desc: fields.desc || ""
    }
}

export const metadata: Metadata = {
    title: "About | Rotaract Arad Cetate",
    description: "Learn more about Rotaract Arad Cetate Club!"
}

const Projects = async () => {
    const res = await fetchContentfulItems<TypeAboutPageSkeleton, Project[]>(
      "projects",
      parseContentfulData
    );
    if (!res) {
        return null;
    }



    return (
      <h1>{JSON.stringify(res)}</h1>
      // <main className="flex justify-center px-40 py-20">
      //     <article className="prose dark:prose-invert">
      //         <h1>{title}</h1>
      //         {sections.map((section, index) => (
      //           <div key={index}>
      //               <h2>{section.title}</h2>
      //               <p>{section.content}</p>
      //           </div>
      //         ))}
      //     </article>
      // </main>
    );
};

export default Projects;
