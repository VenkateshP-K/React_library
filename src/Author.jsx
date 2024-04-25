import BooksContext from "./BookContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";

function Author({ book, index }) {
  const { editValues, setEditValues } = useContext(BooksContext);

  const navigateToEditAuthor = useNavigate();

  const handleAuthorEdit = (bookInfo) => {
    setEditValues(bookInfo);
    navigateToEditAuthor("/authors/edit");
  };

  const handleDelete = async (bookInfo) => {
    try {
      const del = await axios.delete(
        `https://6606672abe53febb857dda95.mockapi.io/api/v1/books/${bookInfo.id}`
      );

      setTimeout(() => {
        console.log(del.status);
        alert("The Book Deleted successfully");
      }, 200);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{book.author}</td>
      <td>
        <div className="d-flex gap-2">
          <button
            onClick={() => {
              handleAuthorEdit(book);
            }}
            className="btn btn-primary"
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDelete(book);
            }}
            className="btn btn-danger"
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Author;