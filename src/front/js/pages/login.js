import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	// 1. create 2 useStates, one for email the other for the password



	// 3. create an async function called handleClick that will include
	// the fetch with options that includes the email and password
	// in the body to be sent to the server as a POST


	// 2. make the <input controlleed inputs
	// also, make the button execute the handleClick function

	return (
		<div className="text-center mt-5">
			<h1>Login Page</h1>
			<div>
				<input type="text" placeholder="email" />
			</div>
			<div>
				<input type="password" placeholder="password" />
			</div>
			<div>
				<button>Login</button>
			</div>
		</div>
	);
};
