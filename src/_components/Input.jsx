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
}) => {
  return (
    <div className="flex flex-col my-3">
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
        className="w-full h-fit py-3 pl-3 border border-gray-300 rounded-md"
      />
      {error[name] && <h1 className="text-red-500">{error[name]}</h1>}
    </div>
  );
};
