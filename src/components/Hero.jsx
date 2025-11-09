import Navigation from "./Navigation";
import mainpic from "../Img/pic1.png"
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Hero = () => {
    return (
        <div className="bg-slate-900 ">
            {/* Navigation */}
           <Navigation/>
            <div className="py-5">
                {/* Text content */}
                <div className="flex justify-center text-center text-white mx-5">
                    <div>
                        <p className="text-lg">Hi There!</p>
                        <h1 className="roboto font-extrabold text-5xl">I am John Bunheng</h1>
                        <p className="mt-3 text-lg">I make the complex simple</p>
                        <button className="ubuntu-nomal border-[2px] border-green-800 px-3 py-2 my-4 rounded-md hover:bg-green-700 duration-300 hover:px-5 hover:text-white">Contact Me</button>

                    </div>
                </div>
                {/* contact */}
                <hr className="border-green-700 border mt-5 w-[80%] m-auto" />
                <div className="roboto text-center text-white  py-5 sm:flex sm:justify-around">  
                    <div className="space-y-2 m-auto bg-slate-800 border-gray-700 border mt-5 w-60 py-3 rounded-md shadow-xl">
                        <h1 className="ubuntu-nomal text-xl font-semibold text-green-400"><MdEmail className=" inline-block text-2xl -mt-1"/> Email </h1>
                        <p className="text-sm">chounjohn002@gmail.com</p>
                    </div>
                    
                    <div className="space-y-2 m-auto bg-slate-800 border-gray-700 border mt-5 w-60 py-3 rounded-md shadow-xl">
                        <h1 className="ubuntu-nomal text-xl font-semibold text-green-400"><FaPhoneVolume className=" inline-block text-2xl -mt-3"/> Phone </h1>
                        <p className="text-sm">+855 88 99 69 560</p>
                    </div>
                   
                    <div className="space-y-2 m-auto bg-slate-800 border-gray-700 border mt-5 w-60 py-3 rounded-md shadow-xl">
                        <h1 className="ubuntu-nomal text-xl  font-semibold text-green-400"><HiOutlineLocationMarker  className=" inline-block text-2xl -mt-3"/> Location </h1>
                        <p className="text-sm">Phnom Penh City</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;