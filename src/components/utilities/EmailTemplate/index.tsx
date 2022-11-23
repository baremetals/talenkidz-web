import React from "react";
import Link from "next/link";

import {
    PageContainer,
    InnerContainer,
    Inbox,
    InboxContent,
    InboxTitle,
    InboxDes,
    Logo,
    Image,
} from 'styles/common.styles';
import { InboxIcon } from "../../../../public/assets/icons/InboxIcon";


type pageProps = {
    message: string;
};

const EmailTemplate = ({ message }: pageProps) => {

    return (
        <>
            <PageContainer style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
                <InnerContainer>
                    <Link href={'/'} passHref>
                        <Logo>
                            <Image style={{ margin: 'auto' }} src='/logo.png' alt="site logo" />
                        </Logo>
                    </Link>

                    <Inbox style={{ marginTop: '3rem' }}>
                        <InboxContent>
                            <InboxIcon />
                            <InboxTitle>Check your inbox</InboxTitle>
                            <InboxDes>{message}
                                <Link href={'/contact-us'}> Get in touch</Link>
                            </InboxDes>
                        </InboxContent>
                    </Inbox>
                </InnerContainer>
            </PageContainer>
        </>
    );
};

export default EmailTemplate;
