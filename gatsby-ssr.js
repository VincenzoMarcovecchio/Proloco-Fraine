/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <div id="fb-root"></div>,
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v9.0&appId=167048748417291&autoLogAppEvents=1"
      nonce="9OBt71XO"
    ></script>,
  ])
}
