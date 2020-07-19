import React from 'react';

const Avatar = (prop) => {
    console.log("this is the prop:" , prop)
    

    return(
        <div>
            <br></br>
            {
                !prop.avatar ? <img src="/img/user.png" width="150" height="150" alt="avatar"/>:
                <img src={prop.avatar} width="150" height="150" alt="avatar"/>
            }
            <br></br>
        </div>

    )
}

export default Avatar;

