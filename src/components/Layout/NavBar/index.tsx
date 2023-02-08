import React from "react";
// import { AuthContext } from 'src/features/auth/AuthContext';
// import OrgHeader from './OrgHeader';
import UserHeader from './UserHeader';


export default function NavBar() {
    // const router = useRouter();
    // const { user: user } = useAppSelector(isUser);
    // const { user } = useContext(AuthContext);
    // const [dropdown, setDropdown] = useState(false);
    // const [toggle, setToggle] = useState(false)
    // console.log(user)

    return (
      <>
        {/* {user?.userType === 'standard' && <UserHeader />}
            {user?.userType === 'organisation' && <OrgHeader />}
            {!user && <UserHeader />} */}
        <UserHeader />
      </>
    );
}
