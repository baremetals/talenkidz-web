import Button from 'components/users/Auth/Button';
import Categories from 'components/utilities/Categories';
import Breadcrumb from 'components/widgets/Breadcrumb';
import EventBanner from 'components/widgets/EventBanner';
import EventItem from 'components/widgets/EventItem';
import { ErrorMsg } from 'components/widgets/Input';
import PageTitle from 'components/widgets/PageTitle';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Markdown from 'markdown-to-jsx';
import { GiPriceTag } from 'react-icons/gi';
import { HiStatusOnline } from 'react-icons/hi';
import { MdOutlineSchedule } from 'react-icons/md';
import { VscLocation } from 'react-icons/vsc';

import Image from 'next/image';
import {
  AddressMap,
  Column,
  InnerContainer,
  PageContainer,
  Post,
  PostBody,
  PostThumb,
  Row,
} from 'styles/common.styles';

import RelatedEvents from '../EventDetails/RelatedEvents';
import {
  AboutEvent,
  CategoriesBlock,
  EventButton,
  EventDetailsBlock,
  EventList,
  ImageIcon,
  TimeAddressBlock,
} from './styles';
dayjs.extend(relativeTime);

import GoogleMap from 'components/utilities/Google/GoogleMap';
import Map from 'components/utilities/Google/Map';
import SocialShare from 'components/utilities/SocialShare';
import {
  EventEntityResponseCollection,
  FilteredEventsDocument,
} from 'generated/graphql';
import Link from 'next/link';

