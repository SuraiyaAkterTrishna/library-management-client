import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import RatingFour from "../Shared/RatingFour";
import RatingFive from "../Shared/RatingFive";

const BookDetails = () => {
  const loadedData = useLoaderData();
  const {_id, title, img, detail_img, author, category, rating, detail} = loadedData;
  return (
    <div className="container mx-auto py-12">
      <div className="card lg:card-side bg-base-100 shadow-xl border p-4">
        <figure className="w-full">
          <img className="p-4" src={detail_img} alt="Album" />
        </figure>
        <div className="card-body flex justify-center">
          <h2 className="font-bold card-title text-4xl">{title}</h2>
          <div>
            <p className="font-bold pb-1">
              <span className="pe-4">Author: {author} </span>
              <span className="pe-4">Category: {category} </span>
            </p>
            <div className="flex gap-2 items-center font-bold pb-1">
              <span>Rating: {rating}</span>
              <span className="text-warning">
                {rating < 5 ? <RatingFour /> : <RatingFive />}
              </span>
            </div>
            <p>{detail}</p>
          </div>
          <div className="card-actions">
            <Link
             /*  onClick={() =>
                handleAddToCart({
                  name,
                  brand,
                  type,
                  price,
                  detail,
                  rating,
                  img,
                  detail_img,
                })
              } */
              className="btn btn-info w-1/3"
            >
              Borrow Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
