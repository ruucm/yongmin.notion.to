import React from "react"
import { Layout } from "../../components"
import { useESMComponent } from "../../hooks/use-esm-component"
import { useMobile } from "../../hooks/use-mobile"

function paragraphWithImage({ isMobile }) {
  let styles: any = {
    display: "flex",
    alignItems: "center",
  }
  if (isMobile)
    styles = {
      ...styles,
      flexWrap: "wrap-reverse",
    }

  return styles
}
function profileWrap({ isMobile }) {
  let styles: any = {
    padding: "0 32px 32px 32px",
  }
  if (isMobile)
    styles = {
      ...styles,
      padding: "16px",
    }

  return styles
}

export function Page() {
  const Module3: any = useESMComponent(
    "https://framerusercontent.com/modules/5EaLh0KVaiYgE67ROHLy/cnPtfAs5hGsPAxvyY8ac/JgWSPuRfa.js"
  )
  console.log("Module3", Module3)
  const isMobile = useMobile()

  return (
    <Layout>
      <h3>About</h3>
      <div style={paragraphWithImage({ isMobile })}>
        <p>
          My story starts from making a simple android socket during the army
          services. It directly inspires me and gives me a sight of the internet
          world. I studied programming start from there.
          <br />
          <br />
          After the army services, I worked as a freelancer with designers as a
          wordpress developer. I enjoyed building pixel-perfect HTML & CSS works
          and making a productive way in terms of maintenance homepage. I
          created several wordpress plugins to make web pages and
          functionalities easily.
        </p>

        <div style={profileWrap({ isMobile })}>
          <Module3
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <p
        style={{
          marginTop: 0,
        }}
      >
        Then I met Framer. It broads my view of a lot of web worlds and designs.
        I made Harbor School and started to solve the pains of designers when
        they work with developers. So I've been teaching codes to designers in
        Harbor School, and sometimes I made a tool for them.
        <br />
        <br />
        I built Lighthouse Design System in this period. With the system, I can
        integrate the whole design and develop working processes seamlessly from
        the single truth of sources.
        <br />
        <br />
        I deeply understand each position of designer and engineer and have a
        passion for reducing the gap between resulting better products.
        <br />
        <br />I believe screens are everywhere and have more importance in our
        lives. So careful thoughts and toolings for the creators of the screens
        are essential, like making neat controllers for spaceship pilots to
        Mars.
      </p>
    </Layout>
  )
}
