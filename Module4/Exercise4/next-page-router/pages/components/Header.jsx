import Link from "next/link";
import styles from'./Header.module.css'
export default function Header(){
    return(
        <div className={styles.header}>
            <nav>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/Products" className={styles.link}>Products</Link>
            </nav>
        </div>
    );
}