import React,{useEffect} from "react";
import { Global, PageWrapper } from "../styles";
import { Header } from "../components";
import { PageFooter } from "../components";

export const Layout = ({ element }) => {

const SetCookie = () => {
  useEffect(() => {
    document.cookie = 'name=value; SameSite=Lax; Secure';
  }, []);

  return null;
};
  return(
   <PageWrapper>
   <SetCookie />
   <Global/>
    <Header/>
       {element}
    <PageFooter/>
    
   </PageWrapper>
  )
}