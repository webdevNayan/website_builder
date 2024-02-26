import React from 'react'
import DealsCard from './DealsCard';
import deals_scss from "./DealsSection.module.scss";

export default function DealsSection() {
  return (
    <section className={deals_scss.deals_section}>
        <h1> Related deals you might like for </h1>
        <div>
            <DealsCard 
                image="./web_builder_01.png"
                discount="20% Off"
                discount_tag="Limited time"
                deal_heading="Webbuilder 1"
                deal_para="Computer  Modern clasic with wix support"
                price="$39.96"
                old_price="$49.96"
            />
             <DealsCard 
                image="./web_builder_01.png"
                discount="20% Off"
                discount_tag="Limited time"
                deal_heading="Webbuilder 1"
                deal_para="Computer  Modern clasic with wix support"
                price="$39.96"
                old_price="$49.96"
            />
             <DealsCard 
                image="./web_builder_01.png"
                discount="20% Off"
                discount_tag="Limited time"
                deal_heading="Webbuilder 1"
                deal_para="Computer  Modern clasic with wix support"
                price="$39.96"
                old_price="$49.96"
            />
        </div>
    </section>
  )
}
