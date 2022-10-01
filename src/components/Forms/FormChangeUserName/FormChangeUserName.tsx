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
  handleClick: (name: string) => void;
}

const FormChangeUserName: FC<FormProps> = ({ title, handleClick }) => {
  const [userName, setUserName] = useState<string>("");
  const [userNameDirty, setUserNameDirty] = useState<boolean>(false);
  const [userNameError, setUserNameError] = useState<string>(
    "The user name can't be empty"
  );
  const [formValid, setFormValid] = useState<boolean>(false);
  const [isChange, setIsChange] = useState<boolean>(false);

  React.useEffect(() => {
    if (userNameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameError]);

  const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    if (!e.target.value) {
      setUserNameError("The user name can't be empty");
    } else {
      setUserNameError("");
    }
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "username":
        setUserNameDirty(true);
        break;
    }
  };

  return (
    <WrapperForm>
      <WrapperPassword>
        <InputLabel>New user name</InputLabel>
        <WrapperInput>
          <input
            type="text"
            name="username"
            onBlur={(e) => blurHandler(e)}
            value={userName}
            onChange={(e) => userNameHandler(e)}
            placeholder="New user name"
          />
        </WrapperInput>
        {userNameDirty && userNameError && <Error>{userNameError}</Error>}
      </WrapperPassword>
      <Button
        disabled={!formValid}
        type="submit"
        onClick={() => {
          handleClick(userName);
          setIsChange(true);
          setUserName("");
        }}
      >
        {title}
      </Button>
      {isChange && <Successfully>User name changed successfully!</Successfully>}
    </WrapperForm>
  );
};
export { FormChangeUserName };
