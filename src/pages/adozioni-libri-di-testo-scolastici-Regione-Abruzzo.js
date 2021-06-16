// import React, { useRef, useEffect, useState } from "react"
// import Layout from "../components/layout"
// import Container from "@material-ui/core/Container"
// import PropTypes from "prop-types"
// import { makeStyles } from "@material-ui/core/styles"
// import Tabs from "@material-ui/core/Tabs"
// import Tab from "@material-ui/core/Tab"
// import Typography from "@material-ui/core/Typography"
// import Box from "@material-ui/core/Box"
// import { GatsbySeo } from "gatsby-plugin-next-seo"
// import jsonData from "../data/ALTA.json"

// function TabPanel(props) {
//   const { children, value, index, ...other } = props

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   )
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// }

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   }
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: "flex",
//     height: 224,
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
// }))

// const Paggina = () => {
//   const classes = useStyles()
//   const [value, setValue] = React.useState(0)

//   const handleChange = (event, newValue) => {
//     setValue(newValue)
//   }
//   console.log(jsonData)

//   return (
//     <React.Fragment>
//       <GatsbySeo
//         title="Proloco Fraine | Agenzia Del Demanio Abruzzo"
//         description="Composizione e valori dei beni patrimoniali dello Stato in base all'art. 828 C.C. aggregato per Regione, Provincia. Elenco delle Aree dello Stato in base all'art. 828 C.C. fino al dettaglio della singola area."
//         canonical="https://www.prolocofraine.org/elenco-delle-aree-del-patrimonio-immobiliare-dello-stato-in-gestione-all-agenzia-del-demanio-sull-intero-territorio-nazionale/"
//         openGraph={{
//           url:
//             "https://www.prolocofraine.org/elenco-delle-aree-del-patrimonio-immobiliare-dello-stato-in-gestione-all-agenzia-del-demanio-sull-intero-territorio-nazionale/",
//           title: "Agenzia Del Demanio Abruzzo",
//           description:
//             "Composizione e valori dei beni patrimoniali dello Stato in base all'art. 828 C.C. aggregato per Regione, Provincia. Elenco delle Aree dello Stato in base all'art. 828 C.C. fino al dettaglio della singola area.",

//           images: [
//             {
//               url:
//                 "https://images.unsplash.com/photo-1462887522061-50ac95eaad10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwYnVpbGRpbmdzJTIwaXRhbHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//               width: 800,
//               height: 600,
//               alt: "Agenzia Del Demanio Abruzzo",
//             },
//             {
//               url:
//                 "https://images.unsplash.com/photo-1462887522061-50ac95eaad10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwYnVpbGRpbmdzJTIwaXRhbHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//               width: 900,
//               height: 800,
//               alt: "Agenzia Del Demanio Abruzzo",
//             },
//           ],
//           site_name: "Proloco Fraine",
//         }}
//         twitter={{
//           handle: "Vincenzo Marcovecchio",
//           site: "Proloco Fraine",
//           cardType: "summary_large_image",
//         }}
//       />
//       <Layout>
//         {/* <Container
//           style={{
//             margin: "5rem auto",
//             padding: "1rem",
//           }}
//           maxWidth="md"
//         >
//           <div className={classes.root}>
//             <Tabs
//               orientation="vertical"
//               variant="scrollable"
//               value={value}
//               onChange={handleChange}
//               aria-label="Vertical tabs example"
//               className={classes.tabs}
//             >
//               <Tab label="Item One" {...a11yProps(0)} />
//               <Tab label="Item Two" {...a11yProps(1)} />
//               <Tab label="Item Three" {...a11yProps(2)} />
//               <Tab label="Item Four" {...a11yProps(3)} />
//               <Tab label="Item Five" {...a11yProps(4)} />
//               <Tab label="Item Six" {...a11yProps(5)} />
//               <Tab label="Item Seven" {...a11yProps(6)} />
//             </Tabs>
//             <TabPanel value={value} index={0}>
//               Item One
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//               Item Two
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//               Item Three
//             </TabPanel>
//             <TabPanel value={value} index={3}>
//               Item Four
//             </TabPanel>
//             <TabPanel value={value} index={4}>
//               Item Five
//             </TabPanel>
//             <TabPanel value={value} index={5}>
//               Item Six
//             </TabPanel>
//             <TabPanel value={value} index={6}>
//               Item Seven
//             </TabPanel>
//           </div>
//         </Container> */}
//         <h1>test</h1>
//       </Layout>
//     </React.Fragment>
//   )
// }

// export default Paggina
