import React from "react"

const NotFoundPage = () => {
  const [res, setRes] = React.useState([])

  React.useEffect(() => {
    fetch(
      "https://api.nftport.xyz/v0/nfts/0x47c7ff137d7a6644a9a96f1d44f5a6f857d9023f/6688?chain=polygon",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${process.env.GATSBY_NFT}`,
        },
      }
    )
      .then(data => data.json())
      .then(resa => setRes(resa))
  }, [])

  return (
    <>
      <h1>test</h1>
      {res.nft && <img src={res.nft.cached_file_url} alt="nft example homemade" />}
      <pre>{res.nft && JSON.stringify(res.nft)}</pre>
    </>
  )
}

export default NotFoundPage
