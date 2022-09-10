import React, { useState, BaseSyntheticEvent, SetStateAction, ChangeEvent } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import { Organisation, UsersPermissionsUser } from 'generated/graphql';

import {
    EditProfileTab,
    HeaderLine,
    PersonalInformationForm,
    FormItem,
    FormGroup,
    SubmitButton,
    CoverPictureUploaderWrapper,
    Image,
    Label,
    CoverPictureWrapper,
    ImageActions,
    ActionButton,
    NoCoverPictureWrapper,
    SelectCoverPictureButton,
    EditButton
} from './editProfile.styles';

import { BsCloudArrowUp, BsTrash } from 'react-icons/bs';
import { Edit } from '../../../public/assets/icons/Edit';
import { toBase64 } from './utils';

type Props = {
    user: Organisation
}

const OrgProfile = ({ user }: Props) => {
    const [orgName, setOrgName] = useState<string>(user?.name as string);
    const [username, setUsername] = useState<string>(user?.slug as string);
    const [email, setEmail] = useState<string>(user?.profile?.data?.attributes?.email as string);
    const [website, setWebsite] = useState<string>(user?.website as string);
    const [organisationType, setOrganisationType] = useState<string>(user?.organisationType as string);
    const [bio, setBio] = useState<string>(user?.bio as string);
    const [backgroundImg, setBackgroundImg] = useState<any>(user.profile?.data?.attributes?.backgroundImg);

    const handleImgChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const base64 = await toBase64(event.target.files[0]);
        setBackgroundImg(base64);
    }

    // console.log(user)
    const handleSubmit = (event: BaseSyntheticEvent) => {
        event.preventDefault();
        const data = {
            orgName,
            username,
            organisationType,
            bio,
            website
        }

        console.log('data', data)
    }

    return (
        <>
            <EditProfileTab>
                <h3>Personal Information</h3>
                <HeaderLine />
                <PersonalInformationForm onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Organisation Name"
                        variant="outlined"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                    />
                    <FormGroup>
                        <FormItem>
                            <TextField
                                fullWidth
                                label="Username"
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <TextField
                                fullWidth
                                label="organisationType"
                                variant="outlined"
                                value={organisationType}
                                onChange={(e) => setOrganisationType(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <TextField
                                fullWidth
                                label="Website"
                                variant="outlined"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        </FormItem>
                        {/* <FormItem>
                            <FormControl fullWidth>
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    labelId="gender-select-label"
                                    value={user.gender}
                                    label="Gender"
                                    onChange={(e) => setGender(e.target.value as SetStateAction<string>)}
                                >
                                    <MenuItem value={'M'}>Male</MenuItem>
                                    <MenuItem value={'F'}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </FormItem> */}
                        {/* <FormItem>
                            <FormControl fullWidth>
                                <InputLabel>Pronoun</InputLabel>
                                <Select
                                    labelId="pronoun-select-label"
                                    value={user.pronoun}
                                    label="Pronoun"
                                    onChange={(e) => setPronoun(e.target.value as SetStateAction<string>)}
                                >
                                    <MenuItem value={'Mr'}>Mr.</MenuItem>
                                    <MenuItem value={'Mrs'}>Mrs</MenuItem>
                                    <MenuItem value={'Miss'}>Mrs</MenuItem>
                                    <MenuItem value={'Ms'}>Ms</MenuItem>
                                    <MenuItem value={'Sir'}>Sir</MenuItem>
                                </Select>
                            </FormControl>
                        </FormItem> */}
                    </FormGroup>
                    <CoverPictureUploaderWrapper>
                        <Label>Cover Picture</Label>
                        <TextField
                            style={{ display: 'none' }}
                            fullWidth
                            type="file"
                        />
                        {backgroundImg ? (
                            <>
                                <CoverPictureWrapper>
                                    <div className="overlay"></div>
                                    <Image src={backgroundImg} alt="User cover picture" />
                                    <ImageActions>
                                        <ActionButton>
                                        <EditButton htmlFor="upload-bg-photo">
                                            <input
                                            style={{ display: "none" }}
                                            id="upload-bg-photo"
                                            name="upload-bg-photo"
                                            type="file"
                                            onChange={(e) => handleImgChange(e)}
                                            />
                                            <Edit />
                                        </EditButton>
                                        </ActionButton>
                                        <ActionButton>
                                            <BsTrash />
                                        </ActionButton>
                                    </ImageActions>
                                </CoverPictureWrapper>
                            </>
                        ) : (
                            <NoCoverPictureWrapper>
                                <SelectCoverPictureButton>
                                    <BsCloudArrowUp />
                                    Select a cover picture
                                </SelectCoverPictureButton>
                            </NoCoverPictureWrapper>
                        )}
                    </CoverPictureUploaderWrapper>
                    <TextField
                        label="Bio"
                        multiline
                        fullWidth
                        rows={4}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                    <SubmitButton>Save Changes</SubmitButton>
                </PersonalInformationForm>
            </EditProfileTab>
        </>
    );
};

export default OrgProfile;
