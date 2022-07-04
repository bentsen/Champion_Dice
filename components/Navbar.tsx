import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagramSquare, faTwitterSquare, faDiscord} from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {

    const refreshPage = () => {
        if(window.location.pathname == "/") {
            window.location.reload()
        }
    }

    return (
        <>
            <nav className={"bg-navbar-color h-16 shadow-lg"}>
                <div className="container mx-auto">
                    <div className="sm:flex justify-between h-16">
                        <motion.div whileHover={{scale: 1.1}} className={"items-center flex cursor-pointer"}>
                            <Link href={"/"}>
                                <Image onClick={refreshPage} src={"/../public/logo.png"} alt={"picture of logo"} width={250} height={60}/>
                            </Link>
                        </motion.div>
                        <div className="items-center flex">
                            <ul className="space-x-5 text-2xl text-white">
                                <li className="li sm:inline-block">
                                    <a href="#"><FontAwesomeIcon icon={faFacebookSquare}/></a>
                                </li>
                                <li className="li sm:inline-block">
                                    <a href="#"><FontAwesomeIcon icon={faInstagramSquare}/></a>
                                </li>
                                <li className="li sm:inline-block">
                                    <a href="#"><FontAwesomeIcon icon={faTwitterSquare}/></a>
                                </li>
                                <li className="li sm:inline-block">
                                    <a href="#"><FontAwesomeIcon icon={faDiscord}/></a>
                                </li>
                            </ul>
                            <ul className="text-gray-400 sm:self-center ml-12 border-t sm:border-none text-sm space-x-2">
                                <li className="sm:inline-block">
                                    <Link href={"#"}><button className="bg-button-color2 hover:bg-button-hover2 h-8 w-16 rounded text-white">Log In</button></Link>
                                </li>
                                <li className="sm:inline-block">
                                    <Link href={"#"}><button className="bg-button-color hover:bg-button-hover h-8 w-16 rounded text-white">Sign Up</button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar