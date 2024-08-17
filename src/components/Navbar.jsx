// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo"></img> */}
        <a href="#"><div className="log font-thin tracking-tight text-4xl">Portfolio</div></a>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/adityasaikolluru" target="_blank"><FaLinkedin></FaLinkedin></a>
        <a href="https://github.com/Adityakolluru07" target="_blank"><FaGithub></FaGithub></a>
        {/* <a href="https://www.instagram.com/adityasaikolluru/?hl=en" target="_blank"><FaInstagram></FaInstagram></a> */}
      </div>
    </nav>
  );
}

export default Navbar