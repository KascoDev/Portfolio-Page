import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/images/Profile-picture.png"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Okasime</span> Dimowo
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Data Analyst & Developer
      </p>
      {/* Resume */}
      <a
        href="https://knowledgeable-cooing-waxflower.glitch.me/"
        download="Okasime's Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <FiExternalLink className="w-6 h-6" />
        <span>My Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-center w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.linkedin.com/in/okasime-dimowo-076635b0/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/KascoDev">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Witzenhausen,Germany </span>
        </div>
        <p className="my-2 "> dimowookasime@gmail.com </p>
        <p className="my-2"> +4915212991266 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("dimowookasime@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
