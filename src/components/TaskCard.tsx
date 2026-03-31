import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useId, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { motion } from "motion/react";

type Props = {
	id: number;
	name: string;
	isChecked: boolean;
	onToggle: (id: number, checked: boolean) => void;
	onDelete: (id: number) => void;
	editShowEdit: (id: number) => void;
};
const TaskCard = (props: Props) => {
	const id = useId();
	const [showTip, setShowTip] = useState<boolean>(false);

	return (
		<motion.div
			// initial={{
			//   opacity: 0,
			//   x: 35,
			// }}
			// animate={{
			//   opacity: 1,
			//   x: 0,
			// }}
			// exit={{
			//   opacity: 1,
			//   x: 0,
			// }}
			layout
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ type: "spring", stiffness: 80, damping: 18 }}
			whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
			whileTap={{ scale: 0.98 }}
		>
			<Tooltip
				delayDuration={300}
				open={showTip}
				onOpenChange={() =>
					props.isChecked || showTip ? setShowTip(false) : setShowTip(true)
				}
			>
				<TooltipTrigger asChild>
					<Card
						onDoubleClick={() => {
							props.editShowEdit(props.id);
						}}
						className={` bg-[color:var(--card-alt)] text-[color:var(--card-alt-foreground)] py-[1.15rem] rounded-xl
      hover:bg-zinc-800 transition-all  ${
				props.isChecked &&
				"hover:bg-gray-700/50 bg-gray-700/50 opacity-80 border border-gray-600"
			}
      `}
					>
						<CardContent className="flex justify-between items-center">
							<div className="flex items-center gap-4">
								<Checkbox
									id={id}
									className="rounded-full size-7"
									onCheckedChange={(checked: boolean) => {
										props.onToggle(props.id, checked);
									}}
									defaultChecked={props.isChecked}
								/>
								<Label
									htmlFor={id}
									className="peer-data-[state=checked]:line-through after:bg-muted-foreground peer-data-[state=checked]:text-muted-foreground relative after:absolute after:top-1/2 after:left-0 after:h-px after:w-full after:origin-bottom after:-translate-y-1/2 after:scale-x-0 after:transition-transform after:ease-in-out peer-data-[state=checked]:after:origin-bottom peer-data-[state=checked]:after:scale-x-100 font-medium text-sm md:text-lg text-white/90"
								>
									{props.name}
								</Label>
							</div>
							<div>
								<Button
									size="icon"
									variant="destructive"
									aria-label="Delete Task"
									className="cursor-pointer rounded-full p-2 dark:bg-red-500 transition hover:scale-105"
									onClick={() => props.onDelete(props.id)}
								>
									<Trash2 className="h-4 w-4 " />
								</Button>
							</div>
						</CardContent>
					</Card>
				</TooltipTrigger>
				<TooltipContent className="">
					<p className="">Double click to edit.</p>
				</TooltipContent>
			</Tooltip>
		</motion.div>
	);
};

export default TaskCard;
