import React, { useState } from 'react'
// import * as Reactions from '@charkour/react-reactions';
import Link from 'next/link';

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import {
    UsernameWrapper,
    Username,
    Image,
    PostTop,
    PostLeftWrap,
    PostDate,
    // PostTopRightWrap,
    PostCenterWrap,
    PostBottomWrapper,
    // PostDropdown,
    PostMedia,
    PostTextWrapper,
    PostStatsWrapper,
    PostStatsReactions,
    PostStatsCommentsShare,
    PostActionsWrapper,
    PostAction,
    // GivenReactionsWrapper
} from '../ProfilePage/profile.styles';

import {
    Text,
    Widget,
    // DropdownMenu,
    // DropdownMenuItem,
} from 'styles/common.styles';

// import { Edit } from '../../../public/assets/icons/Edit'
// import { Delete } from '../../../public/assets/icons/Delete'
// import { Union } from '../../../public/assets/icons/Union'
// import { HotLike } from '../../../public/assets/icons/HotLike'
// import { CommentPost } from '../../../public/assets/icons/CommentPost'
import { Shortcut } from '../../../public/assets/icons/Shortcut'
import ShareIcon from 'components/Layout/SocialShare/ShareIcon';
// import { json } from 'node:stream/consumers';

type cardProps = {
    id: string
    avatar: string
    username: string
    body: string
    createdAt: string
    slug: string
    title: string
    category: string
    colour: string
    type: string
    // onClick: Function
    children: React.ReactNode
    content?: string
}

export const Card = ({ id, avatar, username, body, createdAt, slug, title, colour, type, category, children, content }: cardProps) => {
    // const [dropdown, setDropdown] = useState(false);
    const [_showReactionPicker, setShowReactionPicker] = useState(false);
    const [socialDropdown, setSocialDropdown] = useState(false);
    const toggle: any = () => {
        setSocialDropdown(!socialDropdown);
    };

    const onLikeMouseOver = () => {
        setShowReactionPicker(true);
    }

    const onLikeMouseLeave = () => {
        setShowReactionPicker(false);
    }

    // const renderReactionIcons = () => {
    //     return ['like', 'love', 'haha', 'wow', 'sad', 'angry'].map((emoji, index) => {
    //         const emojiB64 = Reactions.icons.find('facebook', emoji);
    //         return <Image key={index} width={18} height={18} alt={emoji} src={emojiB64} />
    //     })
    // }

    return (
        <>
            <Widget>
                <PostTop>
                    <PostLeftWrap>
                        <Image src={avatar} alt="user profile image" />
                        <UsernameWrapper>
                            <Username>{username}</Username>
                            <PostDate>{dayjs(createdAt).fromNow()}</PostDate>
                        </UsernameWrapper>
                    </PostLeftWrap>
                        {children}
                    {/* <PostTopRightWrap>
                        <PostDropdown>
                            <span className="DropDownIcon" onClick={() => setDropdown(!dropdown)}>
                                <Union />
                            </span>
                            <DropdownMenu className={`${dropdown ? "opened" : ""}`}>
                                <Link href={'/'} passHref><DropdownMenuItem><Edit /> Edit</DropdownMenuItem></Link>
                                <DropdownMenuItem onClick={() => removeItem(id, type)}><Delete /> Delete</DropdownMenuItem>
                            </DropdownMenu>
                        </PostDropdown>
                    </PostTopRightWrap> */}
                </PostTop>

                <PostCenterWrap>
                    <button style={{ backgroundColor: `${colour}` }}>{category}</button>
                    <PostTextWrapper>
                        <Text>{body}</Text>
                    </PostTextWrapper>
                    <PostMedia>
                        <Image src={content} alt="Post image" />
                    </PostMedia>
                </PostCenterWrap>

                <PostBottomWrapper>
                    <PostStatsWrapper>
                        <PostStatsReactions>
                            {/* <GivenReactionsWrapper>
                                {renderReactionIcons()}
                            </GivenReactionsWrapper> */}
                            <span>{title}</span>
                        </PostStatsReactions>
                        <PostStatsCommentsShare>
                            <button>{type}</button>
                            <Link passHref href={`/activities/${category}/${slug}`}><span>View {'>'}</span></Link>
                        </PostStatsCommentsShare>
                    </PostStatsWrapper>

                    <PostActionsWrapper>
                        <PostAction onMouseOver={onLikeMouseOver} onMouseLeave={onLikeMouseLeave}>
                            {/* {showReactionPicker && <Reactions.FacebookSelector iconSize={28} />}
                            2
                            <HotLike /> */}

                        </PostAction>
                        <PostAction>
                            {/* 1
                            <CommentPost /> */}
                        </PostAction>
                        <PostAction>
                            <ShareIcon
                                pathname={`/activities/${category}/${slug}`}
                                toggle={toggle}
                                socialDropdown={socialDropdown}
                            >
                                <Shortcut />
                                share
                            </ShareIcon>
                        </PostAction>
                    </PostActionsWrapper>
                </PostBottomWrapper>
            </Widget>
        </>
    )
}

