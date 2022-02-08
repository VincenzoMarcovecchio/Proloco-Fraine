const React = require("react")
const { Helmet } = require("react-helmet")
const { FacebookProvider } = require("react-facebook")


exports.onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  headComponents.sort((x, y) => {
    if (x.props && x.props["data-react-helmet"]) {
      return -1
    } else if (y.props && y.props["data-react-helmet"]) {
      return 1
    }
    return 0
  })
  replaceHeadComponents(headComponents)
}

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return    (
  <FacebookProvider appId="407785027087673">
  {element}
  
  </FacebookProvider>)
}