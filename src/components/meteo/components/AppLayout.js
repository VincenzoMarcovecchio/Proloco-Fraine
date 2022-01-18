import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardContent,
  CardHeader,
  
  Divider,
  Typography,
  Grid,
} from "@material-ui/core"

import Forecast from "./Forecast"
import WeatherCardSubheader from "./WeatherCardSubHeader"

const useStyles = makeStyles(theme => ({
  atmospheric: {
    fontSize: "28px",
    padding: "5px",
  },
  buttons: {
    color: "black",
  },
  card: {
    minWidth: "100%",
    minHeight: 600,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  error: {
    color: "red",
    padding: "10px",
  },
  fullList: {
    width: "auto",
  },
  layout: {
    marginTop: "20px",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  recommendation: {
    fontFamily: "Montserrat, sans-serif",
    padding: "20px 0px 10px 0px",
    fontSize: "26px",
    textAlign: "center",
  },
  root: {
    flexiGrow: 1,
    color: "black",
  },
  search: {
    marginTop: "100px",
  },
  wi: {
    color: "#673ab7",
  },
}))

export default function AppLayout(props) {
  const classes = useStyles()
  const { currentWeather, forecast, icon, recommendation } = props

  return (
    <div className={classes.layout}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <WeatherCard
            currentWeather={currentWeather}
            forecast={forecast}
            icon={icon}
            recommendation={recommendation}
          />
        </Grid>
      </Grid>
    </div>
  )
}

const WeatherCard = props => {
  const classes = useStyles()
  const humidity = "wi wi-humidity"
  const strongWind = "wi wi-strong-wind"
  const { currentWeather, forecast, icon, recommendation } = props

  return (
    <Card className={classes.card}>
      <CardHeader
        title={currentWeather.city + ", " + currentWeather.country}
        subheader={<WeatherCardSubheader currentWeather={currentWeather} />}
      />
      <CardContent>
        <img
          width="80"
          draggable="false"
          title={forecast.description}
          alt={forecast.description}
          src={`https://openweathermap.org/img/wn/${forecast[0]?.icon}@2x.png`}
        ></img>
        <Typography
          variant="h2"
          className="big-temp"
          color="textPrimary"
          component="h2"
          style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
        >
          {currentWeather.temperature}&deg;C
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Temperatura percepita {currentWeather.feels_like}&deg;C
        </Typography>
        <Typography
          variant="subtitle2"
          className="atmospheric-conditions"
          color="textSecondary"
          gutterBottom
          style={{ paddingTop: "40px" }}
        >
          <span
            className={`${strongWind} ${classes.wi} ${classes.atmospheric}`}
          ></span>
          {currentWeather.wind_speed} km/h Vento{" "}
          <span
            className={`${humidity} ${classes.wi} ${classes.atmospheric}`}
          ></span>
          {currentWeather.humidity}% Umidita`
        </Typography>
        <Typography
          className={`${classes.recommendation} recommendation`}
          color="textPrimary"
          gutterBottom
        >
          {recommendation}
        </Typography>
        <Divider variant="middle" />
        <Forecast forecast={forecast} />
      </CardContent>
    </Card>
  )
}
