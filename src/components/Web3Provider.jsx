import { createClient, WagmiConfig, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const client = createClient(
  getDefaultClient({
    appName: "Show My Learnings",
    autoConnect: true,
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
    chains: [chain.polygon],
  })
);

const Web3Provider = ({ children }) => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider mode="dark">{children}</ConnectKitProvider>
    </WagmiConfig>
  );
};

export default Web3Provider;
