import React from "react";
import { PageWrapper } from "../styles";
import { Footer, Header } from "../components";

export const Layout = ({ element }) => {
  return(
   <PageWrapper>
    <Header/>
       {element}
    <Footer/>
   </PageWrapper>
  )
}