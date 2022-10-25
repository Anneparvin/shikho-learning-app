import React, { useState } from 'react';
import { useEffect } from 'react';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/courses-categories')
        .then (res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h2>All Catrgory:{categories.length}</h2>
        </div>
    );
};

export default LeftSideNav;