import TextareaAutosize from 'react-textarea-autosize';
import styled from "styled-components"

export const Dashboard = styled.div``;

export const ProfileCoverImage = styled.img`
    border-radius: 0;
    height: 18.75rem;
    width: 100%;
    object-fit: cover;
    object-position: top center;
`;

export const UserProfileImage = styled.img`
    border: 3px solid #FFF;
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: center center;
    margin-right: 2.1875rem;
    margin-top: -3.5rem;
    @media (min-width: 991px) {
        margin-left: 0.625rem;
    }
    @media (max-width: 767px) {
        width: 150px;
        height: 150px;
        margin-bottom: 1rem;
        margin-right: 0;
    }
`;

export const ProfileInfo = styled.div`
    background-color: #FFF;
    box-shadow: 0 .25rem .625rem rgba(0,0,0,.08);
    border-radius: .625rem;
    position: relative;
    margin-bottom: 2.5rem;
    margin-top: 2rem;
    display: flex;
    box-shadow: 0 4px 10px rgb(0 0 0 / 8%);
    margin-top: -4rem;
    padding: 1.875rem 2.5rem;
    @media (max-width: 991px) {
        padding: 1.25rem;
        flex-wrap: wrap;
    }
    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const ProfileActions = styled.div`
    text-align: right;

    @media (max-width: 991px) {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;
    }
    @media (max-width: 767px) {
        flex-direction: column;
        gap: 0.75rem;
    }
`

export const ProfileBasicInfo = styled.div`
    flex: 1;
    @media (max-width: 767px) {
        text-align: center;
    }
`

export const UsernameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1875rem;
    margin-bottom: 0.125rem;
`;

export const Username = styled.div`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1;
`

export const UserDescription = styled.div``;

export const ProfileButtons = styled.div`
    margin-bottom: 1.875rem;
    @media (max-width: 991px) {
        margin-bottom: 0;
        display: flex;
        justify-content: space-between;
    }
`;

export const FollowButton = styled.button`
    background-color: #BC70AD;
    color: #fff;
    font-size: 1rem;
    border: 0.0625rem solid transparent;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 0.9375rem 1.9531rem;
    gap: 0.625rem;
    border-radius: 6.25rem;
    line-height: 1;
    font-weight: 400;
    transition: all 0.2s ease-in-out;

    @media (max-width: 991px) {
        font-size: .875rem;
        padding: .75rem 1.5rem;
    }
    &:hover {
        background-color: #333;
        color: #FFF;
    }
`;

export const SendButton = styled(FollowButton)`
    color: #000;
    border: none;
    background-color: transparent;

    &:hover {
        background-color: transparent;
        color: #000;
        opacity: 0.6;
    }
`;

export const ActiveUsers = styled.div`
    display: flex;
    justify-content: end;
    img {
        width: 3.125rem;
        height: 3.125rem;
        border: 3px solid #fff;
        border-radius: 100%;
        margin-left: -1rem;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
        object-fit: cover;
        object-position: center center;
    }
`;

export const Image = styled.img``;

export const ActiveUsersCounter = styled.div`
    width: 3.125rem;
    height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #fff;
    border-radius: 100%;
    background-color: rgba(16, 55, 65, 0.7);
    margin-left: -1rem;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.1));
    color: #fff;
    letter-spacing: 0.02em;
    line-height: 1;
    font-weight: 600;
`;

export const ProfileContent = styled.div``;

export const ShareContainer = styled.div`
    box-shadow: 0 0 10px rgb(0 0 0 / 8%);
    border-radius: .375rem;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.875rem;
`;

export const ShareWrapper = styled.div`
    padding: 0;
`;

export const ShareTop = styled.div`
    display: flex;
    padding: 1.5625rem 1.875rem;
    align-items: flex-start;
    @media (max-width: 991px) {
        padding: 1.25rem;
    }
`;

export const ProfileImage = styled.img`
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 10rem;
    object-fit: cover;
    margin-right: 1.375rem;

    @media (max-width: 991px) {
        width: 2.25rem;
        height: 2.25rem;
        margin-right: 0.5rem;
    }
`;

export const InputLabel = styled.label`
    font-size: .875rem;
    font-weight: 500;
`;

export const Input = styled.input`
    border: none;
    flex: auto;
    background-color: transparent;
    padding: .5rem;
    &:focus {
        outline: none;
    }
`;

export const TextArea = styled(TextareaAutosize)`
    border: none;
    flex: auto;
    background-color: transparent;
    padding: .5rem;
    resize: none;
    align-self: center;
    &:focus {
        outline: none;
        box-shadow: none;
    }

    @media (max-width: 991px) {
        font-size: .875rem;
    }
`;

export const Body = styled.select`
    border: none;
    width: 80%;
    &:focus {
        outline: none;
    }
`;

export const SelectOptions = styled.option`
    border: none;
    width: 80%;
    &:focus {
        outline: none;
    }
`;

export const ShareHr = styled.hr`
    margin: 0;
    opacity: .2;
`;

export const ShareBottomWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 1.875rem;
    @media (max-width: 991px) {
        padding: 1.25rem;
    }
`;

export const ShareOptions = styled.div`
    display: flex;
    transition: 0.2s;
    &:hover {
        opacity: 0.6;
    }
`;

export const ShareOptionItem = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ShareOptionsIcon = styled.label`
    font-size: 1rem;
    margin-right: 0.75rem;
    @media (max-width: 991px) {
        font-size: .75rem;
        margin-right: .25rem;
    }
    svg {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        @media (max-width: 991px) {
            width: 1rem;
            height: 1rem;
        }
    }
`;

export const ShareOptionstext = styled.span`
    font-size: 1rem;
    @media (max-width: 991px) {
        font-size: .75rem;
    }
`;

export const ShareButton = styled.button`
    border: none;
    background-color: #BC70AD;
    color: white;
    font-weight: 500;
    border-radius: 10rem;
    cursor: pointer;
    font-size: 1rem;
    text-transform: capitalize;
    padding: .375rem 2rem;
    line-height: 1.5;
    transition: 0.2s;
    @media (max-width: 991px) {
        font-size: .75rem;
        padding: .25rem 1rem;
    }
`;

export const ViewMore = styled.button`
    background-color: transparent;
    color: #7755E2;
    font-size: .875rem;
    border-radius: .25rem;
    padding: 0;
    border: none;
    cursor: pointer;
    line-height: 1;
    text-transform: uppercase;
    font-weight: 600;
`;

export const PostDropdown = styled.div`
    position: relative;
    .DropDownIcon {
        cursor: pointer;
        svg {
            transition: 0.2s;
            display: block;
        }
        &:hover svg {
            fill: #BC70AD;
        }
    }
`;

export const LikeGroup = styled.div`
    display: flex;
    align-items: center;
`;

export const PostTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const PostLeftWrap = styled.div`
    display: flex;
    align-items: flex-end;
    img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 10rem;
        margin-right: 1rem;
    }
`;

export const PostDate = styled.span`
    font-size: 0.8125rem;
    line-height: 1;
    letter-spacing: 0.025em;
    color: #66676B;
`;

export const PostTopRightWrap = styled.div``;

export const PostCenterWrap = styled.div``;

export const PostMedia = styled.div`
    width: calc(100% + 60px);
    margin: 0 -30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PostTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const PostTextWrapper = styled.div`
    font-size: .875rem;
    line-height: 1.3125rem;
    margin-bottom: 2.25rem;
`;

export const PostMediaImage = styled.img`
    margin-top: 1rem;
    width: 100%;
    max-height: 31.25rem;
    object-fit: contain;
    display: block;
`;

export const PostMediaVideo = styled.video`
    margin-top: 1rem;
    width: 100%;
    max-height: 31.25rem;
    object-fit: contain;
    display: block;
`;

export const PostBottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1.875rem;
`;

export const BottomLeftWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const LikeCounter = styled.span`
    margin-left: .5rem;
`;

export const ViewCounter = styled.span``;

export const BottomRightWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const PhotoGallery = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8125rem;
    img {
        border-radius: 0.625rem;
        width: 6rem;
        height: 6rem;
        object-fit: cover;
        object-position: center center;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
            opacity: 0.8;
        }
    }
`

export const VideoGallery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        object-position: center center;
        border-radius: 0.625rem;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
            opacity: 0.8;
        }

        @media (max-width: 991px) {
            width: calc(50% - 1.5rem);
            flex: 1;
        }
    }

    @media (max-width: 991px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export const PostStatsWrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    width: 100%;
    span {
        font-size: 15px;
        line-height: 22px;
        color: #66676B;
        cursor: pointer;
        transition: 0.2s;

        @media (max-width: 991px) {
            font-size: .875rem;
        }

        &:hover {
            color: #333;
        }
    }
`

export const PostStatsReactions = styled.div`
    display: flex;
    align-items: center;
`

export const PostStatsCommentsShare = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.875rem;
`

export const PostActionsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 1.25rem;
    border-top: 0.0625rem solid #CFD0D4;
    margin-top: 1.25rem;
`

export const PostAction = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    color: #66676B;
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1.375rem;
    transition: 0.2s;
    cursor: pointer;
    flex: 1;
    position: relative;

    & > div {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
    }

    @media (max-width: 991px) {
        font-size: .875rem;
    }

    svg {
        @media (max-width: 991px) {
            width: 1rem;
        }
    }

    &:hover {
        color: #BC70AD;

        svg {
            path {
                stroke: #BC70AD;
            }
        }
    }
`

export const GivenReactionsWrapper = styled.div`
    margin-right: 0.9375rem;
    display: flex;
`
