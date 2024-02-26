import React from 'react'
import { Link } from 'react-router-dom';
import builder_card_scss from "./BuilderCard.module.scss"

export default function BuilderCard(props) {
  return (
    <div className={builder_card_scss.builder_card_container}>
    <img className={builder_card_scss.best_value} src={props.best_value} />
    <div className={builder_card_scss.builder_card}>
        
        <div>
        <span> {props.sl_no} </span>

            <img src={props.card_image} alt={props.builder_name} className={builder_card_scss.builder_img} />
            <h5> {props.builder_name} </h5>
        </div>
        <div>
            <h2> {props.heading_01} </h2>
            <p> {props.para_01} </p>
            <h2> {props.heading_02} </h2>
            <p>{props.para_02}</p>
            <Link>
                <h6> Show more  </h6>
            </Link>
        </div>
        <div>
            <img src="./ratings.PNG" alt="rating" className={builder_card_scss.ratings} />
            <button> View </button>
        </div>
    </div>
    </div>
  )
}
