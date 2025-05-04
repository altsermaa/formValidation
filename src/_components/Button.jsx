import { ChevronLeft, ChevronRight } from "lucide-react";

export const Button = ({ text, type, onClick, name }) => {
  return (
    <button
      className={`w-full h-fit flex gap-4 rounded-lg justify-center py-2 pl-3 cursor-pointer ${
        type === "next" ? "bg-black" : "bg-transparent"
      } ${
        type === "next" ? "text-white" : "text-black"
      } `}
      onClick={onClick}
      name={name}
    >
      {type === "prev" && <ChevronLeft />}
      {text}
      {type === "next" && <ChevronRight />}
    </button>
  );
};
