
import { BannerBlock, BannerImg,BannerInfo,SerchBlock } from './styles';
import Image from 'next/image';


type TBannerProps = {
  src: string;
  text: string;
  children: React.ReactNode
}
const Banner: React.FC<TBannerProps> = (
  { src, text, children }: TBannerProps
) => {
  return (
    <BannerBlock>
      <BannerImg>
        <Image
          src={src}
          alt="hero image"
          width={1170}
          height={601}
          priority
        />
      </BannerImg>
      <BannerInfo>
        <div>
          <h2>{text}</h2>
        </div>
        <SerchBlock>
          {children}
        </SerchBlock>
      </BannerInfo>
    </BannerBlock>
  );
};

export default Banner;
