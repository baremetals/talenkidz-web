import React, { useState } from 'react'
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
    PostTopRightWrap,
    PostCenterWrap,
    PostBottomWrapper,
    PostDropdown,
    PostMedia,
    PostTextWrapper,
    PostStatsWrapper,
    PostStatsReactions,
    PostStatsCommentsShare,
    PostActionsWrapper,
    PostAction
} from './profile.styles';

import {
    Text,
    Widget,
    DropdownMenu,
    DropdownMenuItem,
    Column
} from 'styles/common.styles';

import { Edit } from '../../../public/assets/icons/Edit'
import { Delete } from '../../../public/assets/icons/Delete'
import { Union } from '../../../public/assets/icons/Union'
import { HotLike } from '../../../public/assets/icons/HotLike'
import { CommentPost } from '../../../public/assets/icons/CommentPost'
import { Shortcut } from '../../../public/assets/icons/Shortcut'

type cardProps = {
    avatar: string
    username: string
    body: string
    createdAt: string
    content?: string
}

export const Card = ({ avatar, username, body, createdAt, content}: cardProps) => {
    const [dropdown, setDropdown] = useState(false)
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

              <PostCenterWrap>
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
                        <span>Joe Saap and 40 others</span>
                    </PostStatsReactions>
                    <PostStatsCommentsShare>
                        <span>1 comment</span>
                        <span>1 share</span>
                    </PostStatsCommentsShare>
                </PostStatsWrapper>

                <PostActionsWrapper>
                    <Column className='py-0'>
                        <PostAction>
                            <HotLike />
                            Like
                        </PostAction>
                    </Column>
                    <Column className='py-0'>
                        <PostAction>
                            <CommentPost />
                            Comment
                        </PostAction>
                    </Column>
                    <Column className='py-0'>
                        <PostAction>
                            <Shortcut />
                            Share
                        </PostAction>
                    </Column>
                </PostActionsWrapper>
              </PostBottomWrapper>
          </Widget>
    </>
  )
}

