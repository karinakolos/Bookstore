import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUser } from "../../store/slices/userSlice";
import { Form } from "../Forms/FormLogin/Form";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { Error, WrapperError } from "./Login.Styled";
import { ErrorIcon } from "./ErrorIcon";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<null | string>(null);

  const handleLogin = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
          password: password,
          name: user.displayName,
        })
      );
      navigate("/");
    } catch (err) {
      setError("Invalid user");
    }
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
};

export default Login;
