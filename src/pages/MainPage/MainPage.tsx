import * as React from "react";
import qs from "qs";
import ReactPaginate from "react-paginate";
import { setCurrentPage } from "../../store/slices/paginationSlice";

import { PostCard } from "../../components/Posts/PostCard/PostCard";
import { fetchBooks } from "../../store/slices/booksSlice";
import {
  WrapperMainContent,
  Wrapper,
  PostsContainer,
  Paginate,
  TextError,
} from "./MainPage.styled";
import { Skeleton } from "../../components/Posts/PostCard/Skeleton";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Title/Title";

export function MainPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.books);
  const { currentPage } = useSelector((state) => state.currentPage);

  const { searchValue } = React.useContext(SearchContext);

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [books, setBooks] = React.useState([]);

  // React.useEffect(() => {
  //   console.log("cur page", currentPage);
  //   fetchBooks({ searchValue, currentPage }).then((data) => {
  //     setBooks(data);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 3000);
  //   });
  // }, [searchValue, currentPage]);

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
    if (!(currentPage == "1")) {
      const queryString = qs.stringify({ page: currentPage });
      navigate(`?${queryString}`);
    }
  }, [currentPage]);

  // if (window.location.search) {
  //   getBooks();
  // }
  React.useEffect(() => {
    getBooks();
    // console.log(items.books);
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
              {status == "error" ? (
                <TextError>
                  Unfortunately, it was not possible to get a list of books. Try
                  again later.
                </TextError>
              ) : status == "loading" ? (
                [...new Array(15)].map((_, index) => <Skeleton key={index} />)
              ) : (
                items.books.map((el: any) => {
                  return <PostCard key={el.isbn13} {...el} />;
                })
              )}
              {/* {isLoading
            ? [...new Array(15)].map((_, index) => <Skeleton key={index} />)
            : books.map((el: any) => {
                return <PostCard key={el.isbn13} {...el} />;
              })} */}
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
}
