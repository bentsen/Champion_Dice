import Image from "next/image";
import Link from "next/link";
import {useNavigate} from 'react-router-dom'
import {useState} from "react";


const Register = () => {
    const history = useNavigate()
    const initialFormData = Object.freeze({
        email:'',
        username:'',
        password:'',
    });
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            //Trim whiteSpace
            [e.target.name]: e.target.value.trim(),
        });
    };

    return(
        <>
            <div className="flex justify-center mt-12">
                <div>
                    <div className={"text-center"}>
                        <h1 className={"text-text-color text-4xl"}>Champion Dice Register</h1>
                        <h2 className={"text-text-color text-base"}>We&apos;re stoked to have you as a member!</h2>
                    </div>
                    <div className="border-2 rounded border-black h-auto w-96 mt-2 block">
                        <div className={"border-box block bg-black"}>
                            <div className={"text-center"}>
                                <Image src={"/../public/logo.png"} alt={"picture of logo"} width={250} height={60}/>
                            </div>
                        </div>
                        <div>
                            <div className={"relative"}>
                                <div className={"text-center mt-3"}>
                                    <h1 className={"text-white text-2xl"}>Create an Account</h1>
                                </div>
                                <div className={"block ml-7"}>
                                    <form action="">
                                        <div className={"mt-5"}>
                                            <label className={"text-white"} htmlFor="">EMAIL</label>
                                            <div>
                                                <input onChange={handleChange} className={"indent-2 w-80 h-8 rounded"} type="email" placeholder={"hello@championdice.com"}/>
                                            </div>
                                        </div>
                                        <div className={"mt-5"}>
                                            <label className={"text-white"} htmlFor="">USERNAME</label>
                                            <div>
                                                <input onChange={handleChange} className={"indent-2 w-80 h-8 rounded"} type="text" placeholder={"YourUsername"}/>
                                            </div>
                                        </div>
                                        <div className={"mt-5"}>
                                            <label className={"text-white"} htmlFor="">PASSWORD</label>
                                            <div>
                                                <input onChange={handleChange} className={"indent-2 w-80 h-8 rounded"} type="password" placeholder={"Keep it secret, keep it safe"}/>
                                            </div>
                                        </div>
                                        <div className={"mt-3"}>
                                            <div className="flex items-center">
                                                <input id="link-checkbox" type="checkbox" value=""
                                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    I agree with the
                                                    <a href="#" className="text-custom-text hover:underline"> terms of Use</a>,
                                                    <a href="#" className="text-custom-text hover:underline"> Privacy Policy </a>
                                                    <br/>
                                                    and
                                                    <a href="#" className="text-custom-text hover:underline"> Cookies Policy</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className={"mt-5"}>
                                            <button onClick={} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-80 rounded">
                                                Create Account
                                            </button>
                                        </div>
                                        <div className={"mt-3 text-white mb-3"}>
                                            Already have an Account?
                                            <Link href={"/login"}><span className={"cursor-pointer text-custom-text"}> Login</span></Link>
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

export default Register