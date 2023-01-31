// import React, { useState } from 'react'
// import '../App.css'
// import axios from 'axios'

// // RCP_jhmt081kpx5ug2i recipient_code
// // RCP_tadggk6l0uwykce Dimeji recipient code 

// const Transfer = () => {

//     const [amount, setAmount] = useState("")
//     const [description, setDescription] = useState("")
//     const [recipient, setRecipient] = useState("")
//     const publicKey = "pk_test_d963fe0bc6fb66484f044ec3dd2004af5a8c9304";
//     const secretKey = "sk_test_fd0b8f410f1cab062ba78c47b366ff4f5a09c3b3"

//    const onSubmit = async () => {
    
//         const response = await axios.post("https://api.paystack.co/transfer", 
//         {
//                 source: "balance",
//                 amount, recipient, 
//                 reason: description
//         }, {
//             headers :{
//                      Authorization: `Bearer ${secretKey}`,
//                     "content-type": "application/json"
//                 }
//         }

//         )
//         try {
//             console.log(response.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//   return (
//     <>
//      <div className="checkout-form">
//           <form> 
//           <div className="checkout-field">
//             <label>Amount</label>
//             <input
//                  type="number"               
//                  id="amount"
//                  onChange={(e) => setAmount(e.target.value)}
//                />
//           </div>
//           <div className="checkout-field">
//             <label>Recipient</label>
//             <input
//                  type="text"               
//                  id="recipient"
//                  onChange={(e) => setRecipient(e.target.value)}
//                />
//           </div>
//           <div className="checkout-field">
//             <label>Description</label>
//             <input
//                  type="text"               
//                  id="description"
//                  onChange={(e) => setDescription(e.target.value)}
//                />
//           </div>
//           </form>
//           <button onClick={onSubmit}>Transfer</button>
//           {/* <PaystackButton className='paystack-button' {...componentProps} /> */}
//         </div>
//     </>
//   )
// }

// export default Transfer