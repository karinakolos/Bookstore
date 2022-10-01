import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { resetUserName } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";

import { Error, WrapperError } from "../Login/Login.Styled";
import { ErrorIcon } from "../Login/ErrorIcon";
import { FormChangeUserName } from "../Forms/FormChangeUserName/FormChangeUserName";

const ChangeUserName: React.FC = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<null | string>(null);

  const handleRegister = async (name: string) => {
    const auth = getAuth();

    try {
      auth.currentUser &&
        (await updateProfile(auth.currentUser, {
          displayName: `${name}`,
        }));
      console.log(auth.currentUser);

      dispatch(
        resetUserName({
          name: name,
        })
      );
    } catch (err) {
      return setError("Failed to change user name");
    }
  };

  return (
    <>
      <FormChangeUserName
        title="change user name"
        handleClick={handleRegister}
      />
      {error ? (
        <WrapperError>
          <ErrorIcon />
          <Error>{error}</Error>
        </WrapperError>
      ) : null}
    </>
  );
};

export default ChangeUserName;
