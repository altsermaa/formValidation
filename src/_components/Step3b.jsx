import { Input } from "./Input";
import { Button } from "./Button";
import { Header } from "@/_components/Header";
import { motion } from "framer-motion";

export const Step3b = ({
  stepperNext,
  handleChange,
  stepperBack,
  text,
  setText,
  name,
  error,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white w-[480px] h-fit flex flex-col justify-between rounded-lg p-8">
        <div className="flex flex-col gap-7">
          <Header />

          <Input
            labelName={"Date of birth"}
            name={"birthDate"}
            text={text.date}
            handleChange={handleChange}
            error={error}
            type={"date"}
          />
        </div>
        <Button
          text={"Continue 1/3"}
          type={"next"}
          onClick={stepperNext}
          // text={text}
          // setText={setText}
          //   bgColor={"bg-black"}
          //   textColor={"text-white"}
        />
      </div>
    </motion.div>
  );
};
