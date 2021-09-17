import * as React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <PageWrapper>
            <h1>404</h1>
            <h2>Oh No!</h2>
            <p> Looks like there was supposed to be a page here.</p>
            <p>Try refreshing the page?</p>
            
    </PageWrapper>
  </Layout>
)

export default NotFoundPage

const PageWrapper = styled.main`
    height:100vh;
    width:100%;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
    background-image: linear-gradient(#48B97E 10%, white 90%);
    
    h1,h2{
        font-family:flood-std, sans-serif;
        font-size:clamp(3rem,15vw,5rem);
        color:#5f5f5f;
    }
    h2{
        font-size:clamp(2rem, 15vw, 4rem);
    }
    p{
        font-family:co-text, sans-serif;
        font-size: clamp(1rem, 6vw, 2rem);
            rem);
        max-width:60rem;
        width:90%;
        text-align:center;
        color:#5f5f5f;
    }
`

