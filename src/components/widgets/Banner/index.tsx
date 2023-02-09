
import { BannerBlock, BannerImg,BannerInfo,SerchBlock } from './styles';
import Search from 'components/widgets/Search';
import Image from 'next/image';

const Banner = ({ src,text, author, ...props }: any) => {
  return (
    <BannerBlock {...props}>
      <BannerImg>
        <Image
          src={src}
          alt="hero image"
          // layout="fill"
          // sizes="(max-width: 768px) 100vw,
          //     (max-width: 1200px) 50vw, 33vw"
          width={1170}
          height={601}
          priority
        />
      </BannerImg>
      <BannerInfo>
        <div>
          <h2>{text}</h2>
          {/* <h3>{author}</h3> */}
        </div>
        <SerchBlock>
          <Search
            placeholder={
              'Search events that may be interesting for you and your child '
            }
          />
        </SerchBlock>
      </BannerInfo>
    </BannerBlock>
  );
};

export default Banner;
