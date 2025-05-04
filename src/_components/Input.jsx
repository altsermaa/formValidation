import { CloudCog } from "lucide-react";
import { useState } from "react";

export const Input = ({
  labelName,
  type,
  value,
  setText,
  text,
  handleChange,
  name,
  error,
  className
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label htmlFor={labelName} className="font-bold">
        {labelName}
        <sup className="text-red-800">*</sup>{" "}
      </label>
      <input
        name={name}
        type={type}
        value={text}
        onChange={handleChange}
        placeholder="placeholder"
        className="w-full h-fit p-3 rounded-md outline outline-[#CBD5E1] focus: outline-[#0CA5E9]"
      />
      {error[name] && <p className="text-xs text-red-500">{error[name]}</p>}
    </div>
  );
};
