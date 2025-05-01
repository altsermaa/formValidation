import { ChevronLeft, ChevronRight } from "lucide-react";

export const Button = ({ text, type, bgColor, textColor, onClick, name }) => {
  return (
    <button
      className={`w-full h-fit flex gap-4 ${
        type === "next" ? "bg-black" : "bg-transparent"
      } ${
        type === "next" ? "text-white" : "text-black"
      } rounded-lg justify-center py-2 pl-3 cursor-pointer`}
      onClick={onClick}
      name={name}
    >
      {text}
      {type === "next" && <ChevronRight />}
      {type === "prev" && <ChevronLeft />}
    </button>
  );
};
