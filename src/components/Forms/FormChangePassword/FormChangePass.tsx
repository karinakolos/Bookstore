import React, { FC, useState } from "react";
import { useAppSelector } from "../../../hooks/redux-hooks";

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
  handleClick: (newpass: string) => void;
}

const FormChangePass: FC<FormProps> = ({ title, handleClick }) => {
  const { password } = useAppSelector((state) => state.user);

  const [pass, setPass] = useState<string>("");
  const [newPass, setNewPass] = useState<string>("");
  const [repeatPass, setRepeatPass] = useState<string>("");
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [passwordNewDirty, setPasswordNewDirty] = useState<boolean>(false);
  const [repeatPassDirty, setRepeatPassDirty] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>(
    "The password can't be empty"
  );
  const [repeatPassError, setRepeatPassError] = useState<string>(
    "The password can't be empty"
  );
  const [passwordNewError, setPasswordNewError] = useState<string>(
    "The password can't be empty"
  );
  const [formValid, setFormValid] = useState<boolean>(false);
  const [isChange, setIsChange] = useState<boolean>(false);

  React.useEffect(() => {
    if (passwordError || passwordNewError || repeatPassError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [passwordError, passwordNewError, repeatPassError]);

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
    if (!e.target.value == password) {
      setPasswordError("Passwords don't match");
    } else {
      setPasswordError("");
    }
  };
  const passwordNewHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPass(e.target.value);
    if (e.target.value.length < 7) {
      setPasswordNewError("The password must be longer than 6 characters");
      if (!e.target.value) {
        setPasswordNewError("The password can't be empty");
      }
    } else {
      setPasswordNewError("");
    }
  };
  const passwordRepeatHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPass(e.target.value);
    if (!(e.target.value == newPass)) {
      setRepeatPassError("Passwords don't match");
      if (!e.target.value) {
        setRepeatPassError("The password can't be empty");
      }
    } else {
      setRepeatPassError("");
    }
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "password":
        setPasswordDirty(true);
        break;
      case "new":
        setPasswordNewDirty(true);
        break;
      case "repeat":
        setRepeatPassDirty(true);
        break;
    }
  };

  return (
    <WrapperForm>
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
        <InputLabel>New password</InputLabel>
        <WrapperInput>
          <input
            type="password"
            name="new"
            onBlur={(e) => blurHandler(e)}
            value={newPass}
            onChange={(e) => passwordNewHandler(e)}
            placeholder="New password"
          />
        </WrapperInput>
        {passwordNewDirty && passwordNewError && (
          <Error>{passwordNewError}</Error>
        )}
      </WrapperPassword>
      <WrapperPassword>
        <InputLabel>Repeat new password</InputLabel>
        <WrapperInput>
          <input
            type="password"
            name="repeat"
            onBlur={(e) => blurHandler(e)}
            value={repeatPass}
            onChange={(e) => passwordRepeatHandler(e)}
            placeholder="Repeat new password"
          />
        </WrapperInput>
        {repeatPassDirty && repeatPassError && <Error>{repeatPassError}</Error>}
      </WrapperPassword>
      <Button
        disabled={!formValid}
        type="submit"
        onClick={() => {
          handleClick(newPass);
          setIsChange(true);
          setPass("");
          setNewPass("");
          setRepeatPass("");
        }}
      >
        {title}
      </Button>
      {isChange && <Successfully>Password changed successfully!</Successfully>}
    </WrapperForm>
  );
};

export { FormChangePass };
