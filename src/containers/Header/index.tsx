import NavBar from "@/components/NavBar";
import { motion } from "framer-motion"
export default function Header(){
    return (
        <header>
            <motion.div className="circle"/>
            <NavBar/>
        </header>
    )
}