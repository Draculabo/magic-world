import Wallet from "../components/common/Wallet";

const connectWallet = () => {
  return (
    <div>
      <Wallet className="py-4 pr-4 flex justify-end" />
      <div className="w-full flex  items-center justify-center h-80">
        please connect wallet first
      </div>
    </div>
  );
};
export default connectWallet;
