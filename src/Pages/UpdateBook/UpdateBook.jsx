import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const book = useLoaderData();
  const {
    _id,
    title,
    quantity,
    author,
    category,
    detail,
    rating,
    img,
    detail_img,
  } = book;

  const handleUpdateBook = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const quantity = form.quantity.value;
    const author = form.author.value;
    const category = form.category.value;
    const detail = form.detail.value;
    const rating = form.rating.value;
    const img = form.img.value;
    const detail_img = form.detail_img.value;

    const updatedBook = {
      title,
      quantity,
      author,
      category,
      detail,
      rating,
      img,
      detail_img,
    };

    // send data to the server
    fetch(`http://localhost:5000/books/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Book updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24 mb-4">
      <h2 className="text-5xl font-extrabold">Update Book</h2>
      <form onSubmit={handleUpdateBook}>
        {/* form name and quantity */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-bold">Book Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Book Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-xl font-bold">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and author */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-bold">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-xl font-bold">Author</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="author"
                defaultValue={author}
                placeholder="Author"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form description and rating row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-bold">Detail</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="detail"
                defaultValue={detail}
                placeholder="Detail"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-xl font-bold">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo url and detail Photo url row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-bold">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="img"
                defaultValue={img}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-xl font-bold">
                Detail Photo URL
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="detail_img"
                defaultValue={detail_img}
                placeholder="Detail Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Book"
          className="btn btn-neutral btn-block"
        />
      </form>
    </div>
  );
};

export default UpdateBook;
