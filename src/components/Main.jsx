import Image from "next/image";
import { useAccount } from "wagmi";
import useFetch from "../hooks/useFetch";
import { lw3ContractAddress, buildspaceContractAddress } from "../lib/consts";
import Loader from "./Loader";

const Main = () => {
  const { address } = useAccount();

  const lw3URL = `https://polygon-mainnet.g.alchemy.com/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}/getNFTs?owner=${address}&contractAddresses%5B%5D=${lw3ContractAddress}&withMetadata=true`;

  const { data, isPending, error } = useFetch(lw3URL);

  console.log({ data });
  console.log({ isPending });
  console.log({ error });

  if (!address)
    return (
      <div className="text-white bg-orange-700 p-4 m-4 rounded">
        Please connect to wallet
      </div>
    );

  if (isPending) return <Loader />;

  return (
    <div className="text-white bg-orange-700 p-4 m-4 rounded">
      {data &&
        data.length != 0 &&
        data.map((item, index) => (
          <div key={index}>
            <Image src={item.media.raw} alt="image" />
          </div>
        ))}
    </div>
  );
};

export default Main;
