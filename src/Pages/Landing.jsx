import React from 'react';
import LandingScss from "./Landing.module.scss"
import DealsSection from '../Components/DealsSection';
import { Container } from 'react-bootstrap';
import SignUpSections from '../Components/SignUpSections';
import Footer from '../Components/Footer';
import Builder from '../Components/Builder';
import Navigation from '../Components/Navigation';

export default function Landing() {
  return (
    <>
    <Navigation/>
    <Container>
        <div className={LandingScss.landing_container}>
        <Builder/>
            <DealsSection/>
            <SignUpSections/>
        </div>  
    </Container>
    <Footer/>
    </>
  )
}
