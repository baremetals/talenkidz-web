
import { BannerBlock, BannerImg,Icon } from './styles';
import Image from 'next/image';
import {  useState } from 'react';
const Banner = ({ src, text, ...props }: any) => {
  

 const [bookedMarked, setActives] = useState(false);
 const toggleClass = () => {
    setActives(!bookedMarked);
  };

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
           <div
            className={bookedMarked ? 'active' : 'inactive'}
              onClick={toggleClass}
          >
            {bookedMarked ? (
              <div className="bookmarkActive">
                <Image
                  src="/assets/svgs/bookmark-active.svg"
                  alt="bookmark icon"
                  width={35}
                  height={35}
                />
              </div>
            ) : (
              <div className="bookmark">
                <Image
                  src="/assets/svgs/bookmar.svg"
                  alt="bookmark icon"
                  width={35}
                  height={35}
                />
              </div>
            )}
          </div>
        </Icon>
      </BannerImg>
    </BannerBlock>
  );
};

export default Banner;
