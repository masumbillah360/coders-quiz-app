import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export const QuizContext = createContext({});
const Layout = () => {
	const data = useLoaderData();
	return (
		<QuizContext.Provider value={data}>
			<Navbar></Navbar>
			<Outlet></Outlet>
		</QuizContext.Provider>
	);
};

export default Layout;
