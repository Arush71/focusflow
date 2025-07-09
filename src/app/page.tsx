import TodoCards from "@/components/TodoCards";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto flex items-center justify-center min-h-screen w-full">
      <div className="px-4 flex flex-col gap-6 max-w-xs sm:max-w-3xl w-full items-center">
        <h1 className="text-white text-2xl  sm:text-4xl font-semibold">
          FOCUSFLOW
        </h1>
        <Button
          className="cursor-pointer w-full text-base sm:text-xl py-5 sm:py-6 font-bold 
        "
        >
          ADD NEW TASK +
        </Button>
        <TodoCards />
      </div>
    </main>
  );
}
