
import { BannerBlock, BannerImg,Icon } from './styles';
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
        <Icon>
           <Image
              src={'/assets/svgs/plusIcon.svg'}
              alt="article image"
              width={27}
              height={29}
            />
        </Icon>
      </BannerImg>
    </BannerBlock>
  );
};

export default Banner;
