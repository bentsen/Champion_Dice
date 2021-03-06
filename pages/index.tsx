import type { NextPage } from 'next'
import {motion} from "framer-motion";
import {useContext, useState} from "react";
import {ChampionContext} from "../store/ChampionContext/ChampionList";
import {Champion} from "../utils/types/champion.t";
import Image from "next/image";
import {VersionContext} from "../store/VersionContext/VersionList";
import Link from "next/link";

const Home: NextPage = () => {
  const Champions = useContext(ChampionContext);
  const Version = useContext(VersionContext);
  const [champion, setChampion] = useState<Champion>()

  const getRandomChamp = () => {
    if (Champions) {
      const randomChamp = Champions[Math.floor(Math.random() * Champions?.length)];
      setChampion(randomChamp)
    }
    else
      console.log("No champion exists")
  }

  const resetChamp = () => {
    setChampion(undefined)
  }

  const myLoader=()=>{
    return `https://ddragon.leagueoflegends.com/cdn/${Version}/img/champion/${champion?.image.full}`
  }

  return (
    <>
        <div className="flex justify-center mt-12">
          <div className={"text-center"}>
            <h1 className={"text-text-color text-4xl"}>Champion Dice</h1>
            <h2 className={"text-text-color text-base"}>Dice to get a League Of Legends Champion</h2>
            <div className="border border-text-color h-44 w-auto mt-2 text-center">
                {champion == undefined ? (
                    <p>No Champion</p>
                ) : (
                    <div className={"mt-2"}>
                      <Image loader={myLoader} src={`https://ddragon.leagueoflegends.com/cdn/${Version}/img/champion/${champion.image.full}`} unoptimized={true} width={120} height={120} alt={`picture of ${champion.name}`}/>
                      <p className={"text-text-color"}>{champion?.name}</p>
                    </div>
                )}
            </div>
              <div className={"mt-5 space-x-5"}>
                <motion.button whileHover={{scale: 1.1}} onClick={resetChamp} className="bg-transparent text-text-color font-semibold py-2 px-8 border border-text-color rounded">
                  Reset
                </motion.button>
                <motion.button whileHover={{scale: 1.1}} onClick={getRandomChamp} className="bg-button-hover text-white font-bold py-2 px-10 rounded">
                  Roll
                </motion.button>
              </div>
          </div>
        </div>
        <div className={"mt-10 flex justify-center"}>
          <div className={""}>
            <p className={"text-white text-sm"}>New! Check out all <span className={"text-button-hover cursor-pointer underline"}><Link href={"/champions"}>Champions</Link></span></p>
          </div>
        </div>
    </>
  )
}

export default Home