import React from "react";
import { useEffect, useContext } from "react";
import BooksContext from "./BookContext";
import Bookinventory from "./Bookinventory";
import axios from "axios";

function Home() {
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
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="mt-5 text-center">
            Library 
          </h1>
          <table className="table table-striped shadow-sm">
            <table className="table round-1">
              <thead>
                <tr>
                  <th>So.No.</th>
                  <th>Book</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => {
                  return (
                    <Bookinventory
                      key={book.id}
                      book={book}
                      index={index + 1}
                    />
                  );
                })}
              </tbody>
            </table>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;