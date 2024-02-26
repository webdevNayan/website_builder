import React from 'react';
import footer_scss from "./Footer.module.scss";
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <section className={footer_scss.footer_container}>
        <Container>
        <div className={footer_scss.footer}>
        <div>
            <ul>
                <li> <h2> CATEGORIES  </h2> </li>
                <li> Web Builder </li>
                <li> Hosting </li>
                <li> Data Center </li>
                <li> Robotic-Automation </li>
            </ul>
        </div>

        <div>
            <ul>
            <li> <h2> CONTACT  </h2> </li>
                <li> Contact </li>
                <li> Privacy Policy </li>
                <li> Terms Of Service </li>
                <li> Categories </li>
                <li> About </li>
            </ul>
        </div>

        <div>
            <label for="country">United States</label>

            <select name="country" id="country">
            <option value="United States">United States</option>
            <option value="United States">United States</option>
            <option value="United States">United States</option>
            <option value="United States">United States</option>
            </select>
        </div>
        </div>
        </Container>
    </section>
  )
}
