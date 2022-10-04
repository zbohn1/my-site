import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";

export default function Contact() {
  const [submit, setSubmit] = React.useState("false");
  function handleSubmit() {
    setTimeout(() => {
      setSubmit("true");
    }, 100);
    setTimeout(() => {
      "";
    }, 15000);
  }
  if (submit === "false") {
    const Form_Endpoint =
      "https://public.herotofu.com/v1/1be5efe0-1d95-11ed-9730-af3c511c5e41";
    return (
      <div>
        <GlobalStyles />
        <Header />
        <FlexContainer>
          <Title>Get in touch!</Title>
          <FormContainer
            action={Form_Endpoint}
            method="POST"
            onSubmit={handleSubmit}
          >
            <Label for="email">Email*</Label>
            <Input type="text" id="email" name="email" />
            <Label for="subject">Subject*</Label>
            <Input type="text" id="subject" name="subject" />
            <Label for="message" id="message">
              Message*
            </Label>
            <TextArea type="text" id="message" name="message" />
            <Button type="submit">Submit</Button>
          </FormContainer>
        </FlexContainer>
      </div>
    );
  } else {
    return (
      <div>
        <GlobalStyles />
        <Header />
        <ThankYou>
          Thank you for contacting me! I will get back to you soon.
        </ThankYou>
      </div>
    );
  }
}

const Title = styled.h2`
  margin: 0;
  font-size: 50px;
  font-family: "Medium", "Hnmedium", Helvetica, Arial, sans-serif;
  line-height: 66px;
  margin-bottom: 40px;
  margin-top: 25px;
  @media (max-width: 700px) {
    font-size: 35px;
    line-height: 40px;
    &:first-of-type {
      margin-top: 25px;
    }
  }
  @media (max-width: 400px) {
    font-size: 35px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20vw;
  @media (max-width: 700px) {
    margin: 0px 8vw;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  margin-bottom: 20px;
  padding: 12px;
  border-width: 1px;
  box-shadow: 0px 4px 8px #999999;
`;

const TextArea = styled.textarea`
  height: 120px;
  padding: 12px;
  box-shadow: 0px 4px 8px #999999;
`;

const Label = styled.label`
  margin-bottom: 3px;
  font-size: 16px;
  font-family: "Regular", "Hnmedium", Helvetica, Arial, sans-serif;
  color: #000000;
  opacity: 0.8;
`;

const Button = styled.button`
  height: 61px;
  width: 222px;
  background-color: #000000;
  color: #f5f5f5;
  font-size: 20px;
  border-radius: 7px;
  border-color: #000000;
  font-family: "Regular", "Hnmedium", Helvetica, Arial, sans-serif;
  margin-top: 30px;
  &:hover {
    opacity: 0.71;
  }
`;

const ThankYou = styled.h2`
  text-align: center;
  margin-top: 100px;
  font-size: 50px;
  font-family: "Medium", "Hnmedium", Helvetica, Arial, sans-serif;
  margin-left: 50px;
  margin-right: 50px;
  @media (max-width: 700px) {
    font-size: 35px;
    line-height: 40px;
    &:first-of-type {
      margin-top: 25px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  @media (max-width: 400px) {
    font-size: 35px;
  }
`;
