import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import AnnouncementIcon from "@material-ui/icons/Announcement"
import HouseIcon from "@material-ui/icons/House"
import AccountBalanceIcon from "@material-ui/icons/AccountBalance"
import MailIcon from "@material-ui/icons/Mail"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    flexGrow: 1,
  },
})

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Ultime notizie", "Mater Domini", "Comune"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? (
                <AnnouncementIcon />
              ) : index === 1 ? (
                <HouseIcon />
              ) : (
                <MailIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Comuni Limitrofi", "Alto Vastese", "Sagre e feste"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <LocationCityIcon /> : <AnnouncementIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  )

  return (
    <AppBar className={classes.root} position="static">
      <Box className={classes.wrapper} component="div" m={0.5}>
        <IconButton
          color="inherit"
          aria-label="menu"
          aria-expanded={state.left}
          onClick={toggleDrawer("left", true)}
        >
          <AccountBalanceIcon />
        </IconButton>
        &nbsp; PROLOCO | Fraine
      </Box>
      <SwipeableDrawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </AppBar>
  )
}
