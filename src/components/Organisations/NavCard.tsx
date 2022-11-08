import React, { useState } from 'react'

import {
    ShareContainer,
    ShareWrapper,
    ShareTop,
    ProfileImage,
    ShareHr,
    ShareBottomWrap,
    ShareOptions,
    ShareOptionItem,
    ShareOptionsIcon,
    ShareOptionstext,
    ShareButton,
    Input
} from '../ProfilePage/profile.styles';
import { Card } from './Card';

import { PhotoLine } from '../../../public/assets/icons/PhotoLine'
import { VideoLine } from '../../../public/assets/icons/VideoLine'
import { CommentLines } from '../../../public/assets/icons/CommentLines'

type cardProps = {
    tab: string
}

export const NavCard = ({ tab }: cardProps) => {
    const [_navTabs, setNavTabs] = useState('activity')
    return (
        <>
        <ShareContainer>
            <ShareWrapper>
                <ShareTop>
                    {/* <ProfileImage src={avatar} alt="user profile image" /> */}
                    {/* <Input placeholder={`what's on your mind ?`} /> */}
                </ShareTop>
                <ShareHr />

                <ShareBottomWrap>
                    <ShareOptions >
                        <ShareOptionItem onClick={() => setNavTabs('activity')}>
                            <ShareOptionsIcon>
                                <PhotoLine />
                            </ShareOptionsIcon>
                            <ShareOptionstext>Activity</ShareOptionstext>
                        </ShareOptionItem>
                    </ShareOptions>

                    <ShareOptions >
                        <ShareOptionItem onClick={() => setNavTabs('event')}>
                            <ShareOptionsIcon>
                                <VideoLine />
                            </ShareOptionsIcon>
                            <ShareOptionstext>Event</ShareOptionstext>
                        </ShareOptionItem>
                    </ShareOptions>

                    <ShareOptions >
                        <ShareOptionItem onClick={() => setNavTabs('test')}>
                            <ShareOptionsIcon>
                                <CommentLines />
                            </ShareOptionsIcon>
                            <ShareOptionstext>About</ShareOptionstext>
                        </ShareOptionItem>
                    </ShareOptions>

                    <ShareButton >create</ShareButton>
                </ShareBottomWrap>
            </ShareWrapper>
        </ShareContainer>
        {/* <Card avatar='' username='{user?.username as string}' body={''} createdAt={''} content={''} id={''} slug={''} title={''} category={''} colour={''} type={''} children={undefined} /> */}
        </>
    )
}

