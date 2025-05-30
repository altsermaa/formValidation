import { Input } from "./Input";
import { Button } from "./Button";
import { Header } from "@/_components/Header";
import { motion } from "framer-motion";
import { useState } from "react";
import { Image } from "lucide-react";

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

  const handleDrop = (file) => {
    setPreviewURL((prev) => [...prev, preview]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white w-[480px] h-[655px] flex flex-col justify-between rounded-md p-8">
        <div className="flex flex-col gap-7">
          <Header />
          <div className="flex flex-col h-full">
            <div className="flex-1/3">
              <Input
                labelName={"Date"}
                type="date"
                name={"date"}
                text={text.date}
                handleChange={handleChange}
                error={error}
              />
            </div>

            <p className="font-bold mt-3">
              Profile image <sup className="text-red-800">*</sup>{" "}
            </p>
            {/* <>
                {error[name] && (
                  <p className="text-xs text-red-500">{error[name]}</p>
                )}
              </> */}

            <div className="relative w-full h-50 bg-[#f2f4f6] border-[#7F7F800D] rounded-lg flex items-center justify-center cursor-pointer">
              {!previewURL ? (
                <>
                  <div
                    className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
                    onDrop={handleDrop}
                  >
                    <Image />
                    Browse or Drop Image
                    <Input
                      labelName={"Image"}
                      type="file"
                      name={"image"}
                      text={text.image}
                      handleChange={handleImageChange}
                      error={error}
                      className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
                    />
                  </div>
                </>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    alt="your image"
                    src={previewURL}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-2 right-2 rounded-full bg-black text-white w-6 h-6"
                    onClick={deleteBtn}
                    type="button"
                  >
                    x
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-[30px]">
          <div className="flex w-1/3 border border-[#c9d6df] rounded-lg">
            <Button
              text={"Back"}
              type={"prev"}
              onClick={stepperBack}
              className="flex-none w-[128px] border border-[#c9d6df] rounded-lg"
            />
          </div>

          <div className="flex w-2/3">
            <Button text={"Continue 1/3"} type={"next"} onClick={stepperNext} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
