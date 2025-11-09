import { RiFolderVideoFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
const Skill = () => {
    const Skills = [
        {
            name: "Web Development ",
            icon: <FaLaptopCode />,
            detail:"Front-End Development...",
            link:"#"
        },
        {
            name: "Graphic Design",
            icon: <MdDesignServices />,
            detail:"Poster , Logo , Banner...",
            link:"#"
        },
        {
            name: "Video Editor",
            icon: <RiFolderVideoFill />,
            detail:"Sort & Long Video , Motion Graphic...",
            link:"#"
        }
    ];

    return (
        <div className="bg-slate-900 py-5">
            <h1 className="roboto text-white text-center font-extrabold text-4xl ">Skill <GiSkills className=" inline-block text-green-500 -mt-3"/></h1>
               <hr className="border-green-700 border mt-5 w-[80%] m-auto" />
            <ul className="sm:space-x-5 sm:flex sm:justify-around">
                {Skills.map((item,index) =>
                    <li key={index}>
                        <div className="w-80 m-auto mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <span className="text-4xl text-green-600">{item.icon}</span>
                            </div>
                            <a href="#">
                                <h5 className="roboto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                            </a>
                            <p className="ubuntu-nomal mb-3 text-gray-500 dark:text-gray-400">{item.detail}</p>
                            <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                                View More
                                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Skill;