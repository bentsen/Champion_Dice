import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagramSquare, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return(
        <>
            <footer className={"bg-footer-color text-gray-800 fixed inset-x-0 h-44 bottom-0 border-black border-2"}>
                <div className="flex flex-row justify-around text-custom-text mt-6">
                    <div>
                        <p className="text-white">Community</p>
                        <a href="https://github.com/bentsen"><span className="span hover:underline">Github</span><br/></a>
                        <a href="#"><span className="span hover:underline">Discord</span><br/></a>
                        <a href="#"><span className="span hover:underline">Feedback</span><br/></a>
                        <div className="space-x-2">
                            <a href="#"><FontAwesomeIcon icon={faFacebookSquare}/></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagramSquare}/></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitterSquare}/></a>
                        </div>
                    </div>
                    <div>
                        <p className="text-white">Support</p>
                        <a href="#"><span className="span hover:underline">FAQ</span><br/></a>
                        <a href="#"><span className="span hover:underline">Ticker</span><br/></a>
                        <a href="#"><span className="span hover:underline">Phone</span><br/></a>
                        <a href="#"><span className="span hover:underline">Test</span><br/></a>
                    </div>
                    <div>
                        <p className="text-white">Test</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer