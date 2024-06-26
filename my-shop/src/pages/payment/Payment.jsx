import React from "react";
import { usePaystackPayment } from "react-paystack";
import styled from "styled-components";

const config = {
  reference: new Date().getTime().toString(),
  email: "queen@example.com",
  amount: 20000,
  publicKey: "pk_test_4f89ec6e8eeb5333aad78a751918eee7effa6b4b",
};

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    console.log(reference);
    alert("Payment successful! Reference: " + reference.trxref);
  };

  const onClose = () => {
    console.log("closed");
  };

  return (
    <div>
      <StyledButton
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Place Order
      </StyledButton>
    </div>
  );
};

const PaystackPayment = () => {
  return <PaystackHookExample />;
};

export default PaystackPayment;
