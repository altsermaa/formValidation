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
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white w-[480px] h-fit flex flex-col justify-between rounded-lg p-8">
        <div className="flex flex-col gap-7">
          <Header />
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-3">
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
                type={"password"}
                text={text.password}
                handleChange={handleChange}
                error={error}
              />
              <Input
                labelName={"Confirm password"}
                name={"confirmPassword"}
                type={"password"}
                text={text.confirmPassword}
                handleChange={handleChange}
                error={error}
              />
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
                <Button
                  text={"Continue 1/3"}
                  type={"next"}
                  onClick={stepperNext}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
