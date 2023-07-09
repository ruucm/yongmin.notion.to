import React from "react"
import { Layout } from "../../components"
import { styled } from "styletron-react"
import { breakPoint, contactMail, imageBasePath } from "../../consts"
import { useClipboard } from "../../hooks/use-clipboard"
import { HoverText } from "../../components/hover-text"
import { useRef } from "react"
import { useState } from "react"
import { Image } from "../projects/_components/image"

const Wrap = styled("div", {
  maxWidth: "720px",
})

const ParagraphWithImage = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: "var(--blockSpacingBottom)",
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    flexWrap: "wrap-reverse",
  },
})

const ProfileWrap = styled("div", {
  paddingLeft: "16px",

  [`@media screen and (max-width: ${breakPoint}px)`]: {
    padding: "16px",
  },
})
const P = styled("p", {
  marginBottom: "0px",
})

const Email = styled("span", {
  color: "blue",
  cursor: "pointer",
  display: "inline-block",
})
const Link = styled("a", {
  color: "blue",
})
const RoundImage = styled(Image, { borderRadius: "1000px" })

export function Page() {
  const { hasCopied, onCopy } = useClipboard(contactMail)

  return (
    <Layout>
      <Wrap>
        <h3>About</h3>
        <p>
          My name is <HoverText as={"span"} normal={"Yongmin Ji"} hovered={"지 용민"}></HoverText>
          , and ruucm is my preferred nickname. I've used this nickname since 2010~. And you can pronounce it as "ro͝om
          <PlayRuucm />
          ."
          <br />I like screens and pixels. I love how people can react and explore these worlds with their eyes and
          hands and ears, sharing them with others.
        </p>
        <ParagraphWithImage>
          <P>
            My story starts from making a simple android socket during the army services. It directly inspires me and
            gives me a sight of the internet world. I studied programming start from there.
            <br />
            <br />
            After the army services, I worked as a freelancer with designers as a wordpress developer. I enjoyed
            building pixel-perfect HTML & CSS works and making a productive way in terms of maintenance homepage. I
            created several wordpress plugins to make web pages and functionalities easily.
          </P>

          <ProfileWrap>
            <RoundImage imageName="profile-duotone" style={{ width: "160px" }} ratio={1 / 1} />
          </ProfileWrap>
        </ParagraphWithImage>

        <p>
          Then I met Framer. It broads my view of a lot of web worlds and designs. I made Harbor School and started to
          solve the pains of designers when they work with developers. So I've been teaching codes to designers in
          Harbor School, and sometimes I made a tool for them.
          <br />
          <br />
          I built Lighthouse Design System in this period. With the system, I can integrate the whole design and develop
          working processes seamlessly from the single truth of sources.
          <br />
          <br />
          I deeply understand each position of designer and engineer and have a passion for reducing the gap between
          resulting better products.
          <br />
          <br />I believe screens are everywhere and have more importance in our lives. So careful thoughts and toolings
          for the creators of the screens are essential, like making neat controllers for spaceship pilots to Mars.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Email onClick={onCopy}>{hasCopied ? "Copied" : "Email ─ ruucm.a@gmail.com"}</Email>
          <Link href="http://twitter.com/ruucm" target="_blank" rel="noopener noreferrer">
            Twitter ─ @ruucm
          </Link>
          <Link href="https://github.com/ruucm" target="_blank" rel="noopener noreferrer">
            Github ─ /ruucm
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCiy8RPplPzXrrAz29KNIDiA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </Link>
          <Link href="https://medium.com/harbor-school" target="_blank" rel="noopener noreferrer">
            Medium
          </Link>
        </div>
      </Wrap>
    </Layout>
  )
}

function PlayRuucm() {
  const auidoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  return (
    <>
      <audio
        src="/audios/ruucm.mp3"
        ref={auidoRef}
        onEnded={() => {
          console.log("complete")
          setPlaying(false)
        }}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <span
        style={{
          display: "inline-flex",
          background: playing ? "var(--background-inverse-color)" : "var(--background-color)",
          border: "1px solid",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          marginLeft: 4,
          padding: 4,
          cursor: "pointer",
        }}
        onClick={() => {
          const audio: any = auidoRef.current
          audio.play()
          setPlaying(true)
        }}
      >
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: "block",
          }}
        >
          <path
            d="M0.875 4.99219V3.67969L8.46094 0.476562V1.875L2.44531 4.34375L8.46094 6.83594V8.23438L0.875 4.99219Z"
            fill={playing ? "var(--foreground-inverse-color)" : "var(--foreground-color)"}
          />
        </svg>
      </span>
    </>
  )
}
