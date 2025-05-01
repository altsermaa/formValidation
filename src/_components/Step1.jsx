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
  // const [text, setText] = useState("");

  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <motion.div>
      <div className="bg-white w-[480px] h-[655px] flex flex-col justify-between rounded-md p-8">
        <div className="flex flex-col gap-7">
          <Header />
          <div className="flex flex-col">
            <Input
              labelName={"First name"}
              name={"firstName"}
              text={text.firstName}
              handleChange={handleChange}
              error={error}
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
          </div>
        </div>
        <Button
          text={"Continue 1/3"}
          type={"next"}
          onClick={stepperNext}
          name={"1/3"}
          // text={text}
          // setText={setText}
          //   bgColor={"bg-black"}
          //   textColor={"text-white"}
        />
      </div>
    </motion.div>
  );
};
