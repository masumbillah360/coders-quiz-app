import React, { useContext } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { QuizContext } from "../Layout/Layout";

const Statics = () => {
	const data = useContext(QuizContext);
	return (
		<div className="min-h-screen min-w-full flex flex-col justify-center items-center">
			<div className="w-full md:w-2/3 bg-slate-100 p-2 rounded">
				<h1 className="text-center font-semibold">Quiz Questions Chart</h1>
                <ResponsiveContainer height={300} width='100%'>
					<BarChart width={900} height={300} data={data.data}>
						<XAxis dataKey="name" stroke="#8884d8" />

						<YAxis/>
						<Tooltip
							wrapperStyle={{
								width: 100,
								backgroundColor: "#ccc",
							}}
						/>
						<Bar dataKey="total" fill="#8884d8" barSize={15} />
					</BarChart>
                    </ResponsiveContainer>
			</div>
		</div>
	);
};

export default Statics;
