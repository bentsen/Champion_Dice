import {useContext, useEffect, useState} from "react";
import {ChampionContext} from "../store/ChampionContext/ChampionList";
import Image from "next/image";
import {VersionContext} from "../store/VersionContext/VersionList";
import {motion} from "framer-motion";
import {Champion} from "../utils/types/champion.t";
import Modal from "../components/Modal";

const Champions = () => {
    const Champions = useContext(ChampionContext);
    const Version = useContext(VersionContext);
    const [inputValue, setInputValue] = useState<string>("")
    const [filteredList, setFilteredList] = useState<Champion[] | undefined>([])
    const [modalShowing, setModalShowing] = useState(false)
    const [modalChampion, setModalChampion] = useState<Champion>()

    useEffect(() => {
        setFilteredList(Champions)
    }, []);

    const filterChampion = (e: any) => {
        const keyword = e.target.value

        if(keyword !== ''){
            if(Champions) {
                const results: Champion[] | undefined = Champions?.filter((items) => {
                    return items.name.toLowerCase().startsWith(keyword.toLowerCase())
                })
                //if text fields has an input
                setFilteredList(results)
            }
            else
                console.log('no champions exits')
        } else {
            //if text fields is empty
            setFilteredList(Champions)
        }
        setInputValue(keyword)
    }

    const handleClick = (item: Champion) => {
        handleShow()
        setModalChampion(item)
    }

    const handleShow = () => {
        setModalShowing(true)
    }

    const handleClose = () => {
        setModalShowing(false)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div>
                <div className="flex justify-center mt-5">
                    <input className={"h-10 w-72 indent-2"} type="text" value={inputValue} onChange={filterChampion} placeholder={"Type name of Champion"}/>
                </div>
                <div className="grid grid-cols-10 gap-4 ml-2 mt-5">
                    {filteredList?.map((item) => (
                        <motion.div key={item.id} initial={"hidden"} animate={"show"}>
                            <motion.div key={item.id}>
                                <Image className={"cursor-pointer"} onClick={() => handleClick(item)} key={item.id} src={`https://ddragon.leagueoflegends.com/cdn/${Version}/img/champion/${item.image.full}`} unoptimized={true} width={120} height={120} alt={`picture of ${item.name}`}/>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <motion.button onClick={scrollToTop} whileHover={{scale: 1.1}} className="bg-button-hover text-white font-bold py-2 px-10 rounded">
                    Roll Up
                    </motion.button>
                </div>
                <Modal champion={modalChampion} version={Version} onClose={handleClose} visible={modalShowing} name={"lort"}/>
            </div>
        </>
    )
}

export default Champions