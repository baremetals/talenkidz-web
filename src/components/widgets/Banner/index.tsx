
import { BannerBlock, BannerImg,BannerInfo,SerchBlock } from './styles';
import Search from 'components/widgets/Search';
import Image from 'next/image';

const Banner = () => {
  return (
    <BannerBlock>
        <BannerImg>
          <Image
              src={'/assets/images/banner.png'}
              alt="article image"
              width={1170}
              height={601}
            />
      </BannerImg>
      <BannerInfo>
        <h2>DIVE INTO THE ATMOSPHERE OF OUR EVENTS</h2>
        <SerchBlock>
          <Search placeholder={'Search events that may be interesting for you and your child '} />
        </SerchBlock>
      </BannerInfo>
    </BannerBlock>
  );
};

export default Banner;
