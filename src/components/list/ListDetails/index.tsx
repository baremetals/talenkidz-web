import { ErrorMsg } from 'components/widgets/Input';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Markdown from 'markdown-to-jsx';
import { GiPriceTag } from 'react-icons/gi';
import { HiStatusOnline } from 'react-icons/hi';
import { MdOutlineSchedule } from 'react-icons/md';
import { VscLocation } from 'react-icons/vsc';
import EventBanner from 'components/widgets/EventBanner';
import Breadcrumb from 'components/widgets/Breadcrumb';
import PageTitle from 'components/widgets/PageTitle';
import Button from 'components/users/Auth/Button';
import ActivitiesItem from 'components/widgets/ActivitiesItem';
import ActivitiesCategories from 'components/widgets/ActivitiesCategories';

import Image from 'next/image';
import {
  AddressMap,
  Avatar,
  AvatarRow,
  Column,
  InnerBanner,
  InnerContainer,
  PageContainer,
  Post,
  PostBody,
  PostDate,
  PostThumb,
  Row,
  Text,
  Title,
} from 'styles/common.styles';

import { ActivitiesDetails, Visitor,VisitorInner,Visitors, Fee, EventButton, ImageIcon, SportCoach,AboutActivities, ActivitiesAction,CommentBox, ActivitiesList, CategoriesBlock, EventTime, LinkBlock, } from './styles';

import Map from 'components/utilities/Google/Map';
import RelatedListings from '../ListDetails/RelatedListings';
dayjs.extend(relativeTime);

import SocialShare from 'components/utilities/SocialShare';
import { ListingEntityResponseCollection } from 'generated/graphql';
import Link from 'next/link';
// import { SocialDropDownIcon } from '../../../public/assets/icons/SocialDropDownIcon';
import GoogleMap from 'components/utilities/Google/GoogleMap';
import { upperCase } from 'src/utils';

import ArticleCommentBox from 'components/widgets/ArticleCommentBox';

function ListDetails(props: {
  props: {
    data: { listings: ListingEntityResponseCollection };
    loading: boolean;
    error: any;
  };
}) {
  // const [socialDropdown, setSocialDropdown] = useState(false);

  const { data, loading, error } = props.props;

  if (!data || loading) {
    return <div>loading...</div>;
  }

  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  const list = data?.listings?.data[0];

  const imageurl = list?.attributes?.listImage;

  const host = list?.attributes?.host?.data?.attributes;
  const location = list?.attributes?.Location;
  // console.log(location)
  const category = list?.attributes?.category?.data?.attributes?.slug as string;
  // console.log(data)

  // List

  const postSlug = list?.attributes?.slug as string;

  const categoryList = list?.attributes?.category?.data?.attributes
    ?.slug as string;

  // const socialToggle = () => {
  //   setSocialDropdown(!socialDropdown);
  // };

  return (
    <>
      <InnerContainer>

        {/* breadcrumb */}
        <Breadcrumb route={[]} />
        
        {/* EventBanner */}
        <EventBanner src={'/assets/images/activities.png'} />
         
        {/*  */}
        <ActivitiesDetails>
        <Row>
          <Column className='Column-6'> 
            <div className='offerDay'>
                <div className='offericon'>
                   <img src='/assets/svgs/offer.svg'/>
              </div>
              <div className='day'>
                Saturday | Sunday 
              </div>
            </div>
          </Column>
           <Column className='Column-6'>
              <Visitor>
                <VisitorInner>
                  <Visitors>
                      <Image
                        src={'/assets/svgs/participants.svg'}
                        alt="article image"
                        width={16}
                        height={20}
                      />
                      <label>10-15 participants</label>
                  </Visitors>
                  <Fee href='#'>35 $ monthly</Fee>
                </VisitorInner>
              </Visitor>
          </Column>
          </Row>

          <Row className='coachSection'>
            <Column>
               <SportCoach>
                <div className='coachSpe'>
                  <Image
                  src={'/assets/images/user.png'}
                  alt="article image"
                  width={35}
                  height={35}
                  /> Andrew Swann</div>
                
                <div className='star'>  <Image
                  src={'/assets/svgs/StarIcon.svg'}
                  alt="article image"
                  width={31}
                  height={31}
                /> 5,0</div>

                <div className='comments'>  <Image
                  src={'/assets/svgs/commentsicon.svg'}
                  alt="article image"
                  width={31}
                  height={31}
                />  12 comments</div>
              </SportCoach>
            </Column>
            <Column>
              <EventButton>
                      <Button
                    content="Participate"
                        type="submit"
                        disabled={false}
                        loading={false}
                    ></Button>
               </EventButton>
            </Column>
          </Row>
          <Row>
                <Column className="column-7">
                 <PageTitle className="pageTitle" text={["Growing a sportsman ", <span key={"workshops"}>Regular sections</span>,]} />
                   <div className='durationBlock'>
                    <div className='duration'>
                      Duration - 2,5 hours 
                    </div>
                    <div className='tagOnline'>
                      individual | group
                      </div>
                   </div>
                </Column>
                <Column className="column-5 addressBlock">
                  <div className='clockBlock'>
                    <ImageIcon className='iconImg'>
                        <Image
                          src={'/assets/svgs/clock.svg'}
                            alt="host logo image"
                          className='iconImg'
                          width={54}
                          height={54}
                        />
                    </ImageIcon>
                    <div className='clocktext'> <span>at 10:00 AM</span><span>every Saturday | Sunday</span></div> 
              </div>
              <div className='mapBlock'>
                    <ImageIcon className='iconImg'>
                        <Image
                          src={'/assets/svgs/map.svg'}
                            alt="host logo image"
                          className='iconImg'
                          width={51}
                          height={60}
                      />
                    </ImageIcon>
                    <div className='mapText'>
                      <span>MID ATLANTIC WASHINGTON D.C. 90094y</span>
                    </div> 
                    
                </div>
                </Column>
            </Row>
        </ActivitiesDetails>
         
         {/* About event */}
        <AboutActivities>
          <h2>About event </h2>
          <p>Tennis Coaches provide training to students who wish to learn how to play tennis, improve their tennis skills, or compete in tennis tournaments. They coordinate individual and group tennis lessons, develop training programs based on students tennis skills, and evaluate students’ performance.
          </p>
          <h3> Prerequisite:</h3>
          <p>Participant age: 6 to 9 years</p>
          <ul>
            <li><strong>MATERIAL:</strong> (paper, pens, etc.) will be provided by PapierFischer.</li>
            <li><strong>WHERE:</strong> Online</li>
            <li><strong>WHEN:</strong> 30 January at 10:00 AM  </li>
            <li><strong>COSTS:</strong> Free</li>
          </ul>
          <h3>Activity leader profile:</h3>
          <p>
            My name is Andrew Swann, Iam 32 years old. With over 10 years of tennis coaching experience at a number of different clubs across the East Midlands, the Tennis Teacher can provide you with a range of tennis related services to individuals or clubs. A fully accredited LTA licensed coach, you can rest assured that the Tennis Teacher will provide a professional service to cater to your needs. Having served as head coach at two different clubs, the Tennis Teacher has been responsible for running junior tennis programmes, adult tennis programmes, internal box leagues, ratings tournaments, club tournaments as well as overseeing junior teams competing in county leagues. The Tennis Teacher currently works at clubs in Nottingham, Nottinghamshire and Market Harborough offering individual coaching, group coaching and tournaments to a range of ages and ability levels.</p>
          <Row className='infomationBlock'>
            <Column className='column-8'>
              <h3>Important information about participation in our events:</h3>
              <p>Age: 10 to 18 years | Maximum number of participants: 15</p>
            </Column>
            <Column className='column-4'>
              <EventButton>
                      <Button
                    content="Participate"
                        type="submit"
                        disabled={false}
                        loading={false}
                    ></Button>
               </EventButton>
            </Column>
          </Row>
        </AboutActivities>

         {/* Address Map */}
        <ActivitiesAction>
            <AddressMap>
              <GoogleMap>
                <Map
                  lat={location?.latitude as number}
                  lng={location?.longtitude as number}
                />
              </GoogleMap>
          </AddressMap>

          <CommentBox>
            <ArticleCommentBox className="commentBox"/>
          </CommentBox>

        </ActivitiesAction>

        {/* <Activitie*/}
           <ActivitiesList>
                   <Row >
                      <Column><PageTitle className="pageTitle" text={'Tennis sections for today '} /></Column>
                  </Row>
                  <Row className='mb90'>
                    <Column className='Column-3'>
                      <ActivitiesItem />
                    </Column>
                    <Column className='Column-3'>
                      <ActivitiesItem />
                    </Column>
                    <Column className='Column-3'>
                      <ActivitiesItem />
                   </Column>
                  </Row>
            </ActivitiesList>

        {/* <Activitie*/}
           <ActivitiesList>
                   <Row >
                      <Column><PageTitle className="pageTitle" text={'Participate weekly '} /></Column>
                  </Row>
                  <Row className='mb90'>
                    <Column className='Column-3'>
                      <ActivitiesItem />
                    </Column>
                    <Column className='Column-3'>
                      <ActivitiesItem />
                    </Column>
                    <Column className='Column-3'>
                      <ActivitiesItem />
                   </Column>
                  </Row>
            </ActivitiesList>

        
           {/* <Activitie*/}
            <ActivitiesList>
                   <Row >
                      <Column><PageTitle className="pageTitle" text={'Visit for free'} /></Column>
                  </Row>
                  <Row >
                    <Column className='Column-3'>
                      <ActivitiesItem />
                    </Column>
                    <Column className='Column-3'>
                      <ActivitiesItem />
                    </Column>
                    <Column className='Column-3'>
                      <ActivitiesItem />
                   </Column>
                  </Row>
                  <Row className='buttonRow mb90'>
                    <Column>
                      <Button
                        content="See more events "
                        type="submit"
                        disabled={false}
                        loading={false}
                      ></Button>
                  </Column>
              </Row>
        </ActivitiesList>
        
           {/* Categories*/}
              <CategoriesBlock>
                 <ActivitiesCategories />
        </CategoriesBlock>
        

        {/* event */}
              <EventTime>
                <LinkBlock href={'#'}>Creativity </LinkBlock>
                <LinkBlock className='active'  href={'#'}>Sport </LinkBlock>
                <LinkBlock href={'#'}>Education </LinkBlock>
              </EventTime>

      </InnerContainer>
      <InnerBanner>
        <InnerContainer>
          <Title>{list?.attributes?.title}</Title>
          <Text style={{ marginBottom: '0', color: '#000000' }}>
            <Link href={'/'}>Home</Link> /{' '}
            <Link href={'/activities'}>Activities</Link> /{' '}
            {upperCase(category as string)}
          </Text>

          <AvatarRow>
            <PostDate>
              <Avatar>
                <Image
                  // style={{ width: '3rem', height: '3rem' }}
                  src={'/logo-w.svg'}
                  alt="host logo image"
                  width={48}
                  height={48}
                />
                By : {'TalentKids'}
              </Avatar>
            </PostDate>
            <PostDate>
              {dayjs(list?.attributes?.startDate).format('DD MMMM YYYY')} -{' '}
              {dayjs(list?.attributes?.endDate).format('DD MMMM YYYY')}
            </PostDate>
            <PostDate>
              {list?.attributes?.startTime} - {list?.attributes?.endTime}
            </PostDate>
          </AvatarRow>
        </InnerContainer>
      </InnerBanner>

      <PageContainer>
        <InnerContainer>
          <Row>
            <Column className="column-7">
              <Row>
                <Column style={{ minWidth: '50%' }}>
                  <div style={{ margin: ' 0 0 1rem' }} className="clearfix">
                    <SocialShare
                      pathname={`/activities/${categoryList}/${postSlug}`}
                    ></SocialShare>
                  </div>
                  <div className="align_names">
                    <div className="buy_now">
                      <Link
                        passHref
                        href={(list?.attributes?.link as string) || ''}
                      >
                        <button className="button">
                          {list?.attributes?.linkButtonText?.replace('_', ' ')}
                        </button>
                      </Link>
                    </div>
                    <div style={{}}>
                      <GiPriceTag />
                      {list?.attributes?.price === '0'
                        ? 'Free'
                        : `£${list?.attributes?.price}`}
                    </div>
                    <div style={{}}>
                      <MdOutlineSchedule />
                      {list?.attributes?.status}
                    </div>

                    {list?.attributes?.venue === 'online' && (
                      <div style={{}}>
                        <HiStatusOnline />
                        {list?.attributes?.venue} online
                      </div>
                    )}
                    {list?.attributes?.venue === 'location' && (
                      <div style={{}}>
                        <VscLocation />
                        {location?.name}
                      </div>
                    )}
                    {list?.attributes?.venue === 'both' && (
                      <div style={{}}>
                        <VscLocation />
                        {location?.name}, <HiStatusOnline /> online
                      </div>
                    )}
                  </div>
                  <div>
                    <Post>
                      <PostThumb>
                        {imageurl && (
                          <Image
                            src={imageurl}
                            alt="activity image"
                            width={750.61}
                            height={562.96}
                          />
                        )}
                      </PostThumb>
                      <PostBody>
                        <div style={{ marginBottom: '1.5rem' }}>
                          <Markdown>
                            {list?.attributes?.body as string}
                          </Markdown>
                        </div>
                      </PostBody>
                    </Post>
                  </div>
                  {/* <AddressMap className="viewerMap">
                    <GoogleMap>
                      <Map
                        lat={location?.latitude as number}
                        lng={location?.longtitude as number}
                      />
                    </GoogleMap>
                  </AddressMap> */}
                </Column>
              </Row>
            </Column>
            <Column>
              <RelatedListings category={category} />
            </Column>
          </Row>
        </InnerContainer>
      </PageContainer>
    </>
  );
}

export default ListDetails;
