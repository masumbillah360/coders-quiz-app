import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllQuizes from "./components/AllQuizes/AllQuizes";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Quizes from "./components/Quizes/Quizes";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout></Layout>,
			loader: () =>fetch("https://openapi.programming-hero.com/api/quiz"),
			children: [
				{
					path: "/",
					element: <Home></Home>,
				},
				{
					path: "/quiz/:quizeId",
					loader: ({ params }) =>
						fetch(
							`https://openapi.programming-hero.com/api/quiz/${params.quizeId}`
						),
					element: <AllQuizes></AllQuizes>,
				},
				{ path: "/quiz", element: <Quizes></Quizes> },
			],
		},
	]);
	return (
		<div className="container mx-auto">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
