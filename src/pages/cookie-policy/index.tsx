import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';
import { InnerContainer, PageContainer, Text, Title } from 'styles/common.styles';

const CookiePolicy = () => {
  return <>
    <NavBar />
    <PageContainer style={{backgroundColor: '#f7f7f7'}} className="content">
      <InnerContainer>
        <Title>How Talent Kids Uses Cookies </Title>
        <Text><strong>Cookies and how they benefit you</strong> Our website uses cookies, as almost all websites do, to help provide you with the best experience we can. Cookies are small text files that are placed on your computer or mobile phone when you browse websites</Text>
        <Text>Our cookies help us:</Text>
        <ul>
          <li>Make our website work as you'd expect</li>
          <li>Remember your settings during and between visits</li>
          <li>Improve the speed/security of the site</li>
          <li>Continuously improve our website for you</li>
          <li>Make our marketing more efficient (ultimately helping us to offer the service we do at the price we do) We do not use cookies to:</li>
          <li>Collect any personally identifiable information (without your express permission)</li>
          <li>Collect any sensitive information (without your express permission)</li>
          <li>Pass data to advertising networks</li>
          <li>Pass personally identifiable data to third parties</li>
          <li>Pay sales commissions</li>
        </ul>
        <Text>You can learn more about all the cookies we use below</Text>
        <Text><strong>Granting us permission to use cookies</strong> If the settings on your software that you are using to view this website (your browser) are adjusted to accept cookies we take this, and your continued use of our website, to mean that you are fine with this. Should you wish to remove or not use cookies from our site you can learn how to do this below, however doing so will likely mean that our site will not work as you would expect.</Text>
        <Text><strong>More about our Cookies</strong></Text>
        <Text><strong>Website Function Cookies</strong></Text>
        <Text><strong>Our own cookies </strong>We use cookies to make our website work including:</Text>
        <Text>Remembering your preferences such as colors, text size and layout There is no way to prevent these cookies being set other than to not use our site. </Text>
        <Title style={{fontSize: '1.25rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Anonymous Visitor Statistics Cookies</Title>
        <Text>We use cookies to compile visitor statistics such as how many people have visited our website, what type of technology they are using (e.g. Mac or Windows which helps to identify when our site isn't working as it should for particular technologies), how long they spend on the site, what page they look at etc. This helps us to continuously improve our website. These so called “analytics” programs also tell us if, on an anonymous basis, how people reached this site (e.g. from a search engine) and whether they have been here before helping us to put more money into developing our services for you instead of marketing spend.</Text>
        <Title style={{fontSize: '1.25rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Compliance with GDPR</Title>
        <Text>The Parties are committed to respect privacy and to ensure lawful processing of personal data. Each Party shall be individually responsible, as a sole data controller, for its own processing of personal data pursuant to and/or in connection with this Agreement.</Text>
        <Title style={{fontSize: '1.25rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Third party cookies</Title>
        <Text>You may notice some cookies that are not related to the Talent Kids website whilst visiting <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a>. Some of our pages contain embedded content such as <a href='https://policies.google.com/privacy?hl=en' target={'_blank'}>YouTube video</a>, <a href='https://www.facebook.com/about/privacy/your-info' target={'_blank'}>Facebook buttons</a> or Flickr, and you may receive cookies delivered from these websites. Talent Kids does not govern the publication of 3rd party cookies. To understand more about their cookies and privacy statements, please visit the relevant sites.</Text>

        <Text><strong>Turning Cookies Off</strong> You can usually switch cookies off by adjusting your browser settings to stop it from accepting cookies</Text>
        <Text>If you are using Microsoft Internet Explorer and you wish to block Talent Kids website cookies, you can perform the following:</Text>
        <ul>
          <li>On your browser tools menu, select 'Internet Options'</li>
          <li>Click on the 'Privacy' tab and then on the 'Sites' button</li>
          <li>Type into the 'Address of website' field:</li>
          <li><a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a></li>
          <li>Click on the 'Block' button</li>
          <li>Click on the OK button</li>
        </ul>
        <Text>Doing so however will likely limit the functionality of ours and a large proportion of the world's websites as cookies are a standard part of most modern websites. If you carry on using our sites and do not change your browser settings, we will assume you consent to us using cookies as described above.</Text>
        <Text>It may be that your concerns around cookies relate to so called "spyware". Rather than switching off cookies in your browser you may find that anti-spyware software achieves the same objective by automatically deleting cookies considered to be invasive. Learn more about <a href='http://www.attacat.co.uk/resources/cookies/how-to-control-your-online-privacy' target={'_blank'}>managing cookies with antispyware software</a>.</Text>
      </InnerContainer>
    </PageContainer>
    <Footer />
  </>;
};

export default CookiePolicy;
