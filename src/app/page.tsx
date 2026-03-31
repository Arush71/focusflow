"use client";
import AddTaskBtn from "@/components/AddTaskBtn";
import TodoCards from "@/components/TodoCards";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { taskType } from "@/types/types";
import { useEffect, useState } from "react";
// disable suggestions

export default function Home() {
  const [task, setTask] = useState<taskType[]>([]);
  const [showEditTask, setShowEditTask] = useState<number | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const addTask = (task: string) => {
    const newTask: taskType = {
      id: Date.now(),
      completed: false,
      title: task,
    };
    setTask((prev) => [...prev, newTask]);
  };
  const toggleTaskCompletion = (id: number, checked: boolean) => {
    const updated = task.map((t) =>
      t.id === id ? { ...t, completed: checked } : t
    );
    setTask(updated);
  };
  const deleteTask = (id: number) => {
    const updatedTask = task.filter((t) => t.id !== id);
    setTask(updatedTask);
  };
  const editShowEdit = (id: number) => {
    setShowEditTask(id);
  };
  useEffect(() => {
    const tasksFromStorage = localStorage.getItem("tasks");

    if (tasksFromStorage) {
      try {
        const parsedItem: taskType[] = JSON.parse(tasksFromStorage);
        setTask(parsedItem);
      } catch (err) {
        console.error("Error parsing stored data from localStorage:", err);
      }
    }
    setHasLoaded(true);
  }, []);
  useEffect(() => {
    if (task && hasLoaded) {
      localStorage.setItem("tasks", JSON.stringify(task));
    }
  }, [task, hasLoaded]);
  return (
    <>
      {showEditTask !== null && (
        <Dialog open={true} onOpenChange={() => setShowEditTask(null)}>
          <DialogContent
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setShowEditTask(null); // close dialog
              }
            }}
          >
            <DialogHeader>
              <DialogTitle>Edit Task</DialogTitle>
            </DialogHeader>
            <Input
              defaultValue={task.find((t) => t.id === showEditTask)?.title}
              onChange={(e) => {
                const updatedList = task.map((t) =>
                  t.id === showEditTask ? { ...t, title: e.target.value } : t
                );
                setTask(updatedList);
              }}
            />

            <Button onClick={() => setShowEditTask(null)}>Save</Button>
          </DialogContent>
        </Dialog>
      )}
      <main className="container mx-auto flex items-center justify-center min-h-screen w-full">
        <div className="px-4 flex flex-col gap-6 max-w-xs sm:max-w-3xl w-full items-center">
          <h1 className="text-white text-2xl  sm:text-4xl font-semibold">
            FOCUSFLOW
          </h1>
          <AddTaskBtn onAddTask={addTask} />
          <TodoCards
            deleteTask={deleteTask}
            todoArr={task}
            updateCheck={toggleTaskCompletion}
            editShowEdit={editShowEdit}
            hasLoaded={hasLoaded}
          />
        </div>
      </main>
    </>
  );
}
