import React from "react";

const Footer = () => {

    const d = new Date();
    const year = d.getFullYear()
    return (
        <h6 class="text-center">Copyright {year}</h6>
    )
}
export default Footer;