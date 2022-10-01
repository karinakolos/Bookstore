import React, { FC, useState } from "react";
import {
  WrapperForm,
  InputLabel,
  Button,
  Error,
  WrapperInput,
  WrapperEmail,
  WrapperPassword,
} from "./Form.styled";

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>(
    "The email can't be empty"
  );
  const [passwordError, setPasswordError] = useState<string>(
    "The password can't be empty"
  );
  const [formValid, setFormValid] = useState<boolean>(false);

  React.useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

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
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
    if (e.target.value.length < 7) {
      setPasswordError("The password must be longer than 6 characters");
      if (!e.target.value) {
        setPasswordError("The email can't be empty");
      }
    } else {
      setPasswordError("");
    }
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <WrapperForm>
      <WrapperEmail>
        <InputLabel>Email</InputLabel>
        <WrapperInput>
          <input
            type="email"
            name="email"
            onBlur={(e) => blurHandler(e)}
            value={email}
            onChange={(e) => emailHandler(e)}
            placeholder="Email"
          />
        </WrapperInput>
        {emailDirty && emailError && <Error>{emailError}</Error>}
      </WrapperEmail>
      <WrapperPassword>
        <InputLabel>Password</InputLabel>
        <WrapperInput>
          <input
            type="password"
            name="password"
            onBlur={(e) => blurHandler(e)}
            value={pass}
            onChange={(e) => passwordHandler(e)}
            placeholder="Password"
          />
        </WrapperInput>
        {passwordDirty && passwordError && <Error>{passwordError}</Error>}
      </WrapperPassword>
      <Button
        disabled={!formValid}
        type="submit"
        onClick={() => handleClick(email, pass)}
      >
        {title}
      </Button>
    </WrapperForm>
  );
};
export { Form };
