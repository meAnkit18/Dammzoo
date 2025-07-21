import { instance } from "../server.js"
import crypto from 'crypto'



export const processPayment = async(req,res)=>{

    const option = {
        amount:req.body.amount*100,
        currency:'INR'
    }

    const order = await instance.orders.create(option)
    res.status(200).json({
        success:"Pay",
        order
    })
}

export const getKey = (req,res)=>{
    res.status(200).json({
        key:process.env.RKEY_ID
    })
}

export const paymentVarification = async (req,res)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body
    const body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedSignature = crypto.createHmac("sha256",process.env.RKEY_SECRET).update(body.toString()).digest("hex")

    const isAuthentic = razorpay_signature === expectedSignature
    if(isAuthentic){
        return res.redirect(`http://localhost:5173/paymentSuccess?refernce=${razorpay_payment_id}`)
    }else{

        res.status(404).json({
            success:false
        })
    }
    
}