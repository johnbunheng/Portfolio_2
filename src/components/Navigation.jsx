import { FaCode } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
const Navigation = () => {

    const Menu = [
        {
            name:"Home",
            icon:<FaHome />,
            link:"#"
        },
         {
            name:"Resume",
            icon:<IoDocumentText />,
            link:"#"
        },
         {
            name:"Contact",
            icon:<IoMdContact />,
            link:"#"
        },
    ]

    return ( 
        <div className="flex justify-around items-center shadow-lg py-4 sticky z-50 top-0 bg-slate-900">
                {/* logo */}
                <div className="flex items-center space-x-1">
                    <span className="text-green-500 font-medium animate-spin"><FaCode /> </span>
                    <h1 className="ubuntu-light text-xl text-white">HenG</h1>
                </div>
                {/* menu */}
                <div>
                    <ul className="flex text-center space-x-4">
                    {Menu.map((item,index)=>
                       <li key={index}>
                            <a  className="ubuntu-nomal text-sm text-white flex items-center hover:underline" href="">
                            <span className=" text-green-600 text-lg px-1">{item.icon}</span>
                            {item.name}
                            </a>
                       </li>
                    )}
                    </ul>  
                </div>
        </div>
     );
}
 
export default Navigation;