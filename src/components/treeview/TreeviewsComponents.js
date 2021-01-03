import React, { useEffect, useState, useMemo } from "react"
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
const TreeviewsComponents = () => {
  const [entrate, setEntrate] = useState([])
  const [loading, setLoading] = useState(false)
  const [age, setAge] = useState(2020)
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }
  const serviziistituzionaligeneralidigestione = useMemo(() =>
    entrate.filter(
      label => label.label === "Servizi istituzionali, generali e di gestione"
    )
  )

  const ordinepubblicoesicurezza = entrate.filter(
    label => label.label === "Ordine Pubblico e Sicurezza"
  )

  const tutelaevalorizzazzionedeibenieattivitaculturali = entrate.filter(
    label =>
      label.label === "TUTELA E VALORIZZAZIONE DEI BENI E ATTIVITA' CULTURALI"
  )

  const politichegiovanilisportetempolibero = entrate.filter(
    label => label.label === "POLITICHE GIOVANILI, SPORT E TEMPO LIBERO"
  )

  const istruzioneedirittoallostudio = entrate.filter(
    label => label.label === "ISTRUZIONE E DIRITTO ALLO STUDIO"
  )

  const turismo = entrate.filter(label => label.label === "TURISMO")

  const assettodelterritorioedediliziaabitativa = entrate.filter(
    label => label.label === "ASSETTO DEL TERRITORIO ED EDILIZIA ABITATIVA"
  )
  const ambiente = entrate.filter(
    label =>
      label.label ===
      "SVILUPPO SOSTENIBILE E TUTELA DEL TERRITORIO E DELL'AMBIENTE"
  )
  const transporti = entrate.filter(
    label => label.label === "TRASPORTI E DIRITTO ALLA MOBILITA'"
  )
  const soccorsocivile = entrate.filter(
    label => label.label === "SOCCORSO CIVILE"
  )

  const dirittisociali = entrate.filter(
    label => label.label === "DIRITTI SOCIALI, POLITICHE SOCIALI E FAMIGLIA"
  )
  const tuteladellasalute = entrate.filter(
    label => label.label === "TUTELA DELLA SALUTE"
  )
  const sviluppoeconomico = entrate.filter(
    label => label.label === "SVILUPPO ECONOMICO E COMPETITIVITà"
  )
  const formazioneprofessionale = entrate.filter(
    label =>
      label.label === "POLITICHE PER IL LAVORO E LA FORMAZIONE PROFESSIONALE"
  )

  const giustizia = entrate.filter(label => label.label === "Giustizia")

  const pesca = entrate.filter(
    label => label.label === "AGRICOLTURA, POLITICHE AGROALIMENTARI E PESCA"
  )
  const energia = entrate.filter(
    label =>
      label.label === "ENERGIA E DIVERSIFICAZIONE DELLE FONTI ENERGETICHE"
  )
  const rela = entrate.filter(
    label =>
      label.label === "RELAZIONI CON LE ALTRE AUTONOMIE TERRITORIALI E LOCALI"
  )
  const inter = entrate.filter(
    label => label.label === "RELAZIONI INTERNAZIONALI"
  )
  const accantonamenti = entrate.filter(
    label => label.label === "FONDI E ACCANTONAMENTI"
  )
  const debs = entrate.filter(label => label.label === "DEBITO PUBBLICO")

  const terzi = entrate.filter(
    label => label.label === "SERVIZI PER CONTO TERZI"
  )
  const anti = entrate.filter(
    label => label.label === "ANTICIPAZIONI FINANZIARIE"
  )

  useEffect(() => {
    let isCancelled = false
    setLoading(true)
    fetch(`
      https://cors-anywhere.herokuapp.com/https://openbilanci.it/armonizzati/bilanci/fraine-comune-ch/spese/dettaglio.json?year=${age}&type=preventivo`)
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

  const formatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  })
  const handleChange = event => {
    setAge(event.target.value)
  }

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
            <Button onClick={handleTooltipOpen}> ?</Button>
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
        {" "}
        <TreeItem nodeId="1" label="Servizi Istituzionali generali di gestione">
          {serviziistituzionaligeneralidigestione[0]?.children.map(item => {
            return (
              <TreeItem
                nodeId={item.slug}
                key={item.composition.hash}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="2" label="Giustizia">
          {giustizia[0]?.children.map(item => {
            return (
              <TreeItem
                nodeId={item.slug}
                key={item.composition.hash}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="3" label="Ordine pubblico e sicurezza">
          {ordinepubblicoesicurezza[0]?.children.map(item => {
            return (
              <TreeItem
                nodeId={item.slug}
                key={item.composition.hash}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="4" label="Istruzione e diritto allo studio">
          {istruzioneedirittoallostudio[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="5" label="Istruzione e diritto allo studio">
          {istruzioneedirittoallostudio[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem
          nodeId="6"
          label="Tutela e valorizzazione dei beni e attivita culturali"
        >
          {tutelaevalorizzazzionedeibenieattivitaculturali[0]?.children.map(
            item => {
              return (
                <TreeItem
                  key={item.composition.hash}
                  nodeId={item.slug}
                  label={item.label}
                >
                  <TreeItem
                    label={formatter.format(item.composition.correnti_value)}
                  />
                </TreeItem>
              )
            }
          )}
        </TreeItem>
        <TreeItem nodeId="7" label="Politiche giovanili, sport e tempo libero">
          {politichegiovanilisportetempolibero[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="8" label="Turismo">
          {turismo[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem
          nodeId="9"
          label="Assetto del territorio ed edilizia abitativa"
        >
          {assettodelterritorioedediliziaabitativa[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem
          nodeId="10"
          label="Sviluppo sostenibile e tutela del territorio e dell' ambiente"
        >
          {ambiente[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="11" label="Trasporti e diritto alla mobilita`">
          {transporti[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="12" label="Soccorso civile">
          {soccorsocivile[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem
          nodeId="13"
          label="Diritti Sociali, politiche sociali e famiglia"
        >
          {dirittisociali[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="14" label="Tutela della salute">
          {tuteladellasalute[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="15" label="Sviluppo economico e competitivita`">
          {sviluppoeconomico[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem
          nodeId="16"
          label="Politiche per il lavoro e la formazione professionale "
        >
          {formazioneprofessionale[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  nodeId={formatter.format(item.composition.correnti_value)}
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem
          nodeId="17"
          label="Agricoltura, politiche agroalimentari e pesca "
        >
          {pesca[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem
          nodeId="18"
          label="Energia e diversificazione delle fonti energetiche "
        >
          {energia[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem
          nodeId="19"
          label="Relazioni con le altre autonomie territoriali e locali "
        >
          {rela[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="20" label="Relazioni internazionali ">
          {inter[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="21" label="Fondi e accantonamenti ">
          {accantonamenti[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="22" label="Debito pubblico ">
          {debs[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="23" label="Anticipazioni Finanziare ">
          {anti[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
        <TreeItem nodeId="24" label="Servizi per conto terzi ">
          {terzi[0]?.children.map(item => {
            return (
              <TreeItem
                key={item.composition.hash}
                nodeId={item.slug}
                label={item.label}
              >
                <TreeItem
                  label={formatter.format(item.composition.correnti_value)}
                />
              </TreeItem>
            )
          })}
        </TreeItem>
      </TreeView>
    </React.Fragment>
  )
}

export default React.memo(TreeviewsComponents)
