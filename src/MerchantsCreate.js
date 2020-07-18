import React, {useState} from 'react';


const MerchantsCreate = () => {

    const [state, setState] = useState(
        {
            registered: false,
        }
    );

    let nameField;
    let codeField;

    const registerMerchant = () => {

        fetch(`${process.env.REACT_APP_API_URL}merchants`, 
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    brandName: nameField.value, 
                    discountCode: codeField.value, 
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
            (json) => {
                const { message } = json;
                if(message === "Merchant has been saved") {
                    //
                    setState(
                        {
                            ...state,
                            registered: true
                        }
                    )
                } else {
                    setState(
                        {
                            ...state,
                            registered: false
                        }
                    )
                }
            }
        )
    }

    return(

    <div>
        <div className="container">
            <br></br>
            <form method="get" onSubmit={registerMerchant}>
            <label htmlFor="fname" placeholder="Enter Brand Name">Brand  Name: </label>
            <input type="text" placeholder="Enter Brand Name" ref={(elem) => nameField = elem}/><br></br><br></br>
            <label htmlFor="fname" placeholder="Enter Discount code">Discount Code: </label>
            <input type="text" placeholder="Enter Discount Code" ref={(elem) => codeField = elem}/><br></br><br></br>
            <button>Create</button><br></br><br></br>
            </form>
      </div>
    </div>
    )
    
}

export default MerchantsCreate;


