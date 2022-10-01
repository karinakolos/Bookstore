import { getAuth, updateEmail } from "firebase/auth";
import { useState } from "react";

import { useAppDispatch } from "../../hooks/redux-hooks";
import { resetUserEmail } from "../../store/slices/userSlice";
import { Error, WrapperError } from "../Login/Login.Styled";
import { ErrorIcon } from "../Login/ErrorIcon";
import { FormChangeEmail } from "../Forms/FormChangeEmail/FormChangeEmail";

const ChangeEmail: React.FC = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<null | string>(null);

  const handleRegister = async (email: string) => {
    const auth = getAuth();
    try {
      auth.currentUser && (await updateEmail(auth.currentUser, `${email}`));
      console.log(auth.currentUser);
      dispatch(
        resetUserEmail({
          email: email,
        })
      );
    } catch (err) {
      return setError("Failed to change email");
    }
  };

  return (
    <>
      <FormChangeEmail title="change email" handleClick={handleRegister} />
      {error ? (
        <WrapperError>
          <ErrorIcon />
          <Error>{error}</Error>
        </WrapperError>
      ) : null}
    </>
  );
};
export default ChangeEmail;
