"use client";

import { use, useState } from "react";
import { Step1 } from "@/_components/Step1";
import { Step2 } from "@/_components/Step2";
import { Step3 } from "@/_components/Step3";
import { Step4 } from "@/_components/Step4";

const HomePage = () => {
  const comp = [Step1, Step2, Step3, Step4];
  const [index, setIndex] = useState(2);
  const [text, setText] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
    image: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const stepperNext = () => {
    const validateError = {};
    if (index === 0) {
      if (text.firstName.trim() === "") {
        {
          validateError.firstName = "neree olruulna";
        }
      } else if (
        !/^[\u1800-\u18AF\u0400-\u04FF\s\d.,()-]+$/.test(text.firstName.trim())
      ) {
        validateError.firstName = "Монгол үсгээр бичнэ үү";
      }

      if (text.lastName.trim() === "") {
        validateError.lastName = "ovgoo olruulna";
      }
      if (text.userName.trim() === "") {
        validateError.userName = "hereglegchiin neree olruulna";
      }
    }

    if (index === 1) {
      if (text.email.trim() === "") {
        validateError.email = "emailee olruulna";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          text.email.trim()
        )
      ) {
        validateError.email = "emailee zov formataar olruulna";
      }
      if (text.phoneNumber.trim() === "") {
        validateError.phoneNumber = "utasnii dugaaraa olruulna";
      } else if (!/^\d{8}$|^\d{10}$/.test(text.phoneNumber.trim())) {
        validateError.phoneNumber = "utasnii dugaaraa zov olruulna";
      }
      if (text.password.trim() === "") {
        validateError.password = "nuuts ugee olruulna";
      }
      if (text.confirmPassword.trim() === "") {
        validateError.confirmPassword = "nuuts ugee dahin olruulna";
      } else if (text.confirmPassword !== text.password) {
        validateError.confirmPassword = "nuuts ugee same olruulna";
      }
    }

    if (index === 2) {
      const formats = ["jpg", "jpeg", "gif", "tif", "tiff", "png"];
      if (text.date.trim() === "") {
        validateError.date = "on saraa olruulna";
      }
      if (text.image.trim() === "") {
        validateError.image = "zurgaa olruulna";
      } else if (!formats.includes(text.image.split(".")[1])) {
        validateError.image = "zurgaa zov formataar oruulna";
      }
    }

    if (Object.keys(validateError).length === 0) {
      setIndex((prev) => prev + 1);
    } else {
      setError((prev) => ({ ...prev, ...validateError }));
    }
  };

  const stepperBack = () => {
    index !== 0 && setIndex((prev) => prev - 1);
  };

  const Stepper = comp[index];

  return (
    <div className="flex">
      <h1 className="absolute">{JSON.stringify(text)}</h1>
      <Stepper
        stepperNext={stepperNext}
        stepperBack={stepperBack}
        text={text}
        handleChange={handleChange}
        error={error}
        setText={setText}
      />
    </div>
  );
};

export default HomePage;
