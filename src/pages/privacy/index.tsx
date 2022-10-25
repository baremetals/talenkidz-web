import React from 'react';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import { InnerContainer, PageContainer, Text, Title } from 'styles/common.styles';

const PrivacyPage = () => {
  return <>
    <NavBar />
    <PageContainer style={{backgroundColor: '#f7f7f7'}} className="content">
      <InnerContainer>
        <Title>Privacy policy</Title>
        <Text><strong>At Talent Kids, we take your privacy seriously and treat all the personal data you give us with great care.</strong></Text>
        <Text>Our Privacy Policy explains how we collect, store and use the personal data you give to us. We’ll keep this page updated so that you can be confident when sharing your data with us that it will only be used in accordance with this policy. If you have any questions concerning your personal data and how we look after it or you would like to update how you would prefer to hear from us then please email <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a>. This Privacy Policy applies to the <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a> website and its associated sites.</Text>
        <Text>By giving us your personal information, you agree to the use of it as set out in this policy.</Text>
        
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Who is the controller of your data?</Title>
        <Text>Talent Kids is the controller of your personal data. </Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>When and where do we collect your personal information?</Title>
        <Text>We collect personal information about you when you access information about our services, ask about our activities, request information about a role with us, make a donation to us, register for an event, engage with our social media channels, order products and services, subscribe to receive our monthly e-newsletter or otherwise give us personal information.</Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>What personal data do we process?</Title>
        <Text>We process personal data about you that you give to us when you make a donation, book services from our site, such as your name, addresses, email address, telephone number and payment card details. When you visit our website we also automatically receive your IP address which is a unique identifier for your computer or other device you are using to access our site</Text>
        <Text>If you use your credit or debit card to donate to us, we will ensure that this is done securely and in accordance with the Payment Card Industry Data Security Standard. You can find our more information about PCI DSS here <a href='https://www.pcisecuritystandards.org/security_standards/index.php' target={'_blank'}>https://www.pcisecuritystandards.org/security_standards/index.php</a> .</Text>
        <Text>We do not store your credit or debit card details at all, following the completion of your transaction. All card details and validation codes are securely destroyed once the payment or donation has been processed. Only staff authorized and trained to process payments will be able to see your card details.</Text>
        <Text>We take your privacy seriously and treat all the personal data you give us with great care. We will not sell or swap your details with any other organization, ever, and will keep your details private and secure. This Privacy Policy explains how we collect, store and use the personal data you give to us. We will inform you of any update to our Privacy Policy that will affect you.</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Visitors to our website</Title>
        <Text>When someone visits <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a> we collect standard internet log information and details of visitor behavior patterns in order to provide the best experience we can for users and keep the site up to date and relevant. We will not associate any data gathered from this site with any personal data from any source.</Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Device information</Title>
        <Text>We collect information from or about the computers, phones, or other devices where you access our websites. We may associate the information we collect from your different devices, which helps us provide a consistent user experience.</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Why do we collect data?</Title>
        <Text>Personal data collected and processed by us may be used for the following key purposes:</Text>
        <ul>
          <li>to provide you with the services, support, products or information you have requested</li>
          <li>for administrative purposes (we may need to contact you about a donation you made or an event you have expressed interest in)</li>
          <li>administration/payment of our grants;</li>
          <li>responding to requests for support;</li>
          <li>to analyses and improve the services we offer</li>
          <li>communication about our membership, fundraising and other activities that we think may be of interest to you, including training events; and</li>
          <li>distribution of our e-newsletter</li>
          <li>for internal record keeping, such as the management of feedback or complaints</li>
          <li>where we are required or authorized by law</li>
        </ul>
        <Text>Personal data provided to us will be used for the purposes outlined at the time of collection or registration in accordance with the preferences you express.</Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Where does your personal data come from?</Title>
        <Text>Most of the data we process about you comes from you, for example, information you provide to us online. Some information comes from third parties such as our partners who recommend applicants to funders or share the details of applications.</Text>
        <Text>Other information is gathered during your use of our website (e.g. IP addresses or information obtained via cookies).</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Use of cookies at Talent Kids</Title>
        <Text>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This allows us to recognize that you have used the site before, but will not contain any other personal data. We do this to find out such things as the number of visitors to the various parts of the site. You can read more about how we use and apply cookies <a href="https://www.kids.org.uk/cookies" target={'_blank'}>here</a>. </Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Do you have to provide your personal data?</Title>
        <Text>In most cases, providing your personal data to us is optional, however, in some circumstances if you do not provide it, we will probably not be able to fulfil your expectation, keep you up to date with news or events, subscription materials or e-newsletters, or our website may not work properly for you. For example:</Text>
        <ul>
          <li>if you make a donation or pay for an event on our website, we need details such as your name and address and payment card details to be able to take your payment. If you do not provide your data, we will not be able to process your payment; </li>
          <li>you can turn off cookies on your browser and we will not place any cookies on your device or computer. However, this is likely to mean that you may not be able to use all parts of our website. </li>
        </ul>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>What are the legal grounds for processing your personal data?</Title>
        <Text>Data protection laws require us to tell you what legal basis we use for processing your personal data. These bases are set out in the applicable data protection law.  We generally use the following:</Text>
        <ul>
          <li>the processing is necessary to perform a contract with you (i.e. the contract for the sale and purchase of your subscription or event tickets), or to take steps requested by you before entering into this contract;</li>
          <li>the processing is in Talent Kids or someone else's legitimate interests, and these interests are not overridden by your interests or rights in the protection of your personal data;</li>
          <li>the processing is necessary to meet a legal obligation which applies to Talent Kids;</li>
        </ul>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Who do we share your personal data with?</Title>
        <Text>Personal data collected and processed by us may be shared in the following situations:</Text>
        <ul>
          <li>with Talent Kids employees and volunteers;</li>
          <li>other funders such as relevant funding bodies (from time to time opportunities may arise where we can recommend applicants to other funders, or share details of applications – all applicants are asked if we may share their application details as part of our application process)</li>
          <li>with contractors, agents and other third parties who provide services to us.</li>
        </ul>
        <Text>We use a number of suppliers to process website donations, manage direct debit payments and dispatch our written appeals and e-newsletters. We carefully select our suppliers and ensure that theses suppliers abide by our data processing agreements.</Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Data retention</Title>
        <Text>We will hold your personal information on our systems for as long as is necessary for the relevant activity for which your data was originally obtained. For example, we will keep a record of donations for at least seven years.</Text>
        <Text>If you request that we stop sending you marketing materials, we will keep a record of your contact details and appropriate information to enable us to comply with your request not to be contacted by us.</Text>
        <Text>The nature of our work is such that we may have lifelong relationships with donors, beneficiaries and supporters. Legacy income is vital to the running of the charity. We may keep data you provide to us for a specified length of time, to carry out legacy administration and communicate effectively with the families of people leaving us legacies. This also enables us to identify and analyses the sources of legacy income we receive.</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Security and performance</Title>
        <Text>Talent Kids uses a third party service to help maintain the security and performance of the website and we may share information with this third party where necessary.</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>What are your rights?</Title>
        <Text>You have several rights in relation to your personal data. These include accessing your data, correcting any mistakes, having your data erased, restricting the processing of your data, objecting to the processing of your data, data portability, and rights relating to automated decision making and profiling.  In most cases there are conditions attached to these rights.  Please see below for further information on each of these.</Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Accessing your data</Title>
        <Text>You can ask us to:</Text>
        <ul>
          <li>confirm whether we are processing your personal data;</li>
          <li>give you a copy of that data;</li>
          <li>provide you with other information about your personal data such as what data we have, what we use it for, who we disclose it to, whether we transfer it abroad and how we protect it, how long we keep it for, what rights you have, how you can make a complaint, where we got your data from and whether we carry out any automated decision making or profiling. You do not have to pay a fee for a copy of your information unless your request is unfounded, respective or excessive, in which case we will charge a reasonable amount in the circumstances. We will let you know of any charges before completing your request.</li>
        </ul>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Correcting your data</Title>
        <Text>You can ask us to correct any data which is inaccurate or incomplete. This is free of charge.</Text>
        <Text>If we have shared the data with anyone else, we will tell them about the correction wherever possible.  We aim to deal with requests for correction within 1 month, although it might take us up to 3 months if your request is particularly complicated.</Text>
        <Text>If we can't action a request to correct your data, we will let you know and explain why this is.</Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Erasing your data</Title>

        <Text>This right is sometimes referred to as "the right to be forgotten". This is not an absolute right but you have the right to have your data erased, free of charge, in certain circumstances. </Text>
        <Text>You can ask for your data to be erased where:</Text>
        <ul>
          <li>it is no longer necessary for the purpose for which it was originally collected or processed;</li>
          <li>we are processing your data based on your consent, and you withdraw that consent;</li>
          <li>you object to the processing and we do not have an overriding legitimate interest for continuing;</li>
          <li>your data has been unlawfully processed;</li>
          <li>your data must be erased to comply with a legal obligation;</li>
        </ul>
        <Text>There are some exceptions to this right. If one of these applies, we do not have to delete the data.</Text>
        <Text>If we have shared your data with third parties, we will tell them about the erasure of your data unless this is impossible or would involve disproportionate effort.</Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Restricting the processing of your data</Title>
        <Text>You can ask us to restrict the processing of your personal data in some circumstances, free of charge. This is not an absolute right. If processing is restricted we can store the data and retain enough information to make sure the restriction is respected, but we cannot further process your data.</Text>
        <Text>You can restrict the processing of your personal data in the following cases:</Text>
        <ul>
          <li>if you contest the accuracy of your data, we will restrict processing until we have made sure the data is accurate;</li>
          <li>if you object to our processing and we are considering this objection;</li>
          <li>if the processing is unlawful but you do not want us to erase your data;</li>
          <li>if we no longer need the personal data but you require the data to establish, exercise or defend a legal claim.</li>
        </ul>
        <Text>If we have disclosed the data to a third party, we will inform them about the restriction unless it is impossible or would require a disproportionate effort.  We will tell you if we decide to lift a restriction on processing your data.</Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Objecting to the processing of your data</Title>
        <Text>Objecting to the processing of your data is free of charge. It is not an absolute right but you can object to our processing of your data where it is:</Text>
        <ul>
          <li>based on the legitimate interests ground; </li>
          <li>or for the purposes of scientific/historical research and statistics. </li>
          
        </ul>
        <Text>We will stop processing your personal data unless we have compelling legitimate grounds for the processing which override your interests and rights, or unless we are processing the data for the establishment, exercise or defense of legal claims.</Text>
        <Text>You can require us to stop using your data for direct marketing purposes. We will stop as soon as we receive your request.  There are no exemptions or reasons for us to refuse.</Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Data Portability</Title>
        <Text>This allows you to obtain and reuse your personal data for your own purposes across different services. It applies where the following conditions are met:</Text>
        <ul>
          <li>you provided the personal data to us yourself;</li>
          <li>we are processing the data either based on your consent or because it is necessary for the performance of a contract; </li>
          <li>and the processing is carried out by automated means</li>
        </ul>
        <Text>We will provide your data free of charge in a structured, commonly used and machine readable form.  We aim to provide your data within 1 month of receiving your request unless it is particularly complicated or you have made several requests, in which case we aim to respond within 3 months. If we are going to take longer than 1 month we will let you know and explain why we need more time. If we consider that we cannot provide you with your data, we will contact you and explain why this is. </Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Automated decision making and profiling </Title>
        <Text>You have the right not to be subject to a decision which is based on automated processing and which produces a legal (or similarly significant) effect on you.</Text>
        <Text>We will tell you about any automated decision making that affects you. You have the right to:</Text>
        <ul>
          <li>request human intervention;</li>
          <li>express your point of view;</li>
          <li>ask for the decision to be explained; and</li>
          <li>challenge the decision These rights are not absolute. They do not apply if the decision is: </li>
          <li>necessary for us to enter into or perform a contract with you;</li>
          <li>authorized by law (e.g. for fraud prevention); </li>
          <li>or based on your explicit consent </li>

        </ul>

        <Text>If your personal details change, please help us to keep your information up to date by notifying us.</Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Contact and complaints</Title>
        <Text>If you have any questions about this policy or about how we use your personal data please email <a href="https://talentkids.io/" target={'_blank'}>https://talentkids.io/</a>, or call [mention contact number]</Text>

        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>GDPR</Title>
        <Text>The Parties are committed to respect privacy and to ensure lawful processing of personal data. Each Party shall be individually responsible, as a sole data controller, for its own processing of personal data pursuant to and/or in connection with this Agreement.</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Changes to this policy</Title>
        <Text>We may change or update this policy from time to time so please check this page periodically.</Text>

      </InnerContainer>
    </PageContainer>
    <Footer />
  </>;
};

export default PrivacyPage;

