import { createClient, WagmiConfig, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const client = createClient(
  getDefaultClient({
    appName: "Show My Learnings",
    autoConnect: true,
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    chains: [chain.polygon],
  })
);

const Web3Provider = ({ children }) => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
};

export default Web3Provider;
