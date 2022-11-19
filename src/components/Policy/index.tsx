import React, { useState } from 'react'
import axios from 'axios';
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

// type formProps = {
//     functional: string;
//     necessary: string;
//     marketing: string;
//     statistical: string;
//     unclassified: string;
// }

function PolicyPopUp({ privacyPolicy }: policy) {

    const [policy, setPolicy] = useState(privacyPolicy);
    const [marketing, setMarketing] = useState<boolean>(false);
    const [statistical, setStatistical] = useState<boolean>(false);
    const [unclassified, setUnclassified] = useState<boolean>(false);
    const policyOptions = [
        // 'Functional',
        // 'Strictly necessary',
        'Marketing',
        'Statistical',
        'Unclassified'
    ]
    // console.log('unclassified: ', unclassified)
    // console.log('marketing: ', marketing)

    // const onChange = () => {

    // }

    const handleChange = async () => {
    
        let policyChoice = 
            {
                Functional: 'yes',
                Strictly_necessary: 'yes',
                Marketing: marketing ? 'yes' : 'no',
                Statistical: statistical ? 'yes' : 'no',
                Unclassified: unclassified? 'yes' : 'no',
            }
    
        // console.log(policyChoice)

        await axios
            .post('/api/policy', { data: { policyChoice, flag: 'setCookie' } })
            .then((res) => {
                // console.log(res);
                if (res?.data?.name === 'done') {
                    setPolicy(false)
                    setManageSetting(false)
                }
            })
            .catch((err) => {
                console.log('I am failing for some reason', err);
            });
        // return setPrivacyPolicy(!privacyPolicy);
    };

    const [manageSetting, setManageSetting] = useState(false);
    const handleManageSetting = () => {
        setManageSetting(!manageSetting);
        setPolicy(!policy)
    };

    const [isActive, setActive] = useState < number | null >(0);
    
    const toggleSetting = (index: any) => {
        if(isActive === index) {
            setActive(null)
            return
        }
        setActive(index)

    }

    return (
        <>
            <Modal showModal={policy} style={{ textAlign: 'center' }} className="modal-style" id="policy-modal">
                <Title style={{ fontSize: '2rem' }}>Talentkids Cookie Consent</Title>
                <div className='minh'>
                    <Text>We use cookies to ensure you have the best experience on our site, to analyse traffic, and enhance our marketing activities. <Link href="/privacy"><a target='_blank'>Learn more</a></Link>.</Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <Button style={{ width: '15rem', borderRadius: '8px' }} onClick={() => handleManageSetting()}>Manage Setting</Button>
                    <Button style={{ width: '12rem', borderRadius: '8px' }} onClick={() => handleChange()}>Accept All</Button>
                </div>
            </Modal>

            <Modal showModal={manageSetting} style={{ textAlign: 'center' }} className="modal-style">
                <Title style={{ fontSize: '2rem' }}>Manage Setting</Title>
                    <div className='minh'>

                        {consentData.map((set, i) => (
                            <SwitchBox key={i} style={{flexDirection: 'column'}}>
                                <div style={{'display': 'flex', 'width':'100%'}}>
                                    <Text style={{ color: '#000' }}>{set.title}</Text>
                                    <Switch>
                                        <Input type={'checkbox'} id={set.title}
                                            onChange={() => {
                                                // console.log(e.target.value);
                                                
                                                let policy
                                                const policyTitle = document.getElementById(set.title);
                                                // console.log(policyTitle?.id);
                                                policy = policyTitle?.id
                                                switch (policyOptions.includes(policy as string)) {
                                                    case policy === "Marketing":
                                                        // console.log(`its the ${policy} policy`)
                                                        setMarketing(!marketing)
                                                        break;
                                                    case policy === "Statistical":
                                                        // console.log(`its the ${policy} policy`)
                                                        setStatistical(!statistical)
                                                        break;
                                                    case policy === "Unclassified":
                                                        // console.log(`its the ${policy} policy`, unclassified)
                                                        setUnclassified(!unclassified)
                                                        // console.log(`latest: `, unclassified)
                                                        break;
                                                    default:
                                                    // code block
                                                }
                                            }} 
                                            // value={set.consent ? 'yes' : 'no'}
                                            checked={set.checked && set.checked}                                    
                                        ></Input>
                                        <LabelText htmlFor={set.title}>Consent </LabelText>
                                        <Button onClick={ () => toggleSetting(i)} className="toggle-button">{'>'}</Button>
                                    </Switch>
                                </div>
                                {i === isActive && <Text style={{ color: '#000', width: '100%', fontSize: '.875rem', marginTop: '1rem' }}>{set.description}</Text>}
                                {/* <Switch>
                            <Input type={'checkbox'} id='LegitimateInterest'></Input>
                            <LabelText htmlFor='LegitimateInterest'>Legitimate Interest</LabelText>
                        </Switch> */}
                            </SwitchBox>
                        ))}

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        <Button style={{ width: '12rem', borderRadius: '8px' }} onClick={() => handleManageSetting()}>Go Back</Button>
                    <Button style={{ width: '12rem', borderRadius: '8px' }} onClick={() => handleChange()}>Accept All</Button>
                    </div>             
            </Modal>
        </>
    )
}
export default PolicyPopUp

