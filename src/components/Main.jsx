import axios from "axios";
import { useEffect } from "react";

const Main = () => {
  const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_ID;
  const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getNFTs/`;
  // Replace with the wallet address you want to query for NFTs:
  const ownerAddr = "0x1107A5a773ac7253c12f2D79F5d981C23DA147AC";

  // Construct the axios request:

  useEffect(() => {
    var config = {
      method: "get",
      // FOR LW3 SNOOPIES
      //   url: `https://polygon-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs?owner=0xdb6EAFFa95899B53b27086Bd784F3BBFd58Ff843&contractAddresses%5B%5D=0x1Ed25648382c2e6Da067313e5DAcb4F138Bc8b33&withMetadata=true`,

      // FOR BUILD SPACE

      url: `https://polygon-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs?owner=0xdb6EAFFa95899B53b27086Bd784F3BBFd58Ff843&contractAddresses%5B%5D=0x3CD266509D127d0Eac42f4474F57D0526804b44e&withMetadata=true`,
    };
    axios(config)
      .then((response) => console.log(JSON.stringify(response.data, null, 2)))
      .catch((error) => console.log(error));
  }, [baseURL]);

  return <div></div>;
};

export default Main;
