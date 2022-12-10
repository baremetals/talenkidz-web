import React, { useContext } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import axios from 'axios';

import { AuthContext } from 'src/context/AuthContext';


// import {
//     InnerContainer,
//     NavBarHeader,
//     Logo,
//     ToggleBar,
//     NavbarCollapse,
//     NavBarNav,
//     SiteHeader,
//     NavBarItem,
//     Image,
// } from "../../styles/common.styles";

// import {
//     ProfileImg,
//     ProfileSetting,
//     ProfileDropdown,
//     ProfileItem
// } from "./NavBar.styles"

import OrgHeader from './OrgHeader';
import UserHeader from './UserHeader';


export default function NavBar() {
    // const router = useRouter();
    const { state } = useContext(AuthContext);
    const user = state.user;
    // const [dropdown, setDropdown] = useState(false);
    // const [toggle, setToggle] = useState(false)


    return (
        <>
            {user?.userType === 'candidate' && <UserHeader />}
            {user?.userType === 'organisation' && <OrgHeader />}
            {!user && <UserHeader />}
        </>
    );
}
