import React, { useState } from 'react'
import Link from 'next/link';

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import {
    UserName,
    Image,
    PostTop,
    PostLeftWrap,
    PostDate,
    PostTopRightWrap,
    PostCenterWrap,
    PostBottomWrapper,
    BottomLeftWrap,
    LikeCounter,
    BottomRightWrap,
    PostDropdown,
    LikeGroup,
    ViewMore,
} from '../ProfilePage/profile.styles';

import {
    Text,
    Widget,
    DropdownMenu,
    DropdownMenuItem
} from 'styles/common.styles';

import { Edit } from '../../../public/assets/icons/Edit'
import { Delete } from '../../../public/assets/icons/Delete'
import { Union } from '../../../public/assets/icons/Union'
import { HotLike } from '../../../public/assets/icons/HotLike'

type cardProps = {
    avatar: string
    username: string
    body: string
    createdAt: string
    content?: string
}

export const Card = ({ avatar, username, body, createdAt, content }: cardProps) => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <>
            <Widget>
                <PostTop>
                    <PostLeftWrap>
                        <Image src={avatar} alt="user profile image" />
                        <UserName>
                            {username}
                            <PostDate>{dayjs(createdAt).fromNow()}</PostDate>
                        </UserName>
                    </PostLeftWrap>

                    <PostTopRightWrap>
                        <PostDropdown>
                            <span className="DropDownIcon" onClick={() => setDropdown(!dropdown)}>
                                <Union />
                            </span>
                            <DropdownMenu className={`${dropdown ? "opened" : ""}`}>
                                <Link href={'/'} passHref><DropdownMenuItem><Edit /> Edit</DropdownMenuItem></Link>
                                <Link href={'/'} passHref><DropdownMenuItem><Delete /> Delete</DropdownMenuItem></Link>
                            </DropdownMenu>
                        </PostDropdown>
                    </PostTopRightWrap>
                </PostTop>

                <PostCenterWrap style={{ marginTop: '1.5rem' }}>
                    <Text style={{ fontSize: '.875rem' }}>{body}</Text>
                    <Image src={content} alt="Post image" />
                </PostCenterWrap>

                <PostBottomWrapper>
                    <BottomLeftWrap>
                        <LikeGroup>
                            <HotLike />
                            <LikeCounter>Like</LikeCounter>
                        </LikeGroup>
                    </BottomLeftWrap>
                    <BottomRightWrap>
                        <ViewMore>View more</ViewMore>
                    </BottomRightWrap>
                </PostBottomWrapper>
            </Widget>
        </>
    )
}

