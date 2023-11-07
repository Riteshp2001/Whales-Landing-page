"use client";

import Main from "./Middle/Main";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SignUp from "./SignUp/SignUp";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
	};
	return (
		<div className="overflow-hidden">
			<HamburgerToggleMenu toggleMenu={toggleMenu}  isMenuOpen={isMenuOpen} />
			<Header />
			<Main />
			<Footer />
			<SignUp isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
		</div>
	);
}

function HamburgerToggleMenu({ isMenuOpen, toggleMenu }) {
	return (
		<div className={styles.container}>
			<div
				id={styles.hamburger_icon}
				className={isMenuOpen ? `${styles.hamburger} ${styles["is-active"]}` : styles.hamburger}
				onClick={toggleMenu}
			>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
			</div>
		</div>
	);
}
