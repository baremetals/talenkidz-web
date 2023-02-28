import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { InnerContainer, Logo } from 'styles/common.styles';

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
  const { pathname } = useRouter();
  const { logUserOut, user } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const sidebarRef = useRef<any>(null);
  const dropdownRef = useRef<any>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        if (toggle) setToggle(false);
      }

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
    () => dispatch(openModal('REGISTER_FORM')),
    [dispatch]
  );

  const handleNavBar = useCallback(() => setToggle(!toggle), [toggle]);

  return (
    <>
      <SiteHeader>
        <InnerContainer>
          <NavBarHeader>
            <LogoBlock>
              <Link href={user?.id ? '/account' : '/'} passHref>
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
            <NavbarCollapse className={`${toggle ? 'opened' : ''}`}>
              <NavBarNav ref={sidebarRef}>
                <NavBarItem
                  className={`${pathname === '/' && 'active'}`}
                  onClick={handleNavBar}
                >
                  <Link href={user?.id ? '/account' : '/'}>Home</Link>
                </NavBarItem>
                {/* <NavBarItem><Link href={'/'}>About Us</Link></NavBarItem> */}
                <NavBarItem
                  className={`${pathname === '/events' && 'active'}`}
                  onClick={handleNavBar}
                >
                  <Link href={'/events'}>Events</Link>
                </NavBarItem>
                <NavBarItem
                  className={`${pathname === '/activities' && 'active'}`}
                  onClick={handleNavBar}
                >
                  <Link href={'/activities'}>Activities</Link>
                </NavBarItem>
                <NavBarItem
                  className={`${pathname === '/articles' && 'active'}`}
                  onClick={handleNavBar}
                >
                  <Link href={'/articles'}>Articles</Link>
                </NavBarItem>
                {user?.id && user?.membership === 'premium' && (
                  <NavBarItem
                    className={`${pathname === '/resources' && 'active'}`}
                    onClick={handleNavBar}
                  >
                    <Link href={'/resources'}>Resources</Link>
                  </NavBarItem>
                )}

                <NavBarItem
                  className="signup mobileButton"
                  onClick={() => handleModal()}
                >
                  <button>Connect</button>
                </NavBarItem>
              </NavBarNav>
            </NavbarCollapse>
            <>
              <div className="rightHeder">
                <ToggleBar
                  onMouseDown={handleNavBar}
                  aria-label="toggle button"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </ToggleBar>
                {user?.id && (
                  <>
                    <ProfileSetting className="userBlock" ref={dropdownRef}>
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
                          <Link href={`/account/`}>Profile</Link>
                        </ProfileItem>
                        <ProfileItem>
                          <Link href={`/account/membership-status`}>Membership</Link>
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
                  </>
                )}
              </div>
            </>
            {!user?.id && (
              <>
                <NavBarItem className="signup" onClick={() => handleModal()}>
                  <button>Connect</button>
                </NavBarItem>
              </>
            )}
          </NavBarHeader>
        </InnerContainer>
      </SiteHeader>
    </>
  );
}
