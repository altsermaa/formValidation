import { Input } from "./Input";
import { Button } from "./Button";
import { Header } from "@/_components/Header";
import { motion } from "framer-motion";
import { useState } from "react";

export const Step3 = ({
  stepperNext,
  stepperBack,
  text,
  handleChange,
  error,
  setText,
}) => {
  const [previewURL, setPreviewURL] = useState();

  const handleImageChange = (event) => {
    handleChange(event);

    const file = event.target.files[0];

    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviewURL(preview);
    }
  };

  const deleteBtn = () => {
    setPreviewURL("");
    setText((prev) => ({ ...prev, image: "" }));
  };

  return (
    <motion.div>
      <div className="bg-white w-[480px] h-[655px] flex flex-col justify-between rounded-md p-8">
        <div className="flex flex-col gap-7">
          <Header />
          <div className="flex flex-col">
            <Input
              labelName={"Date"}
              type="date"
              name={"date"}
              text={text.date}
              handleChange={handleChange}
              error={error}
            />
            <Input
              labelName={"Image"}
              type="file"
              name={"image"}
              text={text.image}
              handleChange={handleImageChange}
              error={error}
            />
            {previewURL && (
              <div className="relative">
                <img
                  id="blah"
                  alt="your image"
                  width="100"
                  src={previewURL}
                  height="100"
                />
                <button className="absolute top-2 right -2" onClick={deleteBtn}>
                  X
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex">
          <Button
            text={"Back"}
            type={"prev"}
            className="flex-none w-[128px] border border-gray-500"
            onClick={stepperBack}
            //   bgColor={"bg-black"}
            //   textColor={"text-white"}
          />
          <Button
            text={"Continue 1/3"}
            type={"next"}
            className="flex-1 "
            onClick={stepperNext}
            //   bgColor={"bg-black"}
            //   textColor={"text-white"}
          />
        </div>
      </div>
    </motion.div>
  );
};
