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
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("The email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "The password cannot be empty"
  );
  const [formValid, setFormValid] = useState(false);

  React.useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }
  };
  const passwordHandler = (e: any) => {
    setPass(e.target.value);
    if (e.target.value.length < 7) {
      setPasswordError("The password must be longer than 6 characters");
      if (!e.target.value) {
        setPasswordError("The email cannot be empty");
      }
    } else {
      setPasswordError("");
    }
  };
  const blurHandler = (e: any) => {
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
