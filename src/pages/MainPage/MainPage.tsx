import * as React from "react";
import qs from "qs";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

import { setCurrentPage } from "../../store/slices/paginationSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import PostCard from "../../components/PostCard/PostCard";
import { Book, fetchBooks } from "../../store/slices/booksSlice";
import { Skeleton } from "../../components/PostCard/Skeleton";
import { Title } from "../../components/Title/Title";
import {
  WrapperMainContent,
  Wrapper,
  PostsContainer,
  Paginate,
  TextError,
} from "./MainPage.styled";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.books);
  const { currentPage } = useAppSelector((state) => state.currentPage);
  const { searchValue } = useAppSelector((state) => state.search);

  const getBooks = async () => {
    const search = searchValue ? `${searchValue}` : "mongodb";
    dispatch(
      fetchBooks({
        search,
        currentPage,
      })
    );
  };

  React.useEffect(() => {
    if (searchValue == "") {
      const queryString = qs.stringify({
        page: currentPage,
      });
      navigate(`?${queryString}`);
    } else {
      const queryString = qs.stringify({
        page: currentPage,
        search: searchValue,
      });
      navigate(`?${queryString}`);
    }
  }, [currentPage, searchValue]);

  React.useEffect(() => {
    getBooks();
  }, [searchValue, currentPage]);

  return (
    <Wrapper>
      {status == "error" ? (
        <WrapperMainContent>
          <Title title="Error" />
          <TextError>
            Unfortunately, it was not possible to get a list of books. Try again
            later.
          </TextError>
        </WrapperMainContent>
      ) : (
        <>
          <WrapperMainContent>
            <Title title="New Releases Books" />
            <PostsContainer>
              {status !== "loading" && status !== "success" ? (
                <TextError>
                  Unfortunately, it was not possible to get a list of books. Try
                  again later.
                </TextError>
              ) : status == "loading" ? (
                [...new Array(15)].map((_, index) => <Skeleton key={index} />)
              ) : (
                // @ts-ignore
                items.books.map((el: Book) => {
                  return <PostCard key={el.isbn13} {...el} />;
                })
              )}
            </PostsContainer>
          </WrapperMainContent>
          <Paginate>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              previousLabel="<"
              onPageChange={(event) => {
                dispatch(setCurrentPage(event.selected + 1));
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              pageRangeDisplayed={10}
              pageCount={8}
              forcePage={currentPage - 1}
            />
          </Paginate>
        </>
      )}
    </Wrapper>
  );
};
export default MainPage;
