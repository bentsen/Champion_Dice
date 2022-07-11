import Link from "next/link";
import Image from "next/image";

const Login = () => {

    return(
        <>
            <div className="flex justify-center mt-12">
                <div>
                    <div className={"text-center"}>
                        <h1 className={"text-text-color text-4xl"}>Champion Dice Login</h1>
                        <h2 className={"text-text-color text-base"}>We&apos;re stoked to have you back!</h2>
                    </div>
                    <div className="border-2 rounded border-black h-auto w-auto mt-2 block">
                        <div className={"border-box block bg-black"}>
                            <div className={"text-center"}>
                                <Image src={"/../public/logo.png"} alt={"picture of logo"} width={250} height={60}/>
                            </div>
                        </div>
                        <div>
                            <div className={"relative"}>
                                <div className={"text-center mt-3"}>
                                    <h1 className={"text-white text-2xl"}>Welcome Back</h1>
                                </div>
                                <div className={"block ml-7"}>
                                    <form action="">
                                        <div className={"mt-5"}>
                                            <label className={"text-white"} htmlFor="">EMAIL</label>
                                            <div>
                                                <input className={"indent-2 w-11/12 h-8 rounded"} type="email"/>
                                            </div>
                                        </div>
                                        <div className={"mt-5"}>
                                            <label className={"text-white"} htmlFor="">PASSWORD</label>
                                            <div>
                                                <input className={"indent-2 w-11/12 h-8 rounded"} type="password"/>
                                            </div>
                                        </div>
                                        <div className={"mt-3"}>
                                            <a className={"text-custom-text text-xs"} href="">Forgot Your Password?</a>
                                        </div>
                                        <div className={"mt-3"}>
                                            <div className="flex items-center">
                                                <input id="link-checkbox" type="checkbox" value=""
                                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                    <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Remember me
                                                    </label>
                                            </div>
                                        </div>
                                        <div className={"mt-5"}>
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-11/12 rounded">
                                                Login
                                            </button>
                                        </div>
                                        <div className={"mt-3 text-white mb-3"}>
                                            Need an Account?
                                            <Link href={"/register"}><span className={"cursor-pointer text-custom-text"}> Register</span></Link>
                                            .
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login