import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from 'axios';
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import {
    InnerContainer,
    NavBarHeader,
    Logo,
    ToggleBar,
    NavbarCollapse,
    NavBarNav,
    SiteHeader,
    NavBarItem,
    Image,
} from "../../styles/common.styles";

import {
    ProfileImg,
    ProfileSetting,
    ProfileDropdown,
    ProfileItem
} from "./NavBar.styles"



export default function OrgHeader() {
    const router = useRouter();
    const { user: user } = useAppSelector(isUser);
    const [dropdown, setDropdown] = useState(false);
    // console.log(user)

    const [toggle, setToggle] = useState(false)

    const handleLogOut = async () => {
        try {
            const res = await axios.post("/api/auth", {
                data: {
                    flag: 'LOGOUT'
                }
            });
            // console.log(res);
            if (res.status === 200 || res?.data?.message) {
                router.push("/auth/login");
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return (
        <>
            <SiteHeader>
                <InnerContainer>
                    <NavBarHeader>
                        <Link href={user?.id ? `/account/${user?.username}` : '/'} passHref>
                            <Logo>
                                <Image src={'/logo.png'} alt='logo' />
                            </Logo>
                        </Link>
                        <ToggleBar onClick={() => setToggle(!toggle)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </ToggleBar>
                        <NavbarCollapse className={`${toggle ? "opened" : ""}`} onClick={() => setToggle(!toggle)}>
                            <NavBarNav>
                                <NavBarItem><Link href={user?.id ? `/account/${user?.username}` : '/'}>Home</Link></NavBarItem>
                                {/* <NavBarItem><Link href={'/'}>About Us</Link></NavBarItem> */}
                                <NavBarItem><Link href={'/events'}>Events</Link></NavBarItem>
                                <NavBarItem><Link href={'/activities'}>Activities</Link></NavBarItem>
                                <NavBarItem><Link href={'/articles'}>Articles</Link></NavBarItem>
                                <NavBarItem className="signup"><Link href={'/create'}>Create</Link></NavBarItem>
                                {user?.id && <>

                                    <ProfileSetting>
                                        <ProfileImg
                                            onClick={() => setDropdown(!dropdown)}
                                            alt="user profile image"
                                            src={user?.logo}
                                        />
                                        <ProfileDropdown
                                            className={`${dropdown ? "opened" : ""}`}
                                            onClick={() => setDropdown(!dropdown)}
                                        >
                                            {/* <ProfileItem>
                                            <Link href={`/user-profile/${user?.username}`}>Setting</Link>
                                        </ProfileItem> */}
                                            <ProfileItem>
                                                <Link href={`/account/${user?.username}`}>Profile</Link>
                                            </ProfileItem>
                                            <ProfileItem>
                                                <Link href={`/account/${user?.username}/edit-profile`}>
                                                    Edit Profile
                                                </Link>
                                            </ProfileItem>
                                            <ProfileItem>
                                                <Link href="/privacy">Privacy settings</Link>
                                            </ProfileItem>
                                            <ProfileItem>
                                                <Link href="/terms">Terms</Link>
                                            </ProfileItem>
                                            <ProfileItem>
                                                <a onClick={handleLogOut}>Logout</a>
                                            </ProfileItem>
                                        </ProfileDropdown>
                                    </ProfileSetting>
                                </>}
                                {!user?.id && <>
                                    {/* <NavBarItem><Link href={'/'}>Contact Us</Link></NavBarItem> */}
                                    <NavBarItem><Link href={'/auth/login'}>Sign In</Link></NavBarItem>
                                    <NavBarItem className="signup"><Link href={'/auth/register'}>Sign Up</Link></NavBarItem>
                                </>}

                            </NavBarNav>
                        </NavbarCollapse>
                    </NavBarHeader>
                </InnerContainer>
            </SiteHeader>
        </>
    );
}
