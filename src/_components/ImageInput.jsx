import { ImageUp } from "lucide-react";
import { useState } from "react";

export const ImageInput = ({
  labelName,
  type,
  value,
  setText,
  text,
  handleChange,
  name,
  error,
}) => {
  return (
    <div
      className={`relative w-full h-[180px] flex flex-col justify-center items-center bg-[#f2f4f6] space-y-2 cursor-pointer`}
    >
      <ImageUp />
      Browse or drag your photo
      <input
        name={name}
        type="file"
        value={text}
        onChange={handleChange}
        className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
      />
      {/* {error[name] && <p className="text-xs text-red-500">{error[name]}</p>} */}
    </div>
  );
};
