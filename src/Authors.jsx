import React from "react";
import { useContext, useEffect } from "react";
import BooksContext from "./BookContext";
import Author from "./Author";
import axios from "axios";

function Authors() {
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
          <h1 className="mt-5 text-center mb-4">Authors' Information</h1>

          <table className="table table-striped shadow-sm">
            <table className="table round-1">
              <thead>
                <tr>
                  <th>So.No.</th>
                  <th>Author</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => {
                  return <Author key={book.id} book={book} index={index + 1} />;
                })}
              </tbody>
            </table>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Authors;