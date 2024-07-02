import { useAccount, useNetwork } from "wagmi";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { ZKShuffleContext } from "../contexts/ZKShuffle";
import { ethers } from "ethers";
import { bnbTest } from "../config/chains";
import ChainSwitch from "../components/common/ChainSwitch";
import Game from "../components/modules/game/Game";

export default function Home() {
  const router = useRouter();

  const { chain } = useNetwork();
  const { address } = useAccount();

  const { isLoaded } = useContext(ZKShuffleContext);
  const creator = router?.query?.creator as string;
  const joiner = router?.query?.joiner as string;

  if (!router.isReady || !isLoaded) {
    return (
      <div className=" flex flex-col gap-10  h-screen items-center justify-center  text-2xl font-medium bg-slate-900 ">
        <div className="text-2xl font-medium">Loading resource...</div>
      </div>
    );
  }

  if (!address) {
    router.replace("connectWallet");
    return;
  }

  if (chain?.id !== bnbTest.id) {
    return <ChainSwitch />;
  }

  if ([joiner, creator].some((addr) => !ethers.utils.isAddress(addr))) {
    return (
      <div className=" flex flex-col gap-10  h-screen items-center justify-center  text-2xl font-medium bg-slate-900 ">
        <div className="text-2xl font-medium">
          Please add user addresses on url
        </div>
      </div>
    );
  }
  if (![creator, joiner].some((addr) => addr === address)) {
    return (
      <div className=" flex flex-col gap-10  h-screen items-center justify-center  text-2xl font-medium bg-slate-900 ">
        <div className="text-2xl font-medium">this is not your game</div>
      </div>
    );
  }

  return <Game />;
}
