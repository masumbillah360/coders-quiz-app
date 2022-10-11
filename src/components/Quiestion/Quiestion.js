import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";

const Quiestion = ({ questions }) => {
	const { options, question, correctAnswer } = questions;
	const plainQuestion = question.split("<p>").join("").split("</p>").join("");

	const answerDetector = (option) => {
		if (option === correctAnswer) {
			toast.success("correct", correctAnswer);
		} else {
			toast.warning("wrong answer");
		}
	};
	const showAnser = (ans) => {
		toast.info(ans);
	};
	return (
		<div className="border my-2 p-2">
			<div className="flex justify-between">
				<label className="font-bold py-1 mb-1" htmlFor="{question}">Q: {plainQuestion}</label>
				<button
					onClick={() => {
						showAnser(correctAnswer);
					}}
					className="px-1 h-5 border rounded-full"
				>
					<FaEye></FaEye>
				</button>
			</div>
			<ul className="grid md:grid-cols-2 gap-2">
				{options.map((option, idx) => (
					<li className="bg-blue-100 p-2 rounded" key={idx}>
						<input
							onClick={() => answerDetector(option)}
							className="mr-3"
							type="radio"
							name={question}
							id=""
						/>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Quiestion;
