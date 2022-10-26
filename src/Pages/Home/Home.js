import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
         <h2>Shikho all courses:{courses.length}</h2> 
            {
                courses.map(course =><NewsSummaryCard
                key = {course._id}
                course={course}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;