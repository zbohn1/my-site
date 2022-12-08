import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./About.js";
import Parakeet from "./Parakeet.js";
import Todo from "./Todo.js";
import Helena from "./Helena.js";
import Zs from "./Zs.js";
import Contact from "./Contact.js";
import ScrollToTop from "./ScrollToTop.js";
import ProductFeedback from "./ProductFeedback.js";
import Tornado from "./Tornado.js";
import Icicles from "./Icicles.js";
import Clock from "./Clock.js";
import AudioVisualizer from "./AudioVisualizer.js";
import { ContextProvider } from "./Context";
import ASMain from "./ASMain.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="parakeet" element={<Parakeet />} />
          <Route path="todo" element={<Todo />} />
          <Route path="helena" element={<Helena />} />
          <Route path="zs" element={<Zs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="productfeedback" element={<ProductFeedback />} />
          <Route path="tornado" element={<Tornado />} />
          <Route path="icicles" element={<Icicles />} />
          <Route path="clock" element={<Clock />} />
          <Route path="audiovisualizer" element={<AudioVisualizer />} />
          <Route path="ASMain" element={<ASMain />} />
        </Routes>
      </ScrollToTop>
    </HashRouter>
  </ContextProvider>
);
