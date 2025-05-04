import { Input } from "./Input";
import { Button } from "./Button";
import { Header } from "@/_components/Header";
import { motion } from "framer-motion";

export const Step1 = ({
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
    transition={{duration: 0.4}}
    >
      <div className="bg-white w-[480px] min-h-[655px] flex flex-col justify-between rounded-lg p-8">
        <div className="flex flex-col gap-7">
          <Header />
          <form className="flex flex-col gap-3">
            <Input
              labelName={"First name"}
              name={"firstName"}
              text={text.firstName}
              handleChange={handleChange}
              error={error}
              type={"text"}
            />
            <Input
              labelName={"Last name"}
              name={"lastName"}
              text={text.lastName}
              handleChange={handleChange}
              error={error}
            />
            <Input
              labelName={"User name"}
              name={"userName"}
              text={text.userName}
              handleChange={handleChange}
              error={error}
            />
          </form>
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
