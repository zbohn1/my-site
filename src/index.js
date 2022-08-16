import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About.js";
import Parakeet from "./Parakeet.js";
import Todo from "./Todo.js";
import Helena from "./Helena.js";
import Zs from "./Zs.js";
import Contact from "./Contact.js";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="parakeet" element={<Parakeet />} />
          <Route path="todo" element={<Todo />} />
          <Route path="helena" element={<Helena />} />
          <Route path="zs" element={<Zs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
