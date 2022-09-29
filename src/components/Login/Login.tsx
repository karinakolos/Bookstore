import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";

import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";

import { Error, WrapperError } from "./Login.Styled";
import { ErrorIcon } from "./ErrorIcon";

export function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<null | string>(null);

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(() => setError("Invalid user"));
  };
  return (
    <>
      <Form title="sing in" handleClick={handleLogin} />
      {error ? (
        <WrapperError>
          <ErrorIcon />
          <Error>{error}</Error>
        </WrapperError>
      ) : null}
    </>
  );
}
