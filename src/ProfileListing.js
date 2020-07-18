import React from 'react';
import Avatar from './Avatar';

const ProfileListing = (prop) => {

  let avatarUpdate;
  let nameUpdate;
  let passwordUpdate;

  const updateProfile = () => {


    fetch(`${process.env.REACT_APP_API_URL}accounts/update`, 
          {
            method: 'POST',
            body: JSON.stringify(
                {
                  avatar: avatarUpdate.value, 
                  fullName: nameUpdate.value, 
                  password: passwordUpdate.value
                }
            ),
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${[localStorage.getItem('jwt')]}`
            },

        }
        )
        .then(            
          (result) => result.json(),
        )
        .then(
          (json) => console.log(json),
    )
        
      alert("Your profile has been updated");
  }  


  

  return (
      <div className="container">
        <Avatar 
            avatar={prop.avatar}        
        />
        <br></br>
        <form method="get" onSubmit ={updateProfile}>
          <label htmlFor="fname" placeholder={prop.avatar}>Avatar: </label>
          <input type="text" placeholder="Enter image URL" ref={(elem) => avatarUpdate = elem}/><br></br><br></br>
          <label htmlFor="fname" placeholder={prop.name}>Full Name: </label>
          <input type="text" placeholder={prop.name} ref={(elem) => nameUpdate = elem}/><br></br><br></br>
          <label htmlFor="fname" >Password: </label>
          <input type="text" placeholder="Enter new password" ref={(elem) => passwordUpdate = elem}/><br></br><br></br>
          <button>Update</button><br></br><br></br>
        </form>

      </div>
    )
}

export default ProfileListing;