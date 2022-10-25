import React, { useState } from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import Modal from 'components/Modal';

import Button from 'components/Button';
import {
    Title,
    Text,
    Input,
    LabelText,
    SwitchBox,
    Switch,
} from "../../styles/common.styles";
import Link from 'next/link';

type policy = {
    privacyPolicy: boolean;
    // setSettings: boolean;
}

const consentData = [
    {
        id: 1,
        name: 'functional',
        title: 'Functional',
        checked: true,
        consent: true,
        description: `Functional cookies make it possible to save information that changes 
        the way the website appears or acts. For instance your preferred language or region.`,
    },
    {
        id: 1,
        name: 'necessary',
        title: 'Strictly necessary',
        checked: true,
        consent: true,
        description: ` Strictly necessary cookies help make a website navigable by activating basic 
        functions such as page navigation and access to secure website areas. 
        Without these cookies, the website would not be able to work properly.`,
    },
    {
        id: 1,
        name: 'marketing',
        title: 'Marketing',
        consent: false,
        description: `Marketing cookies are used to track visitors across websites. 
        The intention is to display ads that are relevant and interesting to the individual 
        user and thus more valuable for publishers and third-party advertisers.`,
    },
    {
        id: 1,
        name: 'statistical',
        title: 'Statistical',
        consent: false,
        description: `Statistical cookies help the website owner understand how visitors 
        interact with the website by collecting and reporting information.`,
    },
    {
        id: 1,
        name: 'unclassified',
        title: 'Unclassified',
        consent: false,
        description: `We are in the process of classifying unclassified cookies together with the 
        providers of the individual cookies.`,
    },

]

type formProps = {
    functional: string;
    necessary: string;
    marketing: string;
    statistical: string;
    unclassified: string;
}

function PolicyPopUp({ privacyPolicy }: policy) {

    const [policy, setPolicy] = useState(privacyPolicy);
    const [marketing, setMarketing] = useState<boolean>(false);
    // const [marketing, setMarketing] = useState<boolean>(false);
    const [unclassified, setUnclassified] = useState<boolean>(consentData[4].consent);

    const {
        register,
        handleSubmit,
        // label,
        formState: { errors },
    } = useForm();

    const handleChange = async (data) => {
        console.log(data)

        let policyChoice = ['Functional', 'Strictly necessary']

        // await axios
        //     .post('/api/policy', { data: { flag: 'setCookie' } })
        //     .then((res) => {
        //         console.log(res);
        //         // if (!res?.data) {
        //         //   router.replace(`/${router.pathname}`);
        //         // } else {
        //         //   const me = res?.data;
        //         //   // console.log(me);
        //         //   dispatch(setUser(me));
        //         // }
        //     })
        //     .catch((err) => {
        //         console.log('I am failing for some reason', err);
        //     });
        // return setPrivacyPolicy(!privacyPolicy);
    };

    const [manageSetting, setManageSetting] = useState(false);
    const handleManageSetting = () => {
        setManageSetting(!manageSetting);
        setPolicy(!policy)
    };
    return (
        <>
            <Modal showModal={policy} style={{ textAlign: 'center' }}>
                <Title style={{ color: 'white', fontSize: '2rem' }}>Talentkids Cookie Consent</Title>
                <div className='minh'>
                    <Text style={{ color: 'white' }}>We use cookies to ensure you have the best experience on our site, to analyse traffic, and enhance our marketing activities. <Link href="/privacy"><a target='_blank'>Learn more</a></Link>.</Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <Button style={{ width: '15rem', borderRadius: '8px' }} onClick={() => handleManageSetting()}>Manage Setting</Button>
                    <Button style={{ width: '12rem', borderRadius: '8px' }} onClick={() => handleChange('basic')}>Accept All</Button>
                </div>
            </Modal>

            <Modal showModal={manageSetting} style={{ textAlign: 'center' }}>
                <Title style={{ color: 'white', fontSize: '2rem' }}>Manage Setting</Title>
                <form onSubmit={handleSubmit(handleChange)}>
                    <div className='minh'>

                        {consentData.map((set, i) => (
                            <SwitchBox key={i}>
                                <Text>{set.title}</Text>
                                <Switch>
                                    {/* <label>{label}</label> */}
                                    <Input type={'checkbox'} id={set.title}
                                        // onChange={(e) => {
                                        //     console.log(e.target.value);
                                        //     console.log(set.consent);
                                        //     setMarketing(!marketing)
                                        // }} 
                                        value={set.consent ? 'yes' : 'no'}
                                        checked={set.checked && set.checked}
                                        {...register('policy', { required: true })}
                                    ></Input>
                                    <LabelText htmlFor={set.title}>Consent</LabelText>
                                </Switch>
                                {/* <Switch>
                            <Input type={'checkbox'} id='LegitimateInterest'></Input>
                            <LabelText htmlFor='LegitimateInterest'>Legitimate Interest</LabelText>
                        </Switch> */}
                            </SwitchBox>
                        ))}

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        <Button style={{ width: '12rem', borderRadius: '8px' }} onClick={() => handleManageSetting()}>Go Back</Button>
                        <Button style={{ width: '12rem', borderRadius: '8px' }} content="Submit" type="submit">Accept All</Button>
                    </div>
                </form>
            </Modal>
        </>
    )
}
export default PolicyPopUp
