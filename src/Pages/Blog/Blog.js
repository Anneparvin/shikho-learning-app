import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='gap-4 p-4 rounded-lg fs-5 mb-4'>
            {/* q-1 */}
            <Card style={{ width: '45rem' }}>
      <Card.Body>
        <Card.Title>1..What is <strong>Cors?</strong></Card.Title>
        <Card.Text>
            <strong>
            Cross-origin resource sharing (cors) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served
            </strong>
            <strong>
            A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. 
            </strong>

          
        </Card.Text>
        
      </Card.Body>
    </Card>
            {/* q-2 */}
            <Card style={{ width: '45rem' }}>
      <Card.Body>
        <Card.Title>2..For what purpose <strong>Firebase</strong> is used?What is the Altenative of <strong>Firebase</strong></Card.Title>
        <Card.Text>
            <strong>
            Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
            </strong>
            <strong>
            whether you need an alternative to the entire Firebase platform or an alternative to a specific Firebase feature, here's a breakdown of other tools worth considering.
            1..Parse
            2..Supabase
            3..Kuzzel
            4..Back4App
            </strong>

          
        </Card.Text>
        
      </Card.Body>
    </Card>
            {/* q-1 */}
            <Card style={{ width: '45rem' }}>
      <Card.Body>
        <Card.Title>3..What is <strong>Node</strong>?How it is Work</Card.Title>
        <Card.Text>
            <strong>
            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
            </strong>
            <strong>
            the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.s
            </strong>

          
        </Card.Text>
        
      </Card.Body>
    </Card>
            {/* q-4 */}
            <Card style={{ width: '45rem' }}>
      <Card.Body>
        <Card.Title>4..How does <strong>private route</strong> work?</Card.Title>
        <Card.Text>
            <strong>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </strong>
            <strong>
            The private route component is used to protect selected pages in a React app from unauthenticated users.
            </strong>

          
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
    );
};

export default Blog;