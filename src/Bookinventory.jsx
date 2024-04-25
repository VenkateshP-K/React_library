import React from "react";

function Bookinventory({ book, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
    </tr>
  );
}

export default Bookinventory;