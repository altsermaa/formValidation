import { Input } from "./Input";
import { Button } from "./Button";
import { Header } from "@/_components/Header";
import { motion } from "framer-motion";

export const Step2 = ({
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
              labelName={"Email"}
              name={"email"}
              text={text.email}
              handleChange={handleChange}
              error={error}
            />
            <Input
              labelName={"Phone number"}
              name={"phoneNumber"}
              text={text.phoneNumber}
              handleChange={handleChange}
              error={error}
            />
            <Input
              labelName={"Password"}
              name={"password"}
              text={text.password}
              handleChange={handleChange}
              error={error}
            />
            <Input
              labelName={"Confirm password"}
              name={"confirmPassword"}
              text={text.confirmPassword}
              handleChange={handleChange}
              error={error}
            />
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-1/3 border border-gray-500">
            <Button
              text={"Back"}
              type={"prev"}
              onClick={stepperBack}
              //   bgColor={"bg-black"}
              //   textColor={"text-white"}
            />
          </div>

          <div className="flex flex-2/3">
            <Button
              text={"Continue 1/3"}
              type={"next"}
              onClick={stepperNext}
              name={"2/3"}
              //   bgColor={"bg-black"}
              //   textColor={"text-white"}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
