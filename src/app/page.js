"use client";

import { use, useState } from "react";
import { Step1 } from "@/_components/Step1";
import { Step2 } from "@/_components/Step2";
import { Step3 } from "@/_components/Step3";
import { Step4 } from "@/_components/Step4";
import { Step3b } from "@/_components/Step3b";

const HomePage = () => {
  const comp = [Step3b, Step1, Step2, Step3, Step4];
  const [index, setIndex] = useState(0);
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
          validateError.firstName = "Нэрээ оруулна уу";
        }
      } else if (
        !/^[\u1800-\u18AF\u0400-\u04FF\s\d.,()-]+$/.test(text.firstName.trim())
      ) {
        validateError.firstName = "Монгол үсгээр бичнэ үү";
      }

      if (text.lastName.trim() === "") {
        validateError.lastName = "Овгоо оруулна уу";
      }
      if (text.userName.trim() === "") {
        validateError.userName = "Хэрэглэгчийн нэр оруулна уу";
      }
    }

    if (index === 1) {
      if (text.email.trim() === "") {
        validateError.email = "Имэйл хаягаа оруулна уу";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          text.email.trim()
        )
      ) {
        validateError.email = "Имэйлээ зөв форматаар оруулна уу";
      }
      if (text.phoneNumber.trim() === "") {
        validateError.phoneNumber = "Утасны дугаараа оруулна уу";
      } else if (!/^\d{8}$|^\d{10}$/.test(text.phoneNumber.trim())) {
        validateError.phoneNumber = "Утасны дугаараа зөв оруулна уу";
      }
      if (text.password.trim() === "") {
        validateError.password = "Нууц үгээ оруулна уу";
      } else if (text.password.trim().length < 6) {
        validateError.password = "6-аас дээш үсэг оруулна уу";
      }
      if (text.confirmPassword.trim() === "") {
        validateError.confirmPassword = "Нууц үгээ дахин оруулна уу";
      } else if (text.confirmPassword !== text.password) {
        validateError.confirmPassword = "Нууц үг ижил биш байна";
      }
    }

    if (index === 2) {
      const formats = ["jpg", "jpeg", "gif", "tif", "tiff", "png"];
      if (text.date.trim() === "") {
        validateError.date = "Он сараа оруулна уу";
      }
      console.log(text.image);

      if (text.image.trim() === "") {
        validateError.image = "Зургаа оруулна уу";
      } else if (!formats.includes(text.image.split(".")[1])) {
        validateError.image = "Зургаа зөв форматаар оруулна уу";
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
