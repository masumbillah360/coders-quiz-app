import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center text-slate-500">
				<h1 className="text-7xl font-bold">404</h1>
				<h2 className="text-9xl font-bold">Page Not Found</h2>
				<Link className="btn btn-warning mt-3 font-bold" to='/home'>Back to Home</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
