
import { BannerBlock, BannerImg,BannerInfo,SerchBlock } from './styles';
import Search from 'components/widgets/Search';
import Image from 'next/image';

const Banner = ({ src,text, ...props }: any) => {
  return (
    <BannerBlock {...props}>
        <BannerImg>
          <Image
              src={src}
              alt="article image"
              width={1170}
              height={601}
            />
      </BannerImg>
      <BannerInfo>
        <h2>{text}</h2>
        <SerchBlock>
          <Search placeholder={'Search events that may be interesting for you and your child '} />
        </SerchBlock>
      </BannerInfo>
    </BannerBlock>
  );
};

export default Banner;
