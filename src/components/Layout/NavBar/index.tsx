import React from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import axios from 'axios';
import { useAppSelector } from "src/app/hooks";
import { isUser } from "src/features/auth/selectors";

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
    const { user: user } = useAppSelector(isUser);
    // const [dropdown, setDropdown] = useState(false);
    // console.log(user)

    // const [toggle, setToggle] = useState(false)


    return (
        <>
            {user?.userType === 'candidate' && <UserHeader />}
            {user?.userType === 'organisation' && <OrgHeader />}
            {!user && <UserHeader />}
        </>
    );
}
