import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./SuccessOrder.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
const SuccessOrder = () => {
  const {user}= useSelector(state=>state.user)
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography className="back">MR, {user.name} Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default SuccessOrder;