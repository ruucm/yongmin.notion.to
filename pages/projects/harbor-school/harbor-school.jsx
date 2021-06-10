import React from "react"
import { SectionCard } from "../_components/section-card"
import { AnimateSharedLayout } from "framer-motion"
import { SubTitle } from "../_components/sub-title"
import { Summary } from "../_components/summary"
import { styled } from "styletron-react"
import { PostLayout } from "../../../components/post-layout"
import { AspectRatio } from "../../../utils/aspect-ratio"

const Grid = styled("div", {
  display: "grid",
  gap: "30px",
})

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <AspectRatio ratio={3584 / 2240}>
          <iframe
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            src="https://www.youtube.com/embed/KIbAXnuXyd0?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Fharbor.school&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
          ></iframe>
        </AspectRatio>
        <AspectRatio ratio={3584 / 2240}>
          <iframe
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            src="https://www.youtube.com/embed/nSxBeopwA7E?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Fharbor.school&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
          ></iframe>
        </AspectRatio>
      </div>

      <AnimateSharedLayout>
        <SubTitle>Education Content Experience</SubTitle>
        <Grid>
          <SectionCard
            imageName={"problem-youtube"}
            title="[Problems] - Bad Education Content Experience"
            description={`I learn programming and design by myself with youtube videos and blog
        posts. But as a learner's view, there are solid problem on both side.
        On video side, it is always difficult to jump the point directly you
        want. If you find a just example line of code, watching video could be
        terrible experiences. On post side, it is easy to find information but
        sometimes post author could skip contents that makes students take a
        ton of times for finding why their project don't excuted like the
        post.`}
            // grayscale
          />
          <SectionCard
            imageName={"solution-video-explorer.gif"}
            title="[Solution] - Video Explorer"
            description={`So I started develop a new UI called "Video Explorer". I combines good
      points of video and post at the same time. It includes whole proccess
      of tutorial to make the results, and user can find information quickly
      like the blog posts.`}
          />
        </Grid>

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
        </Grid>
      </AnimateSharedLayout>
    </PostLayout>
  )
}
