import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { userRequest } from "../requestMethods";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #343a40;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #343a40;
  border-radius: 5px;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #343a40;
  color: white;
  border: 1px solid black;
  font-weight: 600;
  cursor: pointer;
`;
const CardElementStyled = styled(CardElement)`
  margin: 10px 0;
  border: 1px solid #343a40;
  border-radius: 5px;
  padding: 10px;
`;

const CheckoutForm = ({ amount, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(null);

  // State variables for form fields
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);
    setSuccess(null);

    const { error: stripeError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

    if (stripeError) {
      setError(stripeError.message);
      setProcessing(false);
      return;
    }

    try {
      const response = await userRequest.post("/checkout/payment", {
        amount: amount * 100, // Stripe expects the amount in cents
        payment_method_id: paymentMethod.id,
        name: name,
        address: address,
        description: description,
      });

      const { success, client_secret, paymentIntent } = response.data;

      if (success) {
        setSuccess("Payment successful!");
        history.push("/success", {
          stripeData: paymentIntent,
          products: cart,
        });
      } else if (client_secret) {
        const { error } = await stripe.confirmCardPayment(client_secret);

        if (error) {
          setError(error.message);
        } else {
          setSuccess("Payment successful!");
          history.push("/success", {
            stripeData: paymentIntent,
            products: cart,
          });
        }
      } else {
        setError("Payment failed or requires additional action.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <FormGroup>
          <Label htmlFor="name">Customer Name:</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
      </div>
      <div>
        <FormGroup>
          <Label htmlFor="address">Customer Address:</Label>
          <Input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </FormGroup>
      </div>

      <div>
        <FormGroup>
          <Label htmlFor="description">Description:</Label>
          <TextArea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormGroup>
      </div>
      <CardElementStyled />
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
      <Button type="submit" disabled={processing}>
        {processing ? "Processing..." : "Checkout"}
      </Button>
    </Form>
  );
};

export default CheckoutForm;
