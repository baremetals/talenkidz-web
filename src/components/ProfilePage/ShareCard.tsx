import React from 'react'

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
} from './profile.styles';

import { PhotoLine } from '../../../public/assets/icons/PhotoLine'
import { VideoLine } from '../../../public/assets/icons/VideoLine'
import { CommentLines } from '../../../public/assets/icons/CommentLines'

type cardProps = {
    avatar: string
}

export const ShareCard = ({ avatar }: cardProps) => {
  return (
    <ShareContainer>
          <ShareWrapper>
              <ShareTop>
                  <ProfileImage src={avatar} alt="user profile image" />
                  <Input placeholder={`what's on your mind ?`} />
              </ShareTop>
              <ShareHr />

              <ShareBottomWrap>
                  <ShareOptions >
                      <ShareOptionItem>
                          <ShareOptionsIcon>
                              <PhotoLine />
                          </ShareOptionsIcon>
                          <ShareOptionstext>Photo</ShareOptionstext>
                      </ShareOptionItem>
                  </ShareOptions>

                  <ShareOptions >
                      <ShareOptionItem>
                          <ShareOptionsIcon>
                              <VideoLine />
                          </ShareOptionsIcon>
                          <ShareOptionstext>Video</ShareOptionstext>
                      </ShareOptionItem>
                  </ShareOptions>

                  <ShareOptions >
                      <ShareOptionItem>
                          <ShareOptionsIcon>
                              <CommentLines />
                          </ShareOptionsIcon>
                          <ShareOptionstext>Text</ShareOptionstext>
                      </ShareOptionItem>
                  </ShareOptions>

                  <ShareButton >send</ShareButton>
              </ShareBottomWrap>
          </ShareWrapper>
      </ShareContainer>
  )
}

