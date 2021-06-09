import React from "react"
import { cardDatas } from "../../../consts"
import { styled } from "styletron-react"

const Wrap = styled("div", {
  border: "1px solid",
  display: "inline-block",
  padding: "30px 15px",
})

const H3 = styled("h3", {
  color: "blue",
  fontWeight: 400,
  marginTop: 0,
})

const P = styled("p", {
  marginBottom: "0px",
})

export function Summary({ slug = "lighthouse-design-system" }) {
  const data = findValueByKey(cardDatas, "slug", slug)

  return (
    <Wrap>
      <H3>
        {data.title} ({data.duration})
      </H3>
      <p>Role - {data.role}</p>
      <p>
        Links -{" "}
        {data.links.map((link, id) => (
          <span key={id}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "underline",
              }}
            >
              {link.text}
            </a>
            {id < data.links.length - 1 && ` / `}
          </span>
        ))}
      </p>
      <P>{data.description}</P>
    </Wrap>
  )
}

function findValueByKey(arr, key, match) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element[key] === match) return element
  }
}
