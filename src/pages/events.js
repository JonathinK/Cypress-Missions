import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import styled from "styled-components"

const Events = () => {
  return(
      <Layout>
          <ComingSoon>
              <Logo>
                  <StaticImage 
                    src="../images/CypressLogo2.png"
                    layout="constrained"
                    width={500}
                    style={{
                        filter: `drop-shadow(3px 3px 5px rgba(0,0,0,.4))`
                    }}
                  />
              </Logo>
              
              <h1>Coming Soon</h1>
              <p>OOPS! It's seems you've stumbled on a page that doesn't exist yet. This was put here to tell you that we are working very hard to get this page ready for you and it will be awesome =).</p>
          </ComingSoon>
      </Layout>
  )
}

export default Events

const ComingSoon = styled.main`
    width:100%;
    height:100vh;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
    background-image: linear-gradient(#48B97E 10%, white 90%);
    
    h1{
        font-family:flood-std, sans-serif;
        font-size:clamp(2rem,8vw,3rem);
        margin: 3rem 0;
        color:#5f5f5f;
    }
    p{
        font-family:co-text, sans-serif;
        font-size: clamp(1rem, 3vw, 1.5rem);
        max-width:60rem;
        width:90%;
        text-align:center;
        color:#5f5f5f;
    }

`
const Logo = styled.div`
    width: 70%;
    display:flex;
    justify-content:center;
    align-items:center;
`