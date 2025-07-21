import React from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'
const backendURL = import.meta.env.VITE_BACKEND_PORT


function TestComponent({dummydata}) {

    const checkoutHandler = async (amount)=>{
        try {
            const {data:keyData} = await axios.get(`${backendURL}/api/payment/getKey`)
            const {key} = keyData
            
            const {data:orderData} = await axios.post(`${backendURL}/api/payment/process`,{
                amount
            })
            const {order} = orderData

             const options = {
                    key, 
                    amount,
                    currency: 'INR',
                    name: 'Dammzoo',
                    description: 'Secure Payment',
                    order_id:order.id,
                    callback_url: `${backendURL}/api/payment/paymentVerification`,
                    prefill: {
                    name: 'Gaurav Kumar',
                    email: 'gaurav.kumar@example.com',
                    contact: '9999999999'
                    },
                    theme: {
                    color: '#F37254'
                    },
                };

                const rzp = new Razorpay(options);
                rzp.open();
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
    
  return (
    <div>
        {dummydata.map((items)=>(

            <div className='border-black p-5 bg-red-600 m-5 ' key={items.id}>
                <h1>{items.name}</h1>
                <button className='bg-amber-50 p-2' onClick={()=> checkoutHandler(items.amount)}>{items.amount}</button>
            </div>
        ))}
        
    </div>
  )
}

export default TestComponent
