import React from 'react';
import { Link } from 'react-router-dom';
import DealsCardScss from "./DealsCard.module.scss"

export default function DealsCard(props) {
  return (
    <div className={DealsCardScss.deals_card_container}>
        <img src={props.image} alt="Deal" />
        <h5><span>{props.discount}</span> <span>{props.discount_tag}</span></h5>
        <h1>{props.deal_heading}</h1>
        <p>{props.deal_para}</p>
        <h3>{props.price} <span> {props.old_price} </span> <small> {props.discount} </small> </h3>
        <Link to="/">
            <button> View Deal </button>
        </Link>
    </div>
  )
}
