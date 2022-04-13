import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Order() { 
    const dispatch = useDispatch();
   
    const [order, setOrder] = useState("ASC");
  
    const changeOrder = (e) => {
        e.preventDefault();
        setOrder(e.target.value);
      };
    

}