"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { useState } from "react";

const AddTaskBtn = (props: { onAddTask: (task: string) => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-full cursor-pointer text-base sm:text-xl py-5 sm:py-6 font-bold"
          onClick={() => {
            console.log("clicked");
          }}
        >
          ADD NEW TASK +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-bold ">Add Task</DialogTitle>
          <DialogDescription>Add The Task Below:</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const task = formData.get("task") as string;
            console.log("New Task:", task);
            props.onAddTask(task.trim());
            setOpen(false);
          }}
          className="flex flex-col gap-6"
        >
          <Input
            name="task"
            placeholder="e.g. Walk the dog"
            required
            className=" font-semibold placeholder:font-normal"
          />

          <Button type="submit" className="w-full  cursor-pointer">
            Add Task
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskBtn;
