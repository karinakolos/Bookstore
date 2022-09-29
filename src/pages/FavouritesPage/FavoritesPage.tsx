import * as React from "react";

import { Wrapper } from "./FavoritesPage.styled";
import { BooksContainer, NoFavorites } from "./FavoritesPage.styled";
import { PostCard } from "../../components/Posts/PostCard/PostCard";
import { Title } from "../../components/Title/Title";
import { useSelector } from "react-redux";
import emptyFavorite from "../../icons/emptyFavorite.png";

export function FavoritesPage() {
  const { items } = useSelector((state) => state.favorites);
  if (items.length == 0) {
    return (
      <>
        <Title title="Favorites" />
        <NoFavorites>
          <img src={emptyFavorite} alt="Empty favorite list" />
        </NoFavorites>
      </>
    );
  }
  return (
    <div>
      <Wrapper>
        <Title title={`favorites: ${items.length}`} />
        <BooksContainer>
          {items.map((el: any) => {
            return <PostCard key={el.isbn13} {...el} />;
          })}
        </BooksContainer>
      </Wrapper>
    </div>
  );
}
