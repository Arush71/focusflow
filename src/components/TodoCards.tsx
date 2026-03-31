"use client";
import { Card, CardContent } from "./ui/card";
import TaskCard from "./TaskCard";
import { taskType } from "@/types/types";
import { AnimatePresence } from "motion/react";

const TodoCards = (props: {
	todoArr: taskType[];
	updateCheck: (id: number, checked: boolean) => void;
	deleteTask: (id: number) => void;
	editShowEdit: (id: number) => void;
	hasLoaded: boolean;
}) => {
	const sortedArr: taskType[] = [...props.todoArr].sort(
		(a, b) => Number(a.completed) - Number(b.completed),
	);

	return (
		<Card
			className={`w-full ${
				!(props.todoArr.length >= 1) && "flex items-center justify-center py-4"
			}`}
		>
			{props.hasLoaded ? (
				<div
					className={`transition-all duration-700 ${
						props.hasLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
				>
					{sortedArr.length >= 1 ? (
						<CardContent className="flex flex-col gap-3.5">
							<AnimatePresence>
								{sortedArr.map((e) => (
									<TaskCard
										onToggle={props.updateCheck}
										key={e.id}
										isChecked={e.completed}
										name={e.title}
										id={e.id}
										onDelete={props.deleteTask}
										editShowEdit={props.editShowEdit}
									/>
								))}
							</AnimatePresence>
						</CardContent>
					) : (
						<CardContent className="text-xl font-light">
							No Tasks Yet
						</CardContent>
					)}
				</div>
			) : (
				<CardContent className="text-xl font-normal opacity-60 transition-opacity duration-300 text-center text-white">
					Loading...
				</CardContent>
			)}
		</Card>
	);
};

export default TodoCards;
