import { getAuth, updatePassword } from "firebase/auth";
import { useState } from "react";

import { resetUserPassword } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";

import { Error, WrapperError } from "../Login/Login.Styled";
import { ErrorIcon } from "../Login/ErrorIcon";
import { FormChangePass } from "../Forms/FormChangePassword/FormChangePass";

const ChangePassword: React.FC = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<null | string>(null);

  const handleRegister = async (newpassword: string) => {
    const auth = getAuth();
    const newPassword = newpassword;

    try {
      auth.currentUser && (await updatePassword(auth.currentUser, newPassword));
      console.log(auth.currentUser);
      dispatch(
        resetUserPassword({
          password: newpassword,
        })
      );
    } catch (err) {
      return setError("Failed to change password");
    }
  };

  return (
    <>
      <FormChangePass title="change password" handleClick={handleRegister} />
      {error ? (
        <WrapperError>
          <ErrorIcon />
          <Error>{error}</Error>
        </WrapperError>
      ) : null}
    </>
  );
};
export default ChangePassword;
