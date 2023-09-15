import { motion } from "framer-motion"
import Link from "next/link"

export default function NavBar(){
    return(
        <nav className="fixed w-full flex px-60 -my-36 mx-auto justify-between align-middle">
            <Link href={'/'}>
                <motion.h1 className="text-4xl text-gray-700 dark:text-gray-200 cursor-pointer">MyWeather.com</motion.h1>
            </Link>
            <ul className="flex text-gray-700 dark:text-gray-200">
                <Link href={'/'}>
                    <li className="mx-2 text-xl cursor-pointer hover:after:">MyLocation</li>
                </Link>
                <Link href={'/otherLocation'}>
                    <li className="mx-2 text-xl cursor-pointer">OtherLocation</li>
                </Link>
                <Link href={'/contact'}>
                    <li className="mx-2 text-xl cursor-pointer">Contact</li>
                </Link>
            </ul>
        </nav>
    )
}