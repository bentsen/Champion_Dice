import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}: any) => {
    return (
        <>
            <div className="min-h-full relative">
                <Navbar/>
                <div className={"pb-96"}>
                    {children}
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Layout