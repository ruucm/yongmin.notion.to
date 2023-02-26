import React from "react"
import { SectionCard } from "../_components/section-card"
import { AnimateSharedLayout } from "framer-motion"
import { SubTitle } from "../_components/sub-title"
import { Summary } from "../_components/summary"
import { styled } from "styletron-react"
import { PostLayout } from "../../../components/post-layout"
import { YoutubeVideoGrid } from "../_components/youtube-video-grid"
import { placeholderImages, placeholderBasePath } from "../../../consts"
import { Video } from "../_components/video"
import { useESM } from "../../../hooks/use-esm"

const Grid = styled("div", {
  display: "grid",
  gap: "30px",
})

export function Page({ slug }) {
  const m: any = useESM(
    "https://module.harbor.school/dist/modules/interactions/scrolling/intersecting/reveal/react/hooks/use-intersection.js"
  )

  return (
    <PostLayout>
      <Summary slug={slug} />
      <YoutubeVideoGrid videos={["KIbAXnuXyd0", "nSxBeopwA7E"]} />
      <AnimateSharedLayout>
        <SubTitle>Education Content Experience</SubTitle>
        <Grid>
          <SectionCard
            imageName={"problem-youtube"}
            title="[Problems] - Bad Education Tutorial Experience"
            description={`I learn programming and design by myself with youtube videos and blog posts. But as a learner's view, there are solid problem on both side. 
            
            On video side, it is always difficult to jump the point directly you want. If you find a just example line of code, watching video could be terrible experiences. 
            
            On post side, it is easy to find information but sometimes post author could skip contents that makes students take a ton of times for finding why their project don't excuted like the post.`}
            grayscale
          />

          <Video
            useIntersection={m?.useIntersection}
            src="/videos/harbor.school-02.mov"
            poster={placeholderImages[`${placeholderBasePath}/harbor.school-02-poster.png`].default}
            ratio={3584 / 2190}
            title="[Solution] - Video Scrubber"
          />
          <SectionCard
            videoInfo={{
              path: "/videos/harbor.school-03.mp4",
              posterName: "harbor.school-03-poster",
              ratio: 2992 / 1934,
              title: "All searchable tutorial contents",
            }}
            isZoomed
            title="[Solution] - Video Scrubber"
            description={`So I started develop a new UI called "Video Scrubber". 
            I combines good points of video and blog at the same time. 
    
      People can watch video that includes whole proccess of tutorial.
      At the same time, users can find information that they need and bookmark of the process quickly like the blog posts.`}
          />
        </Grid>
        {/* 
        <SubTitle>Internal Student Management System</SubTitle>
        <Grid>
          <SectionCard
            imageName={"problem-students-management"}
            title="[Problems] - Seperated CRM and Student Managements"
            description={`I had to offer CRM(Customer relationship management) with student's achievement dashboard.`}
            // grayscale
            // alignRight
          />

          <SectionCard
            imageName={"solution-students-management"}
            title="[Solution] - Student Management System"
            description={`And I need to collect latest resources for students. But we had only one
            junior developer and me with limited time.
            I started to find the fastest and reliable method for that
            problem.`}
            // alignRight
          />
        </Grid> */}
      </AnimateSharedLayout>
    </PostLayout>
  )
}
