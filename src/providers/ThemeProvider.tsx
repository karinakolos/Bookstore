import { createContext, Dispatch, SetStateAction, useState } from "react";

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

interface IContext {
  type: "Light" | "Dark";
  setType: TypeSetState<string>;
}

const ThemeContext = createContext<IContext>({ type: "Light" });

export const ThemeProvider = ({ children }: any) => {
  const [type, setType] = useState<string>("Light");

  return (
    <ThemeContext.Provider value={{ type, setType }}>
      {children}
    </ThemeContext.Provider>
  );
};
