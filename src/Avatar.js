import React from 'react';

const Avatar = (prop) => {

    return(
        <div>
            <br></br>
            <img src={prop.avatar} width="150" height="150" alt="avatar"/>
            <br></br>
        </div>

    )
}

export default Avatar;