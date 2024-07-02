import React from "react";
import { useAccount, useConnect } from "wagmi";
import { cn } from "../../utils/cn";
interface WalletProps {
  className?: string;
}
const Wallet = ({ className }: WalletProps) => {
  const { connect, connectors } = useConnect();
  const { address } = useAccount();
  return (
    <div className={cn(``, className)}>
      {address === undefined ? (
        <div
          onClick={() => {
            connect({
              connector: connectors[0],
            });
          }}
          className="px-6 py-2 hover:opacity-70 text-base font-medium rounded-lg bg-slate-100 text-slate-900  text-center cursor-pointer dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10"
        >
          connect wallet
        </div>
      ) : (
        `address: ${address}`
      )}
    </div>
  );
};
export default Wallet;
