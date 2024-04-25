import { createContext, useState } from "react";
import { Formik } from "formik";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [editValues, setEditValues] = useState({});

  return (
    <BooksContext.Provider
      value={{ books, setBooks, editValues, setEditValues }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;