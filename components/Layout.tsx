import Navbar from "./Navbar";
import Footer from "./Footer";
import {useRouter} from "next/router";

const Layout = ({children}: any) => {
    return (
        <>
            <div className="content">
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </>
    )
}

export default Layout