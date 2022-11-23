import React, { useState } from 'react'

import Post from 'components/content/Post'
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
    TextArea
} from './profile.styles';

import { PhotoLine } from '../../../../public/assets/icons/PhotoLine'
import { VideoLine } from '../../../../public/assets/icons/VideoLine'
import { CommentLines } from '../../../../public/assets/icons/CommentLines'

type cardProps = {
    avatar: string
}

export const ShareCard = ({ avatar }: cardProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <ShareContainer>
                <ShareWrapper>
                    <ShareTop>
                        <ProfileImage src={avatar} alt="user profile image" />
                        <TextArea rows={1} onClick={() => setShowModal(false)} placeholder={`what's on your mind?`} />
                    </ShareTop>
                    <ShareHr />

                    <ShareBottomWrap>
                        <ShareOptions onClick={() => setShowModal(true)}>
                            <ShareOptionItem>
                                <ShareOptionsIcon>
                                    <PhotoLine />
                                </ShareOptionsIcon>
                                <ShareOptionstext>Photo</ShareOptionstext>
                            </ShareOptionItem>
                        </ShareOptions>

                        <ShareOptions onClick={() => setShowModal(true)}>
                            <ShareOptionItem>
                                <ShareOptionsIcon>
                                    <VideoLine />
                                </ShareOptionsIcon>
                                <ShareOptionstext>Video</ShareOptionstext>
                            </ShareOptionItem>
                        </ShareOptions>

                        <ShareOptions onClick={() => setShowModal(true)}>
                            <ShareOptionItem>
                                <ShareOptionsIcon>
                                    <CommentLines />
                                </ShareOptionsIcon>
                                <ShareOptionstext>Text</ShareOptionstext>
                            </ShareOptionItem>
                        </ShareOptions>

                        <ShareButton onClick={() => setShowModal(true)}>Send</ShareButton>
                    </ShareBottomWrap>
                </ShareWrapper>
            </ShareContainer>
            <Post
                showModal={showModal}
                closeM={() => setShowModal(false)}
                setShowModal={setShowModal}
            />
        </>
    )
}

