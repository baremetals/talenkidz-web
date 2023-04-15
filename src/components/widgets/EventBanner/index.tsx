import Image from 'next/image';
import BookMarkIcon from '../BookMarkIcon';
import { BannerBlock, BannerImg, Icon } from './styles';

type TBanner = {
  src: string;
  title: string;
  itemId: string;
  slug: string;
  readingTimeOrPrice: string;
  userImage?: string;
  startTime?: string;
  venueName?: string;
  venue?: string;
  blurb?: string;
  location?: string;
  hostName: string;
  startDate: string;
  category: string;
  type: string;
  price: string;
};

const Banner: React.FC<TBanner> = ({
  src,
  title,
  itemId,
  slug,
  category,
  type,
  price,
  startTime,
  startDate,
  venueName,
  venue,
  location,
  hostName,
  userImage,
}) => {
  return (
    <BannerBlock style={{ cursor: 'pointer' }}>
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
            userName={hostName}
            userImage={userImage as string}
            date={startDate}
            category={category as string}
            type={type}
            readingTimeOrPrice={price}
            venueName={venueName as string}
            time={startTime as string}
            venue={venue as string}
            location={location as string}
          />
        </Icon>
      </BannerImg>
    </BannerBlock>
  );
};

export default Banner;
