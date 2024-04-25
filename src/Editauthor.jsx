import { useFormik } from "formik";
import BooksContext from "./BookContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const validate = (values) => {
  const errors = {};

  !values.author && (errors.author = "Author name required");

  return errors;
};

function Editauthor() {
  const { editValues } = useContext(BooksContext);
  const navigateToAuthors = useNavigate();

  const formik = useFormik({
    initialValues: editValues.id
      ? editValues
      : {
          author: "",
        },
    validate,

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.put(
          `https://6606672abe53febb857dda95.mockapi.io/api/v1/books/${values.id}`,
          values
        );
        setTimeout(() => {
          response.status == 200 && alert("Author name updated successfully");
        }, 100);
        navigateToAuthors("/authors");
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
        <div className="col-md-12">
          <h4 className="mt-5 text-center">Edit Author Details</h4>

          <div className="form shadow-lg">
            <form
              onSubmit={formik.handleSubmit}
              className=" m-5  p-5 rounded width text-end flex-wrap"
              style={{ width: "85%" }}
            >
              <div className="mb-3 row">
                <label htmlFor="author" className="col-sm-2 col-form-label">
                  Author
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    onChange={formik.handleChange}
                    value={formik.values.author}
                  />
                  {formik.touched.author && formik.errors.author && (
                    <div className="mt-2 text-center" style={{ color: "red" }}>
                      {formik.errors.author}
                    </div>
                  )}
                </div>

                <div className="col-1">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editauthor;