import Link from "next/link";
import './Header.css'
export default function Header(){
    return(
        <div className="header">
            <nav>
                <Link href="/" className="link">Home</Link>
                <Link href="/Recipies" className="link">Recipies</Link>
            </nav>
        </div>
    );
}