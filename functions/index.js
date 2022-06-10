const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");

const stripe = require("stripe")
    ('sk_test_51L570ISAN42OmN5s6CkXG6ek9fTRoKH61AeNfseP1O4NAYl2roasTgswVKgmKiH5T7l9yRcO32WBfFID6Xw6ItYN00mVaMniTl');


// Api Setup to get backend express running on cloud function

//App config

const app = express();


//MiddleWare
app.use(cors({ origin: true }));
app.use(express.json());




//Api routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log('payment request received', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "inr",
    });

    //response ok but created something
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

});

//Listen Command 

exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-e516c/us-central1/api