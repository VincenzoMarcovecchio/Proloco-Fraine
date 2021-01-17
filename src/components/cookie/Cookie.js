import React, { useEffect, useRef, useState } from "react"
import biscotto from "../../images/biscotto tipico abruzzese.png"
import Box from "@material-ui/core/Box"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Zoom from "@material-ui/core/Zoom"
import Popover from "@material-ui/core/Popover"

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
  button: {
    display: "flex",
    justifyContent: "space-bewtween",
    alignItems: "center",
  },
  text: {
    textTransform: "none",
  },
  typography: {
    padding: "0.5rem",
  },
}))

export default function Cookie() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [hasdisplayed, setHasdisplayed] = useState(false)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  const bisco2 = useRef()
  const bisco = useRef()

  useEffect(() => {
    if (localStorage.getItem("cookies_enabled") === null) {
      setTimeout(() => {
        bisco.current.style = "right:0% ;"
      }, 3000)
    }
  }, [])

  return (
    <>
      <div ref={bisco} className="biscottobanner">
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          <img
            src={biscotto}
            width="100%"
            height="100%"
            alt="biscotto tipico della cibernetica"
          />
          Lu vu nu biscott
        </Button>
        <Popover
          ref={bisco2}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={classes.typography}>
            {" "}
            I biscotti ci aiutano a fornirti un servizio migliore, si tratta
            solo di fb comunque&nbsp;
            <button
              onClick={() => {
                bisco.current.style = "right:-100% !important;"
                setAnchorEl(null)
                localStorage.setItem("cookies_enabled", "1")
              }}
            >
              ma scine
            </button>
            &nbsp;
            <button
              onClick={() => {
                bisco.current.style = "right:-100% !important;"
                setAnchorEl(null)
                localStorage.setItem("cookies_enabled", "1")
              }}
            >
              no grazie veramnete sto abbottato
            </button>
          </Typography>
        </Popover>
      </div>
    </>
  )
}