function EventDetails(props: {
  props: {
    data: { events: EventEntityResponseCollection };
    loading: boolean;
    error: any;
  };
}) {
  // const [socialDropdown, setSocialDropdown] = useState(false)

  const { data, loading, error } = props.props;

  if (!data || loading) {
    return <div>loading...</div>;
  }

  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  const event = data?.events?.data[0];

  const imageurl = event?.attributes?.listImage;

  const host = event?.attributes?.host?.data?.attributes;
  const location = event?.attributes?.Location;
  // console.log(location)

  const postSlug = event?.attributes?.slug as string;

  const category = event?.attributes?.category?.data?.attributes
    ?.slug as string;

  // const socialToggle = () => {
  //     setSocialDropdown(!socialDropdown)
  // }

  const route = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'articles',
      url: '/articles',
    },
  ];

  return (
    <>
      <InnerContainer style={{ maxWidth: '1024px' }}>
        <Breadcrumb route={route} />
        <EventBanner src={'/assets/images/image 92.png'} />
        <EventDetailsBlock>
          <Row className="eventTime">
            <Column className="column-6">
              <div className="date">Jan 30</div>
            </Column>
            <Column className="column-6">
              <div className="VisitorsBlock">
                250 more visitors
                <Image
                  src={'/assets/svgs/visitorsIcon.svg'}
                  alt="host logo image"
                  className="iconImg"
                  width={30}
                  height={39}
                />
              </div>
            </Column>
          </Row>
          <Row>
            <Column className="column-7">
              <PageTitle
                className="pageTitle"
                text={[
                  'Discover watercolor landscapes! Painting for kids from 6-9 years',
                  <span key={'workshops'}>workshops</span>,
                ]}
              />
            </Column>
            <Column className="column-5">
              <EventButton>
                <Button
                  content="Participate"
                  type="submit"
                  disabled={false}
                  loading={false}
                ></Button>
              </EventButton>
              <div className="clockBlock">
                <div className="clocktext">
                  {' '}
                  <span>at 10:00 AM</span>
                  <span>every Saturday | Sunday</span>
                </div>
                <ImageIcon className="iconImg">
                  <Image
                    src={'/assets/svgs/clock.svg'}
                    alt="host logo image"
                    className="iconImg"
                    width={54}
                    height={54}
                  />
                </ImageIcon>
              </div>
            </Column>
          </Row>
          <Row>
            <Column className="column-7">
              <div className="durationBlock">
                <div className="duration">Duration - 2,5 hours</div>
                <div className="tagOnline">online</div>
              </div>
            </Column>
            <Column className="column-5">
              <div className="mapBlock">
                <div className="mapText">
                  <span>MID ATLANTIC WASHINGTON D.C. 90094y</span>
                </div>
                <ImageIcon className="iconImg">
                  <Image
                    src={'/assets/svgs/map.svg'}
                    alt="host logo image"
                    className="iconImg"
                    width={51}
                    height={60}
                  />
                </ImageIcon>
              </div>
            </Column>
          </Row>
        </EventDetailsBlock>

        {/* About event */}
        <AboutEvent>
          <h2>About event </h2>
          <p>
            In a sea of you can let off steam here with lots of fun and joy,
            because there are no limits to your creativity.
          </p>
          <h3> Course content:</h3>
          <p>
            This watercolor course is about the endless expanses and the beauty
            of landscapes. Whether meadows, fields, flowers, trees, houses,
            bridges, walls and Co.: There is a lot to discover! What should your
            landscape look like? In this workshop, Stefanie Driver invites you
            to paint your own colorful landscape and get to know the magic of
            watercolor paints at the same time.?
          </p>
          <p>
            No previous knowledge is required, a good mood and anticipation are
            enough! Painting is based on watercolours, water-soluble wooden
            pencils and various fineliners.
          </p>
          <h3>Prerequisite:</h3>
          <p>Participant age: 6 to 9 years</p>
          <ul>
            <li>
              <strong>MATERIAL:</strong> (paper, pens, etc.) will be provided by
              PapierFischer.
            </li>
            <li>
              <strong>WHERE:</strong> Online
            </li>
            <li>
              <strong>WHEN:</strong> 30 January at 10:00 AM{' '}
            </li>
            <li>
              <strong>COSTS:</strong> Free
            </li>
          </ul>
          <h3>Course leader profile:</h3>
          <p>
            My name is Stefanie Driver, I am 42 years old, I live with my
            husband and my 2 children (6 and 11 years) and our little Havanese
            dog in Karlsruhe/Oberreut. It feels like I have been creative my
            whole life and I need colors around me. I started painting with
            acrylics more than 21 years ago and from then on I tried quite a few
            things, developed myself further and also took part in specific
            painting courses. Acrylic/watercolor/pencil/pastel chalk,
            perspectives/shadows/representational, up to zentangle and
            HappyPainting have filled my schedule. I am already working as a
            lecturer at the vhs Rastatt and am currently offering various
            painting courses. I am constantly developing myself part-time around
            the topic of painting and drawing in order to keep creating new
            course content and trying out new painting materials.
          </p>
          <h3>Important information about participation in our events:</h3>
          <p>
            Age: 6 to 9 years | Maximum number of participants: 10 | For the
            safety of each and every course participant, we ask you to observe
            the current Corona Ordinance of the State of Baden-Württemberg with
            every visit. The disinfectant exhibited on the workshop area should
            and may be used plentifully. If you have any further questions
            regarding the measures currently in force & our courses, please
            write to us at any time at: veranstaltungen@papierfischer.de
          </p>
        </AboutEvent>

        {/* time block */}
        <TimeAddressBlock>
          <Row className="timeAddressBlock">
            <Column className="column-12">
              <div className="time">2,5 hours</div>
              <div className="date">30 January at 10:00 AM </div>
              <div className="address">WASHINGTON D.C. 90094 </div>
              <div className="tagOnline">online</div>
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
        </TimeAddressBlock>
        {/* Address Map */}

        <AddressMap>
          <GoogleMap>
            <Map
              lat={location?.latitude as number}
              lng={location?.longtitude as number}
            />
          </GoogleMap>
        </AddressMap>

        {/*Categoriesblock*/}
        <CategoriesBlock>
          <Categories entityDocument={FilteredEventsDocument} />
        </CategoriesBlock>

        {/*  */}

        {/*event*/}
        <EventList>
          <Row>
            <Column>
              <PageTitle
                className="pageTitle"
                text={[
                  'Most',
                  <span key={'workshops'}>popular</span>,
                  'events',
                ]}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <EventItem />
            </Column>
            <Column>
              <EventItem />
            </Column>
            <Column>
              <EventItem />
            </Column>
          </Row>
          <Row className="buttonRow">
            <Column>
              <Button
                content="See more events "
                type="submit"
                disabled={false}
                loading={false}
              ></Button>
            </Column>
          </Row>
        </EventList>
      </InnerContainer>
      {/* <InnerBanner  style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
        <InnerContainer>
          <Title role="heading">{event?.attributes?.title}</Title>
          <Text style={{ marginBottom: '0', color: '' }}>
            <Link href={'/'}>Home</Link> / <Link href={'/events'}>Events</Link>{' '}
            / {upperCase(category as string)}
          </Text>

          <AvatarRow>
            <PostDate>
              <Avatar>
                <Image
                  style={{ width: '3rem', height: '3rem' }}
                  src={'/logo-w.svg'
                  }
                  alt="host logo image"
                  width={48}
                  height={48}
                />
                By : {'TalentKids'}
              </Avatar>
            </PostDate>
            <PostDate>
              {dayjs(event?.attributes?.startDate).format('DD MMMM YYYY')} -{' '}
              {dayjs(event?.attributes?.endDate).format('DD MMMM YYYY')}
            </PostDate>
            <PostDate>
              {event?.attributes?.startTime} - {event?.attributes?.endTime}
            </PostDate>
          </AvatarRow>
        </InnerContainer>
      </InnerBanner> */}

      <PageContainer>
        <InnerContainer style={{ maxWidth: '1024px' }}>
          <Row>
            <Column className="column-7">
              <Row>
                <Column style={{ minWidth: '50%' }}>
                  <div style={{ margin: ' 0 0 1rem' }} className="clearfix">
                    <SocialShare
                      pathname={`/events/${category.toLowerCase()}/${postSlug}`}
                    />
                  </div>
                  <div className="align_names">
                    <div className="buy_now">
                      <Link
                        passHref
                        href={(event?.attributes?.link as string) || ''}
                      >
                        <button
                          className="button"
                          style={{ backgroundColor: 'none' }}
                        >
                          {event?.attributes?.linkButtonText?.replace('_', ' ')}
                        </button>
                      </Link>
                    </div>
                    <div style={{}}>
                      <GiPriceTag />

                      {event?.attributes?.price === '0'
                        ? 'Free'
                        : `£${event?.attributes?.price}`}
                    </div>
                    <div style={{}}>
                      <MdOutlineSchedule />
                      {event?.attributes?.status}
                    </div>

                    {event?.attributes?.venue === 'online' && (
                      <div style={{}}>
                        <HiStatusOnline />
                        {event?.attributes?.venue} online
                      </div>
                    )}
                    {event?.attributes?.venue === 'location' && (
                      <div style={{}}>
                        <VscLocation />
                        {location?.name}
                      </div>
                    )}
                    {event?.attributes?.venue === 'both' && (
                      <div style={{}}>
                        <VscLocation />
                        {location?.name}
                      </div>
                    )}
                    {event?.attributes?.venue === 'both' && (
                      <div style={{}}>
                        <HiStatusOnline /> online
                      </div>
                    )}
                  </div>
                  <div>
                    <Post>
                      <PostThumb>
                        {imageurl && (
                          <Image
                            src={imageurl}
                            alt="host logo image"
                            width={750.61}
                            height={562.96}
                          />
                        )}
                      </PostThumb>
                      <PostBody>
                        <div style={{ marginBottom: '1.5rem' }}>
                          <Markdown>
                            {event?.attributes?.body as string}
                          </Markdown>
                        </div>
                      </PostBody>
                    </Post>
                  </div>
                </Column>
              </Row>
            </Column>
            <Column>
              <RelatedEvents category={category} />
            </Column>
          </Row>
        </InnerContainer>
      </PageContainer>
    </>
  );
}

export default EventDetails;
