import React from "react";
import CustomLink from "../CustomLink/CustomLink";


const Header = () => {
    return (
        <div className="md: grid grid-cols-6 gap-2">
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/shop">Shop</CustomLink>
        </div>
    );
};


export default Header;