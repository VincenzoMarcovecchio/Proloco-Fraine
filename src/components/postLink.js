import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",

    "& > *": {
      width: "100%",
      height: "fit-content",
      padding: "1rem;",
      textDecoration: "none",
    },
  },
  paper: {
    width: "95%",
    margin: "0 auto 2rem auto",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "100%",
    },
  },
}))
const PostLink = ({ post }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Link replace to={"/" + post.frontmatter.slug}>
          <h2 style={{ lineHeight: "1.5" }}>{post.frontmatter.title}</h2>
          <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="p"
          >
            Autore: {post.frontmatter.author}
          </Typography>

          <Typography
            gutterBottom
            variant="body2"
            color="textPrimary"
            component="p"
          >
            {post.frontmatter.description}
          </Typography>
        </Link>
      </Paper>
    </div>
  )
}

export default PostLink
