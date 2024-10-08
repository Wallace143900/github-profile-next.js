import Image from "next/image";
import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Header () {
    return (
        <header className={styles.header} >
            <Link href="/">
                <Image src={logo} height={48} width={233} alt="Logo" />
            </Link>
        </header>
    )
}