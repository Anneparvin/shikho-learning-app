import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>Shikho all courses:{allCourses.length}</h2>
            {
                allCourses.map(course =><NewsSummaryCard
                key = {course._id}
                course={course}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;