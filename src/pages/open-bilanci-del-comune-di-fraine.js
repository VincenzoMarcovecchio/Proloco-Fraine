import React, { useState } from "react"
import { useTheme } from "@material-ui/core/styles"
import SwipeableViews from "react-swipeable-views"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from "@material-ui/core/Container"
import TreeviewsComponents from "../components/treeview/TreeviewsComponents"
import TreeviewsComponentsEntrate from "../components/treeview/TreeviewsComponentsEntrate"
import TabPanel from "../components/tabpanel/Tabpanel"

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

function FullWidthTabs() {
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  return (
    <Layout>
      <SEO
        title="Open bilanci del comune di Fraine"
        description="Entrate ed uscite preventive del comune di Fraine secondo i dati forniti da openbilanci"
      />
      <Container maxWidth="md">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Entrate" {...a11yProps(0)} />
            <Tab label="Spese" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <TreeviewsComponentsEntrate />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <TreeviewsComponents />
          </TabPanel>
        </SwipeableViews>
      </Container>
    </Layout>
  )
}
export default React.memo(FullWidthTabs)
