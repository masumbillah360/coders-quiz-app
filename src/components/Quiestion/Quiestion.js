import React from "react";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
				<label className="font-bold py-1 mb-1" htmlFor='qsn'>
					Q: {plainQuestion}
				</label>
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
					<li className="bg-slate-100 p-2 rounded hover:bg-green-100 form-control" key={idx}>
							<label className="label cursor-pointer">
								<span className="label-text">{option}</span>
								<input
									type="radio"
									onClick={() => answerDetector(option)}
									name='qsn'
									className="radio checked:bg-blue-500"
									checked
								/>
							</label>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Quiestion;
