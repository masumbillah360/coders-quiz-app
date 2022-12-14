import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Quiestion from "../Quiestion/Quiestion";

const AllQuestion = () => {
	const allQuiz = useLoaderData();
	return (
		<div>
			<p>Give Your Best Hard Work and Win The Most Bright Future.. </p>
			<h2 className="text-2xl text-center font-semibold py-2">
				{" "}
				<span className="bg-amber-200 rounded px-2">
					Quiz For : {allQuiz.data.name}
				</span>
			</h2>
			<div className="">
				{allQuiz?.data?.questions?.map((quiz) => (
					<Quiestion key={quiz.id} questions={quiz}></Quiestion>
				))}
			</div>
			<ToastContainer
				position="top-center"
				autoClose={500}
				hideProgressBar={true}
			/>
		</div>
	);
};

export default AllQuestion;
