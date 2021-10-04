
const loadableReady = require("@loadable/component").loadableReady

exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    loadableReady(() => {
      ReactDOM.render(element, container, callback)
    })
  }
}