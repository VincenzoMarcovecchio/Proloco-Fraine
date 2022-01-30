import React, { useEffect, useState, useCallback, useMemo } from "react"
import TreeView from "@material-ui/lab/TreeView"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import TreeItem from "@material-ui/lab/TreeItem"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import LinearProgress from "@material-ui/core/LinearProgress"
import Tooltip from "@material-ui/core/Tooltip"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    float: "right",
  },
  info: {
    float: "left",
  },
}))

const TreeviewsComponentsEntrate = () => {
  const classes = useStyles()
  const [entrate, setEntrate] = useState([])
  const [loading, setLoading] = useState(false)
  const [age, setAge] = useState(2020)
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  const entrateprimo = useMemo(() =>
    entrate.filter(
      label =>
        label.label ===
        "Entrate correnti di natura tributaria, contributiva e perequativa"
    )
  )

  const transferimenticorrrenti = useMemo(() =>
    entrate.filter(label => label.label === "Trasferimenti correnti")
  )
  const entrateextratributarie = useMemo(() =>
    entrate.filter(label => label.label === "Entrate extratributarie")
  )
  const entratecontocap = useMemo(() =>
    entrate.filter(label => label.label === "Entrate in conto capitale")
  )
  const entrateridu = useMemo(() =>
    entrate.filter(
      label => label.label === "Entrate da riduzione di attività finanziarie"
    )
  )
  const accensioneprest = useMemo(() =>
    entrate.filter(label => label.label === "Accensione prestiti")
  )
  const tesoriere = useMemo(() =>
    entrate.filter(
      label => label.label === "Anticipazioni da istituto tesoriere/cassiere"
    )
  )
  const entrgiro = useMemo(() =>
    entrate.filter(
      label => label.label === "Entrate per conto terzi e partite di giro"
    )
  )

  const formatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  })
  const handleChange = event => {
    setAge(event.target.value)
  }

  useEffect(() => {
    let isCancelled = false
    setLoading(true)
    fetch(
      `https://prolocofraine.netlify.app/.netlify/functions/entrate?age=${age}`
    )
      .then(response => response.json())
      .then(data => {
        if (!isCancelled) {
          setEntrate(data)
          setLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [age])
  return (
    <React.Fragment>
      {loading && <LinearProgress />}
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div className={classes.info}>
          <Tooltip
            arrow
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Considera le entrate e le spese che il Comune ha effettivamente riscosso (riscossioni) e pagato (pagamenti) nel corso dell'anno, indipendentemente dall'anno in cui sono nati i crediti (accertamenti) e i debiti (impegni). (Gestione del Bilancio)"
          >
            <Button onClick={handleTooltipOpen}>?</Button>
          </Tooltip>
        </div>
      </ClickAwayListener>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Anno</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
        </Select>
      </FormControl>

      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
      >
        <TreeItem
          nodeId="1"
          label="Entrate correnti di natura tributaria, contributiva e perequativa"
        >
          {entrateprimo[0]?.children.map(item => {
            return (
              <TreeItem key={item} nodeId={item.slug} label={item.label}>
                <TreeItem label={formatter.format(item.values[0][age]?.abs)} />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="2" label="Trasferimenti correnti">
          {transferimenticorrrenti[0]?.children.map(item => {
            return (
              <TreeItem key={item} nodeId={item.slug} label={item.label}>
                <TreeItem label={formatter.format(item.values[0][age]?.abs)} />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="3" label="Entrate extratributarie">
          {entrateextratributarie[0]?.children.map(item => {
            return (
              <TreeItem key={item} nodeId={item.slug} label={item.label}>
                <TreeItem label={formatter.format(item.values[0][age]?.abs)} />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="5" label="Entrate in conto capitale">
          {entratecontocap[0]?.children.map(item => {
            return (
              <TreeItem key={item} nodeId={item.slug} label={item.label}>
                <TreeItem label={formatter.format(item.values[0][age]?.abs)} />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem
          nodeId="6"
          label="Entrate da riduzione di attività finanziarie"
        >
          {entrateridu[0]?.children.map(item => {
            return (
              <TreeItem key={item} nodeId={item.slug} label={item.label}>
                <TreeItem label={formatter.format(item.values[0][age]?.abs)} />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="8" label="Accensione prestiti">
          {accensioneprest[0]?.children.map(item => {
            return (
              <TreeItem key={item} nodeId={item.slug} label={item.label}>
                <TreeItem label={formatter.format(item.values[0][age]?.abs)} />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem
          nodeId="9"
          label="Anticipazioni da istituto tesoriere/cassiere"
        >
          {tesoriere[0]?.children.map(item => {
            return (
              <TreeItem key={item} nodeId={item.slug} label={item.label}>
                <TreeItem label={formatter.format(item.values[0][age]?.abs)} />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="10" label="Entrate per conto terzi e partite di giro">
          {entrgiro[0]?.children.map(item => {
            return (
              <TreeItem key={item} nodeId={item.slug} label={item.label}>
                <TreeItem label={formatter.format(item.values[0][age]?.abs)} />
              </TreeItem>
            )
          })}
        </TreeItem>
      </TreeView>
    </React.Fragment>
  )
}

export default TreeviewsComponentsEntrate
