import React from "react";

function AddBooks() {
  return (
    <form>
      <h3>Add a Book</h3>
      <input type="text"
      className="bookTitle"
      placeholder="Add title ..."
      name = "title"
       />
       <input type="text"
      className="authorName"
      placeholder="Add Author ..."
      name = "author"
       />
       <button type="submit" className="submitButton">Add Book</button>
    </form>
  );
}

export default AddBooks;