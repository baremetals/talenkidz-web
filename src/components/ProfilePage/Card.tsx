import React, { useState } from 'react'
import * as Reactions from '@charkour/react-reactions';
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
    PostAction,
    GivenReactionsWrapper
} from './profile.styles';

import {
    Text,
    Widget,
    DropdownMenu,
    DropdownMenuItem,
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
  const [dropdown, setDropdown] = useState(false);
  const [showReactionPicker, setShowReactionPicker] = useState(false);

  const onLikeMouseOver = () => {
    setShowReactionPicker(true);
  }

  const onLikeMouseLeave = () => {
    setShowReactionPicker(false);
  }

  const renderReactionIcons = () => {
    return ['like', 'love', 'haha', 'wow', 'sad', 'angry'].map((emoji, index) => {
      const emojiB64 = Reactions.icons.find('facebook', emoji);
      return <Image key={index} width={18} height={18} alt={emoji} src={emojiB64} />
    })
  }

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
              <GivenReactionsWrapper>
                { renderReactionIcons() }
              </GivenReactionsWrapper>
              <span>Joe Saap and 40 others</span>
            </PostStatsReactions>
            <PostStatsCommentsShare>
              <span>1 comment</span>
              <span>1 share</span>
            </PostStatsCommentsShare>
          </PostStatsWrapper>

          <PostActionsWrapper>
            <PostAction onMouseOver={onLikeMouseOver} onMouseLeave={onLikeMouseLeave}>
              { showReactionPicker && <Reactions.FacebookSelector iconSize={28} /> }
              <HotLike />
              Like
            </PostAction>
            <PostAction>
              <CommentPost />
              Comment
            </PostAction>
            <PostAction>
              <Shortcut />
              Share
            </PostAction>
          </PostActionsWrapper>
        </PostBottomWrapper>
      </Widget>
    </>
  )
}

