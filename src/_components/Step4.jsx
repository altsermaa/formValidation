import { Input } from "./Input";
import { Button } from "./Button";
import { Header } from "@/_components/Header";
import { motion } from "framer-motion";

export const Step4 = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}   
    animate={{ opacity: 1, x: 0 }}   
    exit={{ opacity: 0, x: -100 }} 
    transition={{duration: 0.4}}
    >
      <div className="bg-white w-[480px] h-[655px] flex flex-col justify-between rounded-md p-8">
        <div className="flex flex-col gap-7">
          <Header />
        </div>
      </div>
    </motion.div>
  );
};
