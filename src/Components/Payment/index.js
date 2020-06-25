import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StripeCheckout from "react-stripe-checkout";

import { confirmWork } from "../../store/myPosts/actions";
import { apiUrl } from "../../Config/constants";

toast.configure();

export default function Payment(props) {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (props.status === "Completed") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [props.status]);

  const handleConfirmWork = () => {
    dispatch(confirmWork(props.id));
    setDisabled(true);
  };

  const title = props.title;
  const hours =
    (new Date(props.endTime) - new Date(props.startTime)) / (1000 * 60 * 60);
  const price = hours * 8; //assuming 8 euros per hour

  const handlePayment = async (token) => {
    const response = await axios.post(`${apiUrl}/payment`, {
      token,
      title,
      price,
    });

    //console.log("Status##", response.data);
    const { status } = response.data;

    if (status === "success") {
      toast("Payment is successful. Please check email for details.", {
        type: "success",
      });
    } else {
      toast("Payment is not successful.", {
        type: "error",
      });
    }
  };

  return (
    <div>
      <Button>Edit Post</Button>
      <span>{"                                "}</span>
      <Button variant="success" onClick={handleConfirmWork} disabled={disabled}>
        Confirm Work Done!!
      </Button>
      <span>{"                                "}</span>
      {disabled ? (
        <StripeCheckout
          stripeKey="pk_test_51GviqtAzSgmuZzUjGponrT7cKLwvvf3NIaJprSCb3glOthFvEcTfGFoI3OAd6vKmPt2bLddwcb7HUIto69tMggXa00slcpNnG2"
          token={handlePayment}
          name={props.title}
          amount={price * 100}
          currency="EUR"
        >
          <style type="text/css">
            {` .btn-pay { background-color: purple;  color: white;}`}
          </style>

          <Button type="submit" variant="pay">
            Pay Now
          </Button>
        </StripeCheckout>
      ) : null}
    </div>
  );
}
