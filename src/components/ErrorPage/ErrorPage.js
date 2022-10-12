import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center text-slate-500">
				<br />
				{error && (
					<div>
						<h2 className="text-4xl font-bold">Opps!!</h2>
						<h1 className="text-3xl font-bold">{error.status}</h1>
						<p className="text-4xl font-bold text-red-600">{error.statusText || error.message}</p>
						<Link
							className="btn btn-sm btn-warning mt-3 font-bold"
							to="/home"
						>
							Back to Home
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default ErrorPage;
