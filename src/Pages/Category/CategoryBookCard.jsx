import { Link } from "react-router-dom";
import RatingFive from "../Shared/RatingFive";
import RatingFour from "../Shared/RatingFour";


const CategoryBookCard = ({book}) => {
  const { _id, img, title, author, category, rating} = book;
  return (
    <div className="card card-compact bg-base-100 shadow-xl border">
      <figure>
        <img src={img} alt="books" />
      </figure>
      <div className="card-body">
        <h2 className=" font-bold card-title">{title}</h2>
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
        </div>
      </div>
      <div className="card-actions justify-center pb-4">
        <Link className="btn btn-accent w-1/3" to={`/${category}/${_id}`}>
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default CategoryBookCard;
