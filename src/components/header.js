import * as React from "react"

import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"



const Header = () => (
    <nav>
        <DesktopNav />
        <MobileNav />
    </nav>
)

export default Header