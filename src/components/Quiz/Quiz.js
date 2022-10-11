import React from "react";
import { useNavigate } from "react-router-dom";

const Quiz = ({ quiz }) => {
	const { id, name, logo, total } = quiz;
    const navigate = useNavigate()
    const quizeLoader =(id)=>{
        navigate(`/quiz/${id}`)
    }
	return (
		<div className="p-4 bg-slate-200 grid grid-cols-1 md:grid-cols-2 md:text-left text-center items-center rounded">
			<img className="w-1/2 mx-auto" src={logo} alt="" />
			<div>
				<div className="my-4">
					<h4 className="text-2xl font-bold text-info">
						Topic's : {name}
					</h4>
					<p className="py-2">Total Quiz : {total}</p>
				</div>
				<button 
                onClick={()=>quizeLoader(id)}
                className="btn btn-sm btn-primary font-bold text-white">
					Get Start
				</button>
			</div>
		</div>
	);
};

export default Quiz;
