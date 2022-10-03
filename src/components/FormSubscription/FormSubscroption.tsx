import * as React from "react";
import { SuccessfullIcon } from "./SuccessfullIcon";

import {
  TitleForm,
  WrapperForm,
  TitleSubscribe,
  SubtitleSubscribe,
  Form,
  InputEmail,
  BtbSubscibe,
  WrapperFormSubscribe,
  BtbSubscibeSuccessfull,
  WrapperInput,
  Error,
} from "./FormSubscription.styled";

const FormSubscription: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [emailDirty, setEmailDirty] = React.useState<boolean>(false);
  const [emailError, setEmailError] = React.useState<string | null>(
    "The email cannot be empty"
  );
  const [formValid, setFormValid] = React.useState<boolean>(false);
  const [subscription, setSubscription] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);

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

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  return (
    <>
      {subscription ? (
        <WrapperForm>
          <SuccessfullIcon />
          <TitleForm>You have successfully subscribed to the news.</TitleForm>
          <BtbSubscibeSuccessfull onClick={() => setSubscription(false)}>
            New email subscribe
          </BtbSubscibeSuccessfull>
        </WrapperForm>
      ) : (
        <WrapperFormSubscribe>
          <TitleSubscribe>Subscribe to Newsletter</TitleSubscribe>
          <SubtitleSubscribe>
            Be the first to know about new IT books, upcoming releases,
            exclusive offers and more.
          </SubtitleSubscribe>
          <Form>
            {emailDirty && emailError && <Error>* {emailError}</Error>}
            <WrapperInput>
              <InputEmail>
                <input
                  value={email}
                  onChange={(e) => emailHandler(e)}
                  onBlur={(e) => blurHandler(e)}
                  name="email"
                  type="email"
                  placeholder="Your email"
                />
              </InputEmail>
              <BtbSubscibe
                disabled={!formValid}
                onClick={() => {
                  setSubscription(true);
                  setEmail("");
                }}
              >
                Subscribe
              </BtbSubscibe>
            </WrapperInput>
          </Form>
        </WrapperFormSubscribe>
      )}
    </>
  );
};

export default FormSubscription;
