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
import MenuIcon from "@material-ui/icons/Menu"
import KitchenIcon from "@material-ui/icons/Kitchen"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
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
        <ListItem button>
          <ListItemIcon>
            <Link to="/" replace>
              <AnnouncementIcon />
            </Link>
          </ListItemIcon>
          <Link to="/">
            <ListItemText primary="Ultime Notizie" />
          </Link>
        </ListItem>
        {["Mater Domini", "ricette"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <HouseIcon /> : <KitchenIcon />}
            </ListItemIcon>
            <Link to={text}>
              <ListItemText
                primary={text.charAt(0).toUpperCase() + text.slice(1)}
              />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {["Comuni Limitrofi", "Alto Vastese", "Sagre e feste", "ANPR"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <LocationCityIcon /> : <AnnouncementIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
        <ListItem button>
          <Link to="/generatoredicodicefiscale">
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
          </Link>
          <Link to="/generatoredicodicefiscale">
            <ListItemText primary="codice fiscale online" />
          </Link>
        </ListItem>
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
          <MenuIcon />
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
