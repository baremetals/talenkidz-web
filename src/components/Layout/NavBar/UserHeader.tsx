import React, { useState, useRef, useEffect, useContext, useCallback } from "react";
import Link from "next/link";
import Image from 'next/image';



import {
    InnerContainer,
    Logo,  
} from "styles/common.styles";

import {
  SiteHeader,
  ProfileImg,
  ProfileSetting,
  ProfileDropdown,
  ProfileItem,
  NavBarHeader,
  NavbarCollapse,
  NavBarNav,
  NavBarItem,
  ToggleBar,
  LogoBlock,
} from './NavBar.styles';
import { AuthContext } from 'src/features/auth/AuthContext';
import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';


export default function UserHeader() {
    const { logUserOut, user } = useContext(AuthContext);
    const [dropdown, setDropdown] = useState(false);
    const [toggle, setToggle] = useState(false);
    const sidebarRef = useRef<any>(null);
    const dropdownRef = useRef<any>(null);
    const dispatch = useAppDispatch();

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
    const handleLogOut = () => {
        try {
            logUserOut();
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const handleModal = useCallback(
      () =>
        dispatch(
          openModal('REGISTER_FORM')
        ),
      [dispatch]
    );

    return (
      <>
        <SiteHeader>
          <InnerContainer>
            <NavBarHeader>
              <LogoBlock>
                <Link
                  href={
                    user?.id
                      ? `${
                          user.userType === 'candidate'
                            ? 'user-profile'
                            : 'account'
                        }/${user?.username}`
                      : '/'
                  }
                  passHref
                >
                  <Logo>
                    <Image
                      src={'/logo.png'}
                      alt="talentkids logo"
                      width={200}
                      height={45.69}
                    />
                  </Logo>
                </Link>
              </LogoBlock>
              <ToggleBar
                onMouseDown={() => setToggle(!toggle)}
                aria-label="toggle button"
              >
                <span></span>
                <span></span>
                <span></span>
              </ToggleBar>
              <NavbarCollapse className={`${toggle ? 'opened' : ''}`}>
                <NavBarNav ref={sidebarRef}>
                  <NavBarItem onClick={() => setToggle(!toggle)}>
                    <Link href={'/'}>Home</Link>
                  </NavBarItem>
                  {/* <NavBarItem><Link href={'/'}>About Us</Link></NavBarItem> */}
                  <NavBarItem onClick={() => setToggle(!toggle)}>
                    <Link href={'/events'}>Events</Link>
                  </NavBarItem>
                  <NavBarItem onClick={() => setToggle(!toggle)}>
                    <Link href={'/activities'}>Activities</Link>
                  </NavBarItem>
                  <NavBarItem onClick={() => setToggle(!toggle)}>
                    <Link href={'/articles'}>Articles</Link>
                  </NavBarItem>
                  {user?.id && (
                    <>
                      <ProfileSetting ref={dropdownRef}>
                        <ProfileImg
                          onClick={() => setDropdown(!dropdown)}
                          alt="user profile image"
                          src={user?.avatar || user?.logo}
                        />
                        <ProfileDropdown
                          className={`${dropdown ? 'opened' : ''}`}
                          onClick={() => setDropdown(!dropdown)}
                        >
                          {/* <ProfileItem>
                                            <Link href={`/user-profile/${user?.username}`}>Setting</Link>
                                        </ProfileItem> */}
                          <ProfileItem>
                            <Link href={`/user-profile/${'user?.username'}`}>
                              Profile
                            </Link>
                          </ProfileItem>
                          <ProfileItem>
                            <Link
                              href={`/user-profile/${'user?.username'}/edit-profile`}
                            >
                              Edit Profile
                            </Link>
                          </ProfileItem>
                          <ProfileItem>
                            <Link href="/privacy">Privacy settings</Link>
                          </ProfileItem>
                          <ProfileItem>
                            <Link href="/terms">Modal</Link>
                          </ProfileItem>
                          <ProfileItem>
                            <a onClick={handleLogOut}>Logout</a>
                          </ProfileItem>
                        </ProfileDropdown>
                      </ProfileSetting>
                    </>
                  )}
                </NavBarNav>
              </NavbarCollapse>
              {!user?.id && (
                <>
                  <NavBarItem className="signup" onClick={() => handleModal()}>
                    <button >Get Started</button>
                  </NavBarItem>
                </>
              )}
            </NavBarHeader>
          </InnerContainer>
        </SiteHeader>
      </>
    );
}