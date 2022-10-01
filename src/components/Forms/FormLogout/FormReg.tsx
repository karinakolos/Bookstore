import React, { FC, useState } from "react";
import {
  WrapperForm,
  InputLabel,
  Button,
  Error,
  WrapperInput,
  WrapperEmail,
  WrapperPassword,
} from "./FormReg.styled";

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string, name: string) => void;
}

const FormReg: FC<FormProps> = ({ title, handleClick }) => {
  const [name, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [repeatPass, setRepeatPass] = useState<string>("");
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [passwordRepeatDirty, setPasswordRepeatDirty] =
    useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>(
    "The email can't be empty"
  );
  const [passwordError, setPasswordError] = useState<string>(
    "The password can't be empty"
  );
  const [passwordRepeatError, setPasswordRepeatError] = useState<string>(
    "The password can't be empty"
  );
  const [formValid, setFormValid] = useState<boolean>(false);

  React.useEffect(() => {
    if (emailError || passwordError || passwordRepeatError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, passwordRepeatError]);

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
  const passwordRepeatHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPass(e.target.value);
    if (e.target.value !== pass) {
      setPasswordRepeatError("Passwords don't match");
      if (!e.target.value) {
        setPasswordRepeatError("The password can't be empty");
      }
    } else {
      setPasswordRepeatError("");
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
      case "repeat":
        setPasswordRepeatDirty(true);
        break;
    }
  };

  return (
    <WrapperForm>
      <WrapperEmail>
        <InputLabel>User Name</InputLabel>
        <WrapperInput>
          <input
            type="text"
            name="text"
            value={name}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="User Name"
          />
        </WrapperInput>
      </WrapperEmail>
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
      <WrapperPassword>
        <InputLabel>Repeat password</InputLabel>
        <WrapperInput>
          <input
            type="password"
            name="repeat"
            onBlur={(e) => blurHandler(e)}
            value={repeatPass}
            onChange={(e) => passwordRepeatHandler(e)}
            placeholder="Repeat password"
          />
        </WrapperInput>
        {passwordRepeatDirty && passwordRepeatError && (
          <Error>{passwordRepeatError}</Error>
        )}
      </WrapperPassword>
      <Button
        disabled={!formValid}
        type="submit"
        onClick={() => {
          handleClick(email, pass, name);
        }}
      >
        {title}
      </Button>
    </WrapperForm>
  );
};
export { FormReg };
