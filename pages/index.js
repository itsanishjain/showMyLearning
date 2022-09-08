import ConnectWallet from "../src/components/ConnectWallet";

export default function Home() {
  return (
    <div>
      <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
        <div className="absolute top-6 right-6">
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
}
