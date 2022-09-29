import * as React from "react";
import { useState, useEffect } from "react";
import { bookType } from "../types/bookType";

type ApiResponse = { books: bookType };

export async function fetchBooks({ searchValue, currentPage }: any) {
  const search = searchValue ? `${searchValue}` : "mongodb";

  let bookData: any | Array<{}>;
  try {
    const response = await fetch(
      `https://api.itbook.store/1.0/search/${search}/${currentPage}`
    );
    const book = ((await response.json()) as ApiResponse).books;
    bookData = book;
  } catch (error) {
    console.log(error);
    bookData = [];
  }
  return bookData;
}
