import React from 'react';
import Recommend from './Recommend';

import Originals from './Originals';
import Trending from './Trending';


const Moviecard = () =>{
    return(
        <>
            <Recommend />
            
            <Originals />
            <Trending />
        </>
    )
}

export default Moviecard;