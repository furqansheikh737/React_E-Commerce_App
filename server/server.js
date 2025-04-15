const express = require ("express");
const app = express();
require("dotenv").config();
const cors = require ("cors");
app.use(cors())
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({express : true}));
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("You might not be in the right place");
});

app.post("/pay", async (req, res) => {
   console.log(req.body.token);
   await Stripe.charges.create({
    source : req.body.token.id,
    amount : req.body.amount,
    currency : "usd"
   });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});