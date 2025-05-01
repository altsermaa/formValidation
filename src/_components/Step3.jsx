import { Input } from "./Input";
import { Button } from "./Button";
import { Header } from "@/_components/Header";
import { motion } from "framer-motion";

export const Step3 = ({
  stepperNext,
  stepperBack,
  text,
  handleChange,
  error,
}) => {
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
              handleChange={handleChange}
              error={error}
            />
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
