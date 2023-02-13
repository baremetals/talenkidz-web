
import { BannerBlock, BannerImg,Icon } from './styles';
import Image from 'next/image';
import BookMarkIcon from '../BookMarkIcon';

type TBanner = {
  src: string;
  title: string;
  itemId: string;
  slug: string;
};

const Banner: React.FC<TBanner> = ({ src, title, itemId, slug }) => {
  return (
    <BannerBlock style={{cursor: 'pointer'}}>
      <BannerImg>
        <Image src={src} alt="article image" width={1170} height={601} />
        <Icon>
          <BookMarkIcon
            id={itemId}
            title={title}
            slug={slug}
            image={src}
            width={35}
            height={35}
          />
        </Icon>
      </BannerImg>
    </BannerBlock>
  );
};

export default Banner;
