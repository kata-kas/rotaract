import { Entry } from 'contentful';
import { TypeAboutPageSkeleton } from '@/contentful/types';
import { Metadata } from 'next';
import { fetchContentfulItem } from '@/lib/utils';

interface Section {
  title: string
  content: string
}

interface AboutPage {
  title: string
  sections: Section[]
}
type AboutPageEntry = Entry<TypeAboutPageSkeleton, undefined, string>
function parseContentfulData(data?: AboutPageEntry): AboutPage | null {
  if (!data) {
    return null
  }
  const fields = data.fields
  return {
    title: fields.title || "",
    sections: (fields.sections || []) as any as Section[],
  }
}

export const metadata: Metadata = {
  title: "About | Rotaract Arad Cetate",
  description: "Learn more about Rotaract Arad Cetate Club!"
}

const About = async () => {
    const res = await fetchContentfulItem<TypeAboutPageSkeleton, AboutPage>(
        "aboutPage",
        parseContentfulData
    );
    if (!res) {
        return null;
    }

    const title = res.title;
    const sections = res.sections;

    return (
      <main className="flex justify-center px-40 py-20">
          <article className="prose dark:prose-invert">
            <h1>{title}</h1>
            {sections.map((section, index) => (
              <div key={index}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </article>
      </main>
    );
};

export default About;
