import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiestion = ({ questions }) => {
	const { options, question, correctAnswer } = questions;
	const plainQuestion = question.split("<p>").join("").split("</p>").join("");
	const [answerd, setAnswerd] = useState(undefined)

	const answerDetector = (option) => {
		if (option === correctAnswer) {
			toast.success("correct", correctAnswer);
			setAnswerd(true)
		} else {
			toast.warning("wrong answer");
			setAnswerd(false)
		}
	};
	const showAnser = (ans) => {
		toast.info(ans);
	};
	return (
		<div className="border my-2 p-2">
			<div className="flex justify-between">
				<label className="font-bold py-1 mb-1" htmlFor="{question}">
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
					<li className='bg-blue-100 p-2 rounded' key={idx}>
						<div className="form-control">
							<label className="label cursor-pointer">
								<span className="label-text">{option}</span>
								<input
									type="radio"
									name={question}
									onClick={() => answerDetector(option)}
									className={`radio ${answerd?'checked:bg-green-500':'checked:bg-red-500'}`}
								/>
							</label>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Quiestion;
