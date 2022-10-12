import React, { useContext } from "react";
import {
	Bar,
	BarChart,
	Cell,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts";
import { QuizContext } from "../Layout/Layout";

const Statics = () => {
	const data = useContext(QuizContext);
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		index,
	}) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central"
			>
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<div className="min-h-min flex flex-col justify-center items-center mt-8">
			<div className="w-full">
				<h1 className="text-2xl font-semibold text-center">Quize Pie Charts</h1>
				<ResponsiveContainer width="100%" height={200}>
					<PieChart>
						<Pie
							data={data.data}
							cx="50%"
							cy="50%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={80}
							fill="#8884d8"
							dataKey="total"
						>
							{data.data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
						<Tooltip />
					</PieChart>
				</ResponsiveContainer>
			</div>
			<div className="w-full md:w-2/3 bg-slate-100 p-2 rounded">
				<h1 className="text-center font-semibold">
					Quiz Questions Chart
				</h1>
				<ResponsiveContainer height={300} width="100%">
					<BarChart data={data.data}>
						<XAxis dataKey="name" stroke="#8884d8" />
						<Tooltip />
						<Bar dataKey="total" fill="#8884d8" barSize={15} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default Statics;
