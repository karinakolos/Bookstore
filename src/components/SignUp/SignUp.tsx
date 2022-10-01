import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Error, WrapperError } from "../Login/Login.Styled";
import { setUser } from "../../store/slices/userSlice";

import { useAppDispatch } from "../../hooks/redux-hooks";
import { FormReg } from "../Forms/FormLogout/FormReg";
import { ErrorIcon } from "../Login/ErrorIcon";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<null | string>(null);

  const handleRegister = async (
    email: string,
    password: string,
    name: string
  ) => {
    const auth = getAuth();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, {
        displayName: `${name}`,
      });
      console.log(user);
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
          password: password,
        })
      );
      navigate("/");
    } catch (err) {
      return setError("Such a user exists");
    }
  };

  return (
    <>
      <FormReg title="register" handleClick={handleRegister} />
      {error ? (
        <WrapperError>
          <ErrorIcon />
          <Error>{error}</Error>
        </WrapperError>
      ) : null}
    </>
  );
};

export default SignUp;
