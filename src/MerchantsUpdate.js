import React, {useState} from 'react';

const MerchantsUpdate = (prop) => {

  let brandName;
  let discountNameCode;


  const updateMerchant = (e) => {
    e.preventDefault();
 

    fetch(`${process.env.REACT_APP_API_URL}merchants/update`, 
          {
            method: 'POST',
            body: JSON.stringify(
                {
                  _id: brandName.id,
                  brandName: brandName.value, 
                  discountCode: discountNameCode.value, 
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
      alert(prop.name , "Merchant has been updated");
  }  

  

  return (
      <div className="container">
        <br></br>
        <form method="get" onSubmit={updateMerchant}>
          <label placeholder={prop.name}> Brand Name: </label>
          <input placeholder={prop.name} id={prop.id} ref={(elem) => brandName = elem}/><br></br><br></br>
          <label> Discound Code: </label>
          <input placeholder={prop.code} id={prop.id} ref={(elem) => discountNameCode = elem}/><br></br><br></br>
          <button>Update</button><br></br><br></br>
        </form>

      </div>
    )
}

export default MerchantsUpdate;