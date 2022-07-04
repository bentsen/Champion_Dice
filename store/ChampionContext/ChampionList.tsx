import React, {ReactNode} from "react";
import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {Champion} from "../../utils/types/champion.t";

export const ChampionContext = React.createContext<Champion[] | undefined>([]);

export default function ChampionListProvider({children}: {children: ReactNode}) {
    const [champions, setChampions] = useState<Champion[]>([]);

    useEffect(() =>{
        async function getChampions() {
            axios.get<Champion>("https://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json")
                    .then(response => {
                        let championData = [];
                        for(let key in response.data.data) {
                            championData.push(response.data.data[key])
                        }
                 //puts champions data object into state
                setChampions(championData)
            })
                .catch(e => {
                    console.log(e)
                })
        }
        getChampions()
    },[])

    return (
        <>
            <ChampionContext.Provider value={champions}>
                {children}
            </ChampionContext.Provider>
        </>
    )
}