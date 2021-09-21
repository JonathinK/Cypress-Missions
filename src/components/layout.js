import * as React from "react"
import Header from "./header"
import Footer from "./Footer"
import { Helmet } from "react-helmet"

import  "../styles/global.css"

const Layout = ({ children }) => {
    
    return(
       <div>
           <Helmet>
               <meta name="viewport" content="device-width, initial-scale=1.0" />
            </Helmet>
           <Header />
           <main>{ children }</main>
           <Footer />
       </div>
    )
}

export default Layout