const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
  try {
    const { amount, payment_method_id, name, address, description } = req.body;

    // Create a PaymentIntent with the required fields
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "inr",
      payment_method: payment_method_id,
      confirmation_method: "automatic", // Use automatic confirmation for simplicity
      confirm: true,
      description: description,
      shipping: {
        name: name,
        address: {
          line1: address,
          city: "City", // Replace with actual city
          state: "State", // Replace with actual state
          postal_code: "PostalCode", // Replace with actual postal code
          country: "IN", // Country code for India
        },
      },
    });

    // Check the status of the paymentIntent
    if (paymentIntent.status === "succeeded") {
      res.status(200).json({ success: true, paymentIntent });
    } else if (
      paymentIntent.status === "requires_action" ||
      paymentIntent.status === "requires_source_action"
    ) {
      res
        .status(200)
        .json({ success: false, client_secret: paymentIntent.client_secret });
    } else {
      res
        .status(500)
        .json({
          success: false,
          error: "Payment failed or requires additional action.",
        });
    }
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
