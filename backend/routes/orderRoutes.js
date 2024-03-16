const express = require("express")
const Order = require("../models/orderModel")
const Cart = require("../models/cartModel")
const Customer = require("../models/customerModel")
const Auth = require("../middleware/authCustomer")

const router = new express.Router()

//get orders

router.get('/orders', Auth, async (req, res) => {
    const owner = req.customer._id;
    try {
        const order = await Order.find({ owner: owner }).sort({ date: -1 });
        if(order) {
            return res.status(200).send(order)
        }
        res.status(404).send('No orders found')
    } catch (error) {
        res.status(500).send()
    }
})

//checkout
router.post('/order/checkout', Auth, async(req, res) => {
    try {
        const owner = req.customer._id;
        let payload = req.body
        

        //find cart and customer 
        let cart = await Cart.findOne({owner})
        let customer = req.customer
        if(cart) {
            
        payload = {...payload, amount: cart.bill, email: customer.email}
            const response = await flw.Charge.card(payload)
           // console.log(response)
            if(response.meta.authorization.mode === 'pin') {
                let payload2 = payload
                payload2.authorization = {
                    "mode": "pin",
                    "fields": [
                        "pin"
                    ],
                    "pin": 3310
                }
                const reCallCharge = await flw.Charge.card(payload2)

                const callValidate = await flw.Charge.validate({
                    "otp": "12345",
                    "flw_ref": reCallCharge.data.flw_ref
                })
                console.log(callValidate)
                if(callValidate.status === 'success') {
                    const order = await Order.create({
                        owner,
                        products: cart.products,
                        bill: cart.bill
                    })
                    //delete cart
                    const data = await Cart.findByIdAndDelete({_id: cart.id})
                    return res.status(201).send({status: 'Payment successful', order})
                } else {
                    res.status(400).send('payment failed')
                }
            }
            if( response.meta.authorization.mode === 'redirect') {

                let url = response.meta.authorization.redirect
                open(url)
            }

           // console.log(response)

        } else {
            res.status(400).send('No cart found')
        }
    } catch (error) {
        console.log(error)
        res.status(400).send('invalid request')
    }
})

module.exports = router;