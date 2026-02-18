"use client"
import Link from "next/link";
import './Header.css'
import { usePathname, useRouter } from "next/navigation";
export default function Header(){
    const pathName=usePathname();
    return(
        <div className="header">
            <nav>
                <Link href="/" className={pathName==='/'?"link":"not-active"}>Home</Link>
                <Link href="/Product/CSR" className={pathName==='/Product/CSR'?"link":"not-active"}>ProductCSR</Link>
                <Link href="/Product/SSR" className={pathName==='/Product/SSR'?"link":"not-active"}>ProductSSR</Link>
                <Link href="/Product/ISR/1" className={pathName==="/Product/ISR/1"?"link":"not-active"}>ProductISR</Link>
            </nav>
        </div>
    );
}