import * as React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { bookTypePage } from "../types/bookTypePage";

export function FetchBookMain() {
  const [card, setCard] = React.useState<bookTypePage | null>();
  let params = useParams();
  React.useEffect(() => {
    async function fetchBook() {
      try {
        const { data }: any = await axios.get(
          `https://api.itbook.store/1.0/books/${params.bookId}`
        );
        data.priceToRedux = Number(data.price.slice(1));
        setCard(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBook();
  }, []);
  return card;
}
