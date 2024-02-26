import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import signup_scss from "./SignUpSections.module.scss"

export default function SignUpSections() {
  return (
    <>
        <section className={signup_scss.signup_container}>
            <div>
                <h2> Sign up and get exclusive special deals </h2>
            </div>
            <div>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder=" "
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button  variant="primary" id="button-addon2">
                Sign Up
                </Button>
            </InputGroup>
            </div>
        </section>
    </>
  )
}
