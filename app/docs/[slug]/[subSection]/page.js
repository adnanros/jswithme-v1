import TopicCard from '@/components/TopicCard';
import React from 'react'
import { InnerLayout } from '@/app/InnerLayout';


async function getSectionData({slug, subSection}) {
  //const queryParams = new URLSearchParams();
  //queryParams.append('id', `${slug}`);
  const res = await fetch(`http://localhost:3000/api/docs/${slug}/${subSection}`);
  // fetch(`http://localhost:3000/api/docs/Heading-1/Heading-2}`)
  const result = await res.json();
  return result;
}

export default async function SectionPage({params}) {
  //http://localhost:3000/docs/Heading-1/Heading-2}
  const {slug, subSection} = params; // slug= Heading-1, subSection = Heading-2
  
  const sectionData = await getSectionData({slug, subSection});
  
  return (
    <InnerLayout topicHeadings={sectionData.subSections}>
      <div>
        {/* Lists of Heading-3 topics */}
        {sectionData.subSections.map((sub, index)=><TopicCard key={index} topic={sub}/>)}
      </div>
    </InnerLayout>
    

  )
}

// SectionPage.getInitialProps = async (context) => {
//   console.log('getInitialProps',context);
//   const { slug } = params; 
//   const {subSection} = params;
//   console.log(slug, 'slug');
//   console.log('subSection',subSection);

//   let pageProps = {};

//   try {
//     let data = await getSectionData({slug, subSection});
//     pageProps["data"] = data;
//   } catch (error) {}

//   return { pageProps };
// };



// export async function generateStaticParams() {
//   const sections = await fetch('http://localhost:3000/api/section').then((res) => res.json())
 
//   return sections.map((section) => ({
//     slug: section.id,
//   }))
// }

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3000/api/section`);
  const heading1Many = await response.json();
  const paths = [];
  // const paths = heading1Many.map((heading1) => heading1.subSections.map((heading2)=>`/docs/${heading1.id}/${heading2.id}`));
  heading1Many.forEach(heading1 => {
    heading1.subSections.forEach(heading2 => {
      paths.push(`/docs/${heading1.id}/${heading2.id}`);
    })
  });

  return {
    paths,
    fallback: false, // Set to true if you want to enable incremental static regeneration
  };
}