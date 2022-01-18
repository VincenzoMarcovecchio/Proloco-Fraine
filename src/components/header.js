import { Link } from "gatsby"
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
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto"
import MenuIcon from "@material-ui/icons/Menu"
import KitchenIcon from "@material-ui/icons/Kitchen"
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import DataUsageIcon from "@material-ui/icons/DataUsage"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import Tooltip from "@material-ui/core/Tooltip"

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
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "inherit",
    width: "98.6%",
  },

  title: {
    flexGrow: 1,
  },
  fullwidth: {},
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
        <ListItem button>
          <ListItemIcon>
            <Link to="/ricette-tipiche-abruzzesi/" replace>
              <KitchenIcon />
            </Link>
          </ListItemIcon>
          <Link to="/ricette-tipiche-abruzzesi/" replace>
            <ListItemText primary="Ricette" />
          </Link>
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem button>
          <Link replace to="/paesi-limitrofi-e-mercati-locali/">
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
          </Link>
          <Link replace to="/paesi-limitrofi-e-mercati-locali/">
            <ListItemText primary="Mercati locali" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link replace to="/eventi-e-manifestazioni-abruzzo/">
            <ListItemIcon>
              <AirportShuttleIcon />
            </ListItemIcon>
          </Link>
          <Link replace to="/eventi-e-manifestazioni-abruzzo/">
            <ListItemText primary="Calendario Eventi" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link replace to="/abruzzo-turismo-media-gallery/">
            <ListItemIcon>
              <AddAPhotoIcon />
            </ListItemIcon>
          </Link>
          <Link replace to="/abruzzo-turismo-media-gallery/">
            <ListItemText primary="Media Gallery" />
          </Link>
        </ListItem>

        <ListItem button>
          <Link replace to="/generatore-di-codice-fiscale-online/">
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
          </Link>
          <Link replace to="/generatore-di-codice-fiscale-online/">
            <ListItemText primary="Codice Fiscale Online" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link replace to="/open-bilanci-del-comune-di-fraine/">
            <ListItemIcon>
              <DataUsageIcon />
            </ListItemIcon>
          </Link>
          <Link replace to="/open-bilanci-del-comune-di-fraine/">
            <ListItemText primary="Open Bilanci" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link replace to="/covid-19/">
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
          </Link>
          <Link replace to="/covid-19/">
            <ListItemText primary="Covid-19" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link replace to="/meteo/">
            <ListItemIcon>
              <WbSunnyIcon />
            </ListItemIcon>
          </Link>
          <Link replace to="/meteo/">
            <ListItemText primary="Meteo" />
          </Link>
        </ListItem>
      </List>
    </div>
  )

  return (
    <AppBar className={classes.root} position="static">
      <Box className={classes.wrapper} component="div" m={0.5}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="menu"
            aria-expanded={state.left}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          &nbsp; Proloco Fraine
        </div>
        <Tooltip title="Cosa fare con il login?">
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Tooltip>
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
