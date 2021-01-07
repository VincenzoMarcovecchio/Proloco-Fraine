import React, { useEffect, useRef, useState } from "react"
import biscotto from "../../images/biscotto tipico abruzzese.png"
import Box from "@material-ui/core/Box"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Zoom from "@material-ui/core/Zoom"
import Popover from "@material-ui/core/Popover"
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state"
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
}))

export default function Cookie() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [hasdisplayed, setHasdisplayed] = useState(false)

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
        <PopupState variant="popover" popupId="demo-popup-popover">
          {popupState => (
            <div ref={bisco} className={classes.button}>
              <Button
                className={classes.text}
                variant="contained"
                {...bindTrigger(popupState)}
              >
                <img src={biscotto} alt="biscotto tipico della cibernetica" />
                Lu vu nu biscott
              </Button>
              <Popover
                ref={bisco2}
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Box ref={bisco2} p={2}>
                  <Typography>
                    I biscotti ci aiutano a fornirti un servizio migliore, si
                    tratta solo di fb comunque&nbsp;
                    <button
                      onClick={() => {
                        bisco.current.style = "right:-100% !important;"
                        bisco2.current.style = "display:none !important;"
                        localStorage.setItem("cookies_enabled", "1")
                      }}
                    >
                      ma scine
                    </button>
                    &nbsp;
                    <button
                      onClick={() => {
                        bisco.current.style = "right:-100% !important;"
                        bisco2.current.style = "display: none !important;"
                        localStorage.setItem("cookies_enabled", "1")
                      }}
                    >
                      no grazie veramnete sto abbottato
                    </button>
                  </Typography>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
      </div>
    </>
  )
}
