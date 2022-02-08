const React = require("react")
const { FacebookProvider } = require("react-facebook")


exports.wrapRootElement = ({ element }) => {
  return (
   <>
    <FacebookProvider appId="407785027087673">
      {element}
      
      </FacebookProvider>
   
  </>
  )
}