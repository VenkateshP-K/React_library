import { useFormik } from "formik";
import axios from "axios";
import { useContext, useEffect } from "react";
import BooksContext from "./BookContext";
import { useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Book title required";
  }

  if (!values.author) {
    errors.author = "Author name required";
  }

  if (!values.isbn) {
    errors.isbn = "ISBN not to be empty";
  }

  if (!values.publicationDate) {
    errors.publicationDate = "Publication date required";
  }

  return errors;
};

function Editbook() {
  const { editValues } = useContext(BooksContext);
  const navigateToBooks = useNavigate();

  const formik = useFormik({
    initialValues: editValues || {
      title: "",
      author: "",
      isbn: "",
      publicationDate: "",
    },

    validate,

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.put(
          `https://6606672abe53febb857dda95.mockapi.io/api/v1/books/${values.id}`,
          values
        );
        setTimeout(() => {
          response.status == 200 && alert("Book updated successfully");
        }, 100);
        navigateToBooks("/books");
      } catch (err) {
        console.log(err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h4 className="mt-5 text-center">Edit Book Details</h4>

          <div className="form shadow-lg">
            <form
              onSubmit={formik.handleSubmit}
              className=" m-5  p-5 rounded width text-end flex-wrap"
              style={{ width: "85%" }}
            >
              <div className="mb-3 row">
                <label htmlFor="Title" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                  {formik.touched.title && formik.errors.title && (
                    <div>{formik.errors.title}</div>
                  )}
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="author" className="col-sm-2 col-form-label">
                  Author
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    onChange={formik.handleChange}
                    value={formik.values.author}
                  />
                  {formik.touched.author && formik.errors.author && (
                    <div>{formik.errors.author}</div>
                  )}
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="ISBN" className="col-sm-2 col-form-label">
                  ISBN
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="isbn"
                    onChange={formik.handleChange}
                    value={formik.values.ISBNnumber}
                  />

                  {formik.touched.isbn && formik.errors.isbn && (
                    <div>{formik.errors.ISBNnunber}</div>
                  )}
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="publicationDate"
                  className="col-sm-2 col-form-label"
                >
                  Publication Date
                </label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    className="form-control"
                    id="publicationDate"
                    onChange={formik.handleChange}
                    value={formik.values.dateofpublication}
                  />
                  {formik.touched.dateofpublication &&
                    formik.errors.dateofpublication && (
                      <div>{formik.errors.dateofpublication}</div>
                    )}
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editbook;