import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import styles from "./SignUp.module.css";

export default function SignUp({ isMenuOpen }) {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [emailErrorText, setEmailErrorText] = useState("");

	const validateEmail = () => {
		if (!email) {
			setEmailError(true);
			setEmailErrorText("Please enter your email.");
			return false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setEmailError(true);
			setEmailErrorText("Please enter a valid email.");
			return false;
		} else {
			setEmailError(false);
			setEmailErrorText("");
			return true;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateEmail()) {
			window.location.href = "https://app.loch.one/welcome";
		}
	};

	return (
		<div className={`${isMenuOpen ? `${styles["overlay"]}` : `${styles.display}`}`}>
			<div className={styles["sign-up"]}>
				<div className={styles["sign-up__container"]}>
					<div className={styles["sign-up__header"]}>
						<h1 className={styles["sign-up__title"]}>
							Sign Up for<br />
							exclusive access
						</h1>
					</div>
					<form className={styles["sign-up__form"]} onSubmit={handleSubmit}>
						<div className={styles["sign-up__form-group"]}>
							<input
								className={styles["sign-up__input"]}
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								onBlur={validateEmail}
								placeholder="your email address"
							/>
							{emailError && <p className={styles["sign-up__error"]}>{emailErrorText}</p>}
						</div>
						<button className={styles["sign-up__button"]} type="submit">
							Get Started
						</button>
					</form>
					<div className={styles["sign-up__confirmation"]}>
						You&apos;ll receive an email with the invite link to join.
					</div>
				</div>
			</div>
		</div>
	);
}
