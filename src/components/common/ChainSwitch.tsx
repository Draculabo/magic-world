import { useSwitchNetwork } from "wagmi";
import { bnbTest } from "../../config/chains";

const ChainSwitch = () => {
  const { switchNetwork } = useSwitchNetwork({
    chainId: bnbTest.id,
  });
  return (
    <div className=" flex flex-col gap-10  h-screen items-center justify-center  text-2xl font-medium bg-slate-900 ">
      <div className="text-2xl font-medium">
        Only support bnb test network now
      </div>
      <div
        onClick={() => {
          try {
            switchNetwork?.();
          } catch (error) {
            console.log(error);
          }
        }}
        className="px-6 py-2 text-base font-medium rounded-lg bg-slate-100 text-slate-900  text-center cursor-pointer dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10 hover:opacity-70"
      >
        Switch to bnb test
      </div>
    </div>
  );
};
export default ChainSwitch;
