import React, { useState, useRef, useEffect } from "react";
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



export default function UserHeader() {
    const router = useRouter();
    const { user: user } = useAppSelector(isUser);
    const [dropdown, setDropdown] = useState(false);
    const [toggle, setToggle] = useState(false);
    const sidebarRef = useRef<any>(null);
    const dropdownRef = useRef<any>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
          if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            if (toggle) setToggle(false);
          }

          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            if (dropdown) setDropdown(false);
          }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    });

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
                        <Link href={user?.id ? `user-profile/${user?.username}` : '/'} passHref>
                            <Logo>
                                <Image src={'/logo.png'} alt='' />
                            </Logo>
                        </Link>
                        <ToggleBar onMouseDown={() => setToggle(!toggle)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </ToggleBar>
                        <NavbarCollapse className={`${toggle ? "opened" : ""}`}>
                            <NavBarNav ref={sidebarRef}>
                                <NavBarItem onClick={() => setToggle(!toggle)}><Link href={'/'}>Home</Link></NavBarItem>
                                {/* <NavBarItem><Link href={'/'}>About Us</Link></NavBarItem> */}
                                <NavBarItem onClick={() => setToggle(!toggle)}><Link href={'/events'}>Events</Link></NavBarItem>
                                <NavBarItem onClick={() => setToggle(!toggle)}><Link href={'/activities'}>Activities</Link></NavBarItem>
                                <NavBarItem onClick={() => setToggle(!toggle)}><Link href={'/articles'}>Articles</Link></NavBarItem>
                                {user?.id && <>

                                    <ProfileSetting ref={dropdownRef}>
                                        <ProfileImg
                                            onClick={() => setDropdown(!dropdown)}
                                            alt="user profile image"
                                            src={user?.avatar || user?.logo}
                                        />
                                        <ProfileDropdown
                                            className={`${dropdown ? "opened" : ""}`}
                                            onClick={() => setDropdown(!dropdown)}
                                        >
                                            {/* <ProfileItem>
                                            <Link href={`/user-profile/${user?.username}`}>Setting</Link>
                                        </ProfileItem> */}
                                            <ProfileItem>
                                                <Link href={`/user-profile/${user?.username}`}>Profile</Link>
                                            </ProfileItem>
                                            <ProfileItem>
                                                <Link href={`/user-profile/${user?.username}/edit-profile`}>
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
                                    {/* <NavBarItem><Link href={'/newsletter'}>Newsletter</Link></NavBarItem>
                                    <NavBarItem className="signup"><Link href={'/auth/login'}>Get Started</Link></NavBarItem> */}
                                </>}

                            </NavBarNav>
                        </NavbarCollapse>
                    </NavBarHeader>
                </InnerContainer>
            </SiteHeader>
        </>
    );
}
