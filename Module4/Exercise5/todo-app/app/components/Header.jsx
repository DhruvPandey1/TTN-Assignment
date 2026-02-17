"use client"
import Link from "next/link";
import './Header.css'
import { usePathname } from "next/navigation";
export default function Header(){
    const pathName=usePathname();
    return(
        <div className="header">
            <nav>
                <Link href="/" className={pathName==='/'?"link":"not-active"}>Home</Link>
                <Link href="/users" className={pathName==='/users'?"link":"not-active"}>Users</Link>
                <Link href="/todos" className={pathName==='/todos'?"link":"not-active"}>Todos</Link>
            </nav>
        </div>
    );
}