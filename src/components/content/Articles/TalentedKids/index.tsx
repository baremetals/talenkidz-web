import { TalentedKid , ImgBlock,KidsInfo,Datetime ,Date ,Time,KidUserBlock,KidUser,KidImg } from './styles';
import Image from 'next/image';
import { useState } from "react";

const TalentedKids = ({ ...props }: any) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // ️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  return (
      <TalentedKid {...props}>
          <ImgBlock>
            <Image
                src="/assets/svgs/menukids.svg"
                alt="location icon"
                className="cubeImg"
                width={30}
                height={20}
                />
          </ImgBlock>
      <KidsInfo>
           <KidUserBlock>
                  <KidUser>
                      <KidImg>
                       <Image
                            src="/assets/images/kid.png"
                            alt="location icon"
                            className="bookmar"
                            width={140}
                            height={140}
                          />
                       </KidImg>
                     <h3>Kenny Jonathan</h3>
          </KidUser>
          <div className={isActive ? "active" : "inactive"} onClick={handleClick}>
                     <div className="bookmark">
                            <Image
                              src="/assets/svgs/bookmar.svg"
                              alt="location icon"
                              width={25}
                              height={25}
                        />
                    </div>
                    <div className="bookmarActive">
                          <Image
                              src="/assets/svgs/bookmark-active.svg"
                              alt="location icon"
                              width={25}
                              height={25}
                      />
                    </div>
              </div>
              </KidUserBlock>
               <h2 >23 Little Things You Only Learn As A Parent</h2>
              <Datetime>
                  <Date>Mar 8</Date>
                  <span></span>
                  <Time>9 min read</Time>
               </Datetime>
      </KidsInfo>
    </TalentedKid>
  );
};

export default TalentedKids;