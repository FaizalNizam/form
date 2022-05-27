import React from 'react';
import '../components/Heading.css'

function Heading(props) {
    return (
        <div>
            <h1 className='head'>{props.heading}</h1>
            <p className='para'>A sub-heading is a mini-headline given to a subsection or paragraph within a main piece of writing. They're <br />
                smaller than the main headline but larger than the paragraph text of the article</p>
        </div>
    )
}

export default Heading;