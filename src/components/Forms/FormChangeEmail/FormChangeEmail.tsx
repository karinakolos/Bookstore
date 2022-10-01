import React, { FC, useState } from "react";

import {
  WrapperForm,
  InputLabel,
  Button,
  Error,
  WrapperInput,
  WrapperPassword,
  Successfully,
} from "../FormChange.styled";

interface FormProps {
  title: string;
  handleClick: (email: string) => void;
}

const FormChangeEmail: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState<string>("");
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>(
    "The email can't be empty"
  );
  const [formValid, setFormValid] = useState<boolean>(false);
  const [isChange, setIsChange] = useState<boolean>(false);

  React.useEffect(() => {
    if (emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  return (
    <WrapperForm>
      <WrapperPassword>
        <InputLabel>New email</InputLabel>
        <WrapperInput>
          <input
            type="email"
            name="email"
            onBlur={(e) => blurHandler(e)}
            value={email}
            onChange={(e) => emailHandler(e)}
            placeholder="New email"
          />
        </WrapperInput>
        {emailDirty && emailError && <Error>{emailError}</Error>}
      </WrapperPassword>
      <Button
        disabled={!formValid}
        type="submit"
        onClick={() => {
          handleClick(email);
          setIsChange(true);
          setEmail("");
        }}
      >
        {title}
      </Button>
      {isChange && <Successfully>Email changed successfully!</Successfully>}
    </WrapperForm>
  );
};

export { FormChangeEmail };
