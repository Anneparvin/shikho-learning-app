import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard'


const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div>
            <h2>this is category:{categoryCourses.length}</h2>
            {
                categoryCourses.map(course =><NewsSummaryCard
                key={course._id}
                course={course}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;