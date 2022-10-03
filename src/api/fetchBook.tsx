import * as React from "react";
import axios from "axios";
import { bookTypePage } from "../types/bookTypePage";

export async function fetchBookMain(params: any) {
  let bookData: bookTypePage | null;
  try {
    const { data }: any = await axios.get(
      `https://api.itbook.store/1.0/books/${params.bookId}`
    );
    data.priceToRedux = Number(data.price.slice(1));
    bookData = data;
  } catch (error) {
    console.log(error);
    bookData = null;
  }
  return bookData;
}
