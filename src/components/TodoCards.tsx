"use client";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";

const TodoCards = () => {
  const [isTodo, setisTodo] = useState<boolean>(true);
  return (
    <Card
      className={`w-full ${!isTodo && "flex items-center justify-center py-4"}`}
    >
      {isTodo ? (
        <CardContent className="flex flex-col gap-4"></CardContent>
      ) : (
        <CardContent className="text-xl font-light">ADD A TASK</CardContent>
      )}
    </Card>
  );
};

export default TodoCards;
