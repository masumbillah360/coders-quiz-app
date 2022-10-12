import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllQuestion from "./components/AllQuestion/AllQuiestion";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Quizes from "./components/Quizes/Quizes";
import Statics from "./components/Statics/Statics";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout></Layout>,
			loader: () =>
				fetch("https://openapi.programming-hero.com/api/quiz"),
			errorElement: <ErrorPage></ErrorPage>,
			children: [
				{
					path: "/",
					element: <Home></Home>,
					errorElement: <ErrorPage></ErrorPage>,
				},
				{
					path: "/home",
					element: <Home></Home>,
				},
				{
					path: "/quiz/:quizeId",
					loader: ({ params }) =>
						fetch(
							`https://openapi.programming-hero.com/api/quiz/${params.quizeId}`
						),
					element: <AllQuestion></AllQuestion>,
				},

				{ path: "/blog", element: <Blog></Blog> },
				{ path: "/statics", element: <Statics></Statics> },
				{ path: "/quiz", element: <Quizes></Quizes> },
			],
		},
	]);
	return (
		<div className="container mx-auto px-3">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
