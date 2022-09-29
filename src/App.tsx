import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "./enums/router";

import { AppWrapper, Content } from "./App.styled";
import { MainPage } from "./pages/MainPage/MainPage";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";
import { RegistrationPage } from "./pages/RegistrarionPage/RegistrationPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { FavoritesPage } from "./pages/FavouritesPage/FavoritesPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { BookPage } from "./pages/BookPage/BookPage";
import NotFound from "./pages/NotFound/NotFound";
import { Header } from "./components/Header/Header";
import { Foooter } from "./components/Footer/Footer";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Layout } from "./Layout/Layout";
import { CheckOutPage } from "./pages/CheckOutPage/CheckOutPage";

export const SearchContext = React.createContext();

export function App() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  return (
    <ThemeProvider>
      <Layout>
        <AppWrapper>
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <Header />

            <Content>
              <Routes>
                <Route path={AppRoute.Main} element={<MainPage />} />
                <Route path={AppRoute.BookPage} element={<BookPage />} />
                <Route path={AppRoute.Settings} element={<SettingsPage />} />
                <Route path={AppRoute.CheckOut} element={<CheckOutPage />} />
                <Route path={AppRoute.Login} element={<LoginPage />} />
                <Route path={AppRoute.Reg} element={<RegistrationPage />} />
                <Route path={AppRoute.Favorites} element={<FavoritesPage />} />
                <Route path={AppRoute.Basket} element={<CartPage />} />
                <Route path={AppRoute.NotFound} element={<NotFound />} />
                <Route
                  path="*"
                  element={<Navigate to={AppRoute.NotFound} replace />}
                />
              </Routes>
            </Content>
            <Foooter />
          </SearchContext.Provider>
        </AppWrapper>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
