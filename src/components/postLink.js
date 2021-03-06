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
  const options = {
    weekday: "long",
    month: "2-digit",
    year: "2-digit",
    day: "2-digit",
  }
  const date = new Date(post.frontmatter.date).toLocaleString("it-IT", options)
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Link replace to={"/" + post.frontmatter.slug}>
          <h2>{post.frontmatter.title}</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <Typography
              gutterBottom
              variant="body1"
              color="textSecondary"
              component="p"
              style={{ fontSize: "0.9rem" }}
            >
              Autore: {post.frontmatter.author}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              color="textSecondary"
              component="p"
              style={{ fontSize: "0.9rem" }}
            >
              {date}
            </Typography>
          </div>

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
