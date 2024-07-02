import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryBookCard from './CategoryBookCard';

const Category = () => {
    const {category} = useParams();
    const loadedBooks = useLoaderData();
    const filteredBooks = loadedBooks.filter(book => book.category === category);
    return (
        <div>
            <h1 className='text-2xl'>Total books: {filteredBooks.length}</h1>
            <div className='grid grid-cols-4 gap-4 pt-12 pb-16'>
            {
                filteredBooks.map(book => <CategoryBookCard key={book._id} book={book}></CategoryBookCard>)
            }
            </div>
        </div>
    );
};

export default Category;