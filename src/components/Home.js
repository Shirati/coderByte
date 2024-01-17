import homeimg from '../images/home2.jpg'
import * as React from 'react';

export default function Home() {

    return (
        <>
            <img src={homeimg} style={{  width: '70vw', 
                    alignContent: 'center',
                    position: 'center',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    margin: 'auto',}}/>
        </>
      
    )
}


