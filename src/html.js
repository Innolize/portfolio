import React from "react"
import PropTypes from "prop-types"
import favicon from "../static/favicon.png"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <title>Román Mettler Portfolio</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </head>
      <body
        style={{ margin: 0, backgroundColor: "black", color: "white" }}
        {...props.bodyAttributes}
      >
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
