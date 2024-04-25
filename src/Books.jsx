import { useContext, useEffect } from "react";
import BooksContext from "./BookContext";
import Card from "./Card";
import axios from "axios";

function Books() {
  const { books, setBooks } = useContext(BooksContext);

  const getAPIData = async () => {
    try {
      const response = await axios.get(
        "https://6606672abe53febb857dda95.mockapi.io/api/v1/books"
      );

      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, [books]);

  return (
    <div className="container-sm flex-wrap">
      <div className="row">
        <h2 className="text-center p-2 m-2 ">Books</h2>
        {books.map((book) => {
          return (
            <div key={book.id} className="col-sm-3 md-3 card-group flex-wrap ">
              <Card book={book} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;