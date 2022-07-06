import Image from "next/image";
import {Champion} from "../utils/types/champion.t";

const Modal = ({champion, visible, onClose} : Champion | any) => {

    const handleOnClose = (e: any) => {
        if(e.target.id === "container")
        onClose()
    }

    if(!visible) return null;
    return (
        <>
            <div id={"container"} onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-30 backdrop-blur-sm flex justify-center items-center">
                <div className="bg-footer-color p-2 rounded w-3/6 h-96 flex flex-row">
                    <div className={"bg-blue flex items-center ml-5"}>
                        <div className={"flex flex-row"}>
                            <Image src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} unoptimized={true} width={400} height={270} alt={`picture of ${champion.name}`}/>
                            <div className={"ml-5 mt-5"}>
                                <p className={"text-white mb-5"}>Name: {champion.name}</p>
                                <p className={"text-white mb-5"}>Title: {champion.title}</p>
                                <p className={"text-white mb-5"}>Type: {champion.tags}</p>
                                <p className={"text-white mb-5"}>PartType: {champion.partype}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal