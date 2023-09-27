// "use client";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
// import { useEffect } from "react";

function ProjectItem({ project }) {
	return <div>{project.name}</div>;
}
export default async function Home() {
	const projects = await getProjects();
	// useEffect(() => {
	// 	console.log(projects);
	// }, []);

	return (
		<div className="max-w-5xl mx-auto py-20">
			<h1 className="text-7xl font-extrabold">
				Hello I'm{" "}
				<span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
					Sophia!
				</span>
			</h1>
			<p className="mt-3 text-xl text-gray-600">hello</p>
			<h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
			{projects.map((project) => (
				<ProjectItem project={project} />
				// <div key={project._id} className="border-gray-500 rounded-lg">
				// 	{project.image && (
				// 		<Image
				// 			src={project.image}
				// 			alt={project.name}
				// 			width={250}
				// 			height={100}
				// 			className="object-cover rounded-lg border border-gray-500"
				// 		/>
				// 	)}
				// 	<div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
				// 		{project.name}
				// 	</div>
				// </div>
			))}
		</div>
	);
}
