export const getFavoriteFromLS = () => {
  const data = localStorage.getItem("fav");
  return data ? JSON.parse(data) : [];
};
