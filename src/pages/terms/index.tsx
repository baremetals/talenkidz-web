import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';
import { InnerContainer, PageContainer, Text, Title } from 'styles/common.styles';

const TermsPage = () => {
  return <>
    <NavBar />
    <PageContainer style={{backgroundColor: '#f7f7f7'}} className="content">
      <InnerContainer>
        <Title>Terms and Conditions </Title>
        <Text><strong>Please read the following terms and conditions carefully as they govern the use of this website. By using the <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a> website you accept these terms of use as from the date you first access this website. Content</strong></Text>
        <Text>All material contained within the <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a> website is covered by a disclaimer and protected by copyright laws.</Text>
        <Text>Access to this website <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a> is subject to the following conditions</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Content Accuracy</Title>
        <Text>Whilst all reasonable efforts have been made to ensure the accuracy of content, no responsibility can be taken for any error or omission. Talent Kids reserves the right at its sole discretion to discontinue or amend any aspect of this website at any time</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Intellectual Property</Title>
        <Text>Talent Kids owns the copyright of, and other intellectual property rights, in <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a> and its contents. “Rights” means copyright, database rights, trade marks, design rights and other intellectual and proprietary rights of whatever nature, anywhere in the world. You acknowledge that (i) Talent Kids protected by these Rights; (ii) these Rights are valid and protected in all media and technologies existing now or later developed; and (iii) except as explicitly provided otherwise, these Terms and Conditions and applicable copyright, trademark and other laws govern your use of such Rights.</Text>
        <Text>You may view, print, download or store extracts from <a href='www.kids.org.uk' target={'_blank'}>www.kids.org.uk</a> for your personal, non-commercial reference without alteration, addition or deletion.</Text>
        <Text>You may not otherwise copy, replicate, distribute, publish, commercially exploit or otherwise transfer any <a href='www.kids.org.uk' target={'_blank'}>www.kids.org.uk</a> material or content without prior consent.</Text>
        <Text>You may not collect or use any personal details from the <a href='www.kids.org.uk' target={'_blank'}>www.kids.org.uk</a> website.</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Trademarks</Title>
        <Text>The “TALENTKIDS” logo is a trademark. All other trademarks and logos used in this website are the trademarks or logos of their respective owners.</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Limitation of liability (PLEASE READ CAREFULLY)</Title>
        <Text>Talent Kids (and its group of charitable companies, officers, trustees, employees and agents) shall not be liable or responsible for any claim, loss, damage, costs and expenses of any nature (including without limitation for any direct, indirect, incidental, special, punitive, or consequential damages whether resulting from breach of contract, negligence or any other cause of action) arising in connection with <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a> or your use of it (including, without limitation, for any contributions to www.kids.org.uk by users, for any viruses, bugs, Trojan horses or other contamination resulting from use of <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a>, for any interruption or delays to the use of https://talentkids.io/, or for any errors, omissions or inaccuracies in any content on <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a>. Nothing in these terms of use shall exclude or limit any liability for death or personal injury arising from negligence, or for any other liability which cannot be excluded or limited by law.</Text>

        <Text>You agree that you are solely responsible for your use of this site, and that to the fullest extent permitted at law, Talent Kids, its officers, trustees, employees and agents do not make any representations and do not give any warranties, express or implied, concerning <a href='https://talentkids.io/' target={'_blank'}>https://talentkids.io/</a> and its content. In particular, Talent Kids does not warrant or represent that www.directshortbreaks.org.uk or its content is virus free.</Text>
        <Text>All software provided by third parties (for example Acrobat Reader and RealPlayer) is the sole responsibility of that third party.</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Links to other websites</Title>
        <Text>This website contains links to other websites that are operated by third parties. Talent Kids does not accept any liability over the content of these third party sites. Such links are provided for your convenience only and you access these links at your own risk. The existence of these links do not constitute an endorsement of such websites, and your linking to these sites is at your own risk.</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Indemnity</Title>
        <Text>You agree to indemnify Talent Kids (and its group of charitable companies, officers, trustees, employees and agents) from all claims, loss, damages, costs and expenses arising in connection with your use of the <a href='www.kids.org.uk' target={'_blank'}>www.kids.org.uk</a> website, or your breach of any of these terms of use. This obligation shall survive the end of these terms of use and your use of this website.</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Governing Law and Jurisdiction</Title>
        <Text>These terms of use shall be governed by and construed in accordance with English Law and you agree to submit to the exclusive jurisdiction of the English courts. This Site is controlled from within the United Kingdom. KIDS make no representations that this website is appropriate or available to locations outside the United Kingdom. If you access this website from outside the United Kingdom, you do so at your own risk and are responsible for compliance with applicable local laws or regulations.</Text>
        <Text>If any provision of these terms of use is deemed to be invalid by a court of competent jurisdiction, this shall not affect the validity of the remaining provisions, which shall remain in full force and effect.</Text>
        <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Modification of the Terms and Conditions</Title>
        <Text>Talent Kids may modify the terms of this agreement on this site. You agree to periodically review this agreement to be aware of any such revisions. Should the revision be unacceptable to you, you agree to stop accessing this site?</Text>
        <Text><strong>Your continued use of this website following such notification of any such revision(s) shall be deemed as acceptance of and agreement to abide by all such revisions.</strong></Text>

        
        <Text style={{fontSize: '1.25rem', marginBottom: '.75rem', marginTop: '3.5rem' }}>
          Talentkids Ltd <br />
          company number 09851451 <br />
          registered address - 8 Westwood Hill, London SE26 6QR
        </Text>
      </InnerContainer>
    </PageContainer>
    <Footer />
  </>;
};

export default TermsPage;
