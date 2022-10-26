import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye,FaDisease } from "react-icons/fa";
import { SlCompass,SlBubble } from "react-icons/sl";


const NewsSummaryCard = ({course}) => {
    const {_id, title, mentor, details, image_url,rating, total_view} = course;
    console.log(course);
    return (
        <div>
    <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
            <image
                rounded circle
                className='me-2'
                src ={mentor?.img}
                style ={{height:'60px'}}
            ></image>
            <div>
                <p className='mb-0'>{mentor?.name}</p>
                <p>{mentor?.published_date}</p>
            </div>
        </div>
        <div>
            <SlCompass className='me-2'></SlCompass>
            <SlBubble></SlBubble>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {
            details.length > 250?
            <p>{details.slice(0,250)+ '...'}<Link to={`/courses/${_id}`}>Read More...</Link></p>:<p>{details}</p>
          }
        </Card.Text>
    
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
          <div>
            <FaDisease className='text-warning me-2'></FaDisease>
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className='me-2'></FaEye>
            <span>{total_view}</span>
          </div>
      </Card.Footer>
    </Card>

        </div>
    
    );
};

export default NewsSummaryCard;