import parameterize from "parameterize"

import { graphql, useStaticQuery } from "gatsby"

export default function useEmergences() {
  const { emergenzaRegioniJson = {} } = useStaticQuery(graphql`
    query {
      emergenzaRegioniJson {
        datastore {
          data {
            Regione
            Numero_nuclei_dl_34_2020_art_82
            Numero_persone_coinvolte_dl_34_2020_art_82
            Numero_nuclei_dl_104_2020_art_23
            Numero_persone_coinvolte_dl_104_2020_art_23
            Importo_medio_mensile_dl_34_2020_art_82
            Importo_medio_mensile_dl_104_2020_art_23
            latitude
            longitude
          }
        }
      }
    }
  `)

  let emergenzeArray = emergenzaRegioniJson.datastore.data

  let emergenza = emergenzeArray.map(eme => {
    return {
      ...eme,
      path: `/${parameterize(eme?.Regione)}/`,
    }
  })

  return {
    emergenza,
  }
}
