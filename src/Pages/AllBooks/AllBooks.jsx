import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";


const AllBooks = () => {
    const books = useLoaderData();
    // console.log(books);
    return (
        <div>
            <h2>Total books: {books.length}</h2>
            <div className="grid grid-cols-3 gap-4 container mx-auto py-12">
            {
                books.map(book => <BookCard 
                    key={book._id} 
                    book={book} 
                ></BookCard>)
            }
        </div>
        </div>
    );
};

export default AllBooks;