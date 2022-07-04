import type { NextPage } from 'next'
import {motion} from "framer-motion";
import {useContext, useEffect, useState} from "react";
import {ChampionContext} from "../store/ChampionContext/ChampionList";
import {Champion} from "../utils/types/champion.t";
import Image from "next/image";

const Home: NextPage = () => {
  const Champions = useContext(ChampionContext);
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
    setChampion(null)
  }

  const myLoader=({src})=>{
    return `https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${champion?.image.full}`
  }

  return (
    <>
        <div className="flex justify-center mt-12">
          <div className={"text-center"}>
            <h1 className={"text-text-color text-4xl"}>Champion Dice</h1>
            <h2 className={"text-text-color text-base"}>Dice to get a League Of Legends Champion</h2>
            <div className="border border-text-color h-44 w-96 mt-2 text-center">

                {champion == null ? (
                    <p>No Champion</p>
                ) : (
                    <div className={"mt-2"}>
                      <Image loader={myLoader} src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${champion.image.full}`} width={120} height={120} alt={`picture of ${champion.name}`}/>
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
    </>
  )
}

export default Home