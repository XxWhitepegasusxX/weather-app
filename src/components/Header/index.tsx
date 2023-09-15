import Link from "next/link";

export default function Header(){
    return (
        <header className="flex justify-end mx-32 mt-10">
            <ul className="flex gap-3 align-middle">
                <Link href={'/'}>
                    <li className="cursor-pointer">Weather</li>
                </Link>
                <Link href={'/cep'}>
                    <li className="cursor-pointer">CEP</li>
                </Link>
                <Link href={'/contact'}>
                   <li className="cursor-pointer">Contact</li>
                </Link>
            </ul>
        </header>
    )
}