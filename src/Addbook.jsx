import { useFormik } from "formik";
import axios from "axios";
import { useContext, useEffect } from "react";
import BooksContext from "./BookContext";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Book title required";
  }

  if (!values.author) {
    errors.author = "Author name required";
  }

  if (!values.ISBNnumber) {
    errors.ISBNnumber = "ISBN should not to be empty";
  }

  if (!values.dateofpublication) {
    errors.publicationDate = "Publication date required";
  }

  return errors;
};

function Addbook() {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      ISBNnumber: "",
      dateofpublication: "",
    },
    validate,

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post(
          "https://6606672abe53febb857dda95.mockapi.io/api/v1/books",
          values
        );
        console.log("Form submitted successfully");
        console.log(response);
        resetForm();
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
        <div className="col-md-12 ">
          <h4 className="mt-5 text-center">Add Book to Library Inventory</h4>
        </div>
      </div>

      <div className="form">
        <form
          onSubmit={formik.handleSubmit}
          className=" m-5 shadow-lg p-5 rounded-width text-end flex-wrap text-wrap "
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
                id="ISBNnumber"
                onChange={formik.handleChange}
                value={formik.values.ISBNnumber}
              />

              {formik.touched.isbn && formik.errors.isbn && (
                <div>{formik.errors.ISBNnumber}</div>
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
                id="dateofpublication"
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
  );
}

export default Addbook;