import Button from 'components/users/Auth/Button';
import Breadcrumb from 'components/widgets/Breadcrumb';
import EventBanner from 'components/widgets/EventBanner';
import PageTitle from 'components/widgets/PageTitle';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Markdown from 'markdown-to-jsx';

import Image from 'next/image';
import {
  AddressMap,
  Column,
  InnerContainer,
  PageContainer,
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

import ListCategory from 'components/utilities/Categories/ListCategory';
import GoogleMap from 'components/utilities/Google/GoogleMap';
import Map from 'components/utilities/Google/Map';
import SocialShare from 'components/utilities/SocialShare';
import { EventEntityResponseCollection } from 'generated/graphql';
import Link from 'next/link';
import { formatTimeAndDate } from 'src/utils';

function EventDetails(props: {
  props: {
    data: { events: EventEntityResponseCollection };
  };
}) {
  // const [socialDropdown, setSocialDropdown] = useState(false)

  const { data } = props.props;

  const event = data?.events?.data[0];

  const imageurl = event?.attributes?.listImage;

  const host = event?.attributes?.host?.data?.attributes;
  const location = event?.attributes?.Location;
  // console.log(event);

  const postSlug = event?.attributes?.slug as string;

  const category = event?.attributes?.category?.data?.attributes
    ?.slug as string;

  // const socialToggle = () => {
  //     setSocialDropdown(!socialDropdown)
  // }

  // console.log(category)

  const route = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Events',
      url: '/events',
    },
    {
      name: category,
      url: `/events/${category}`,
    },
    {
      name: event?.attributes?.title as string,
      url: `/events/${category}/${event?.attributes?.title}`,
    },
  ];

  return (
    <>
      <InnerContainer style={{ maxWidth: '1024px' }}>
        <Breadcrumb route={route} />
        <EventBanner
          src={imageurl || '/assets/images/image 92.png'}
          title={event?.attributes?.title as string}
          itemId={event?.id as string}
          slug={event?.attributes?.slug as string}
          readingTimeOrPrice={''}
          hostName={host?.organisation?.name || (host?.fullName as string)}
          startDate={event?.attributes?.startDate}
          startTime={event?.attributes?.startTime as string}
          category={category}
          type={'event'}
          price={event?.attributes?.price as string}
          location={location?.town as string}
          venue={event?.attributes?.venue as string}
          venueName={location?.name as string}
        />
        <EventDetailsBlock>
          <Row className="eventTime">
            <Column className="column-6">
              <div className="date">
                {dayjs(event?.attributes?.startDate).format('MMM D')}
              </div>
            </Column>
            <Column className="column-6">
              <div className="VisitorsBlock">
                {host?.username.toUpperCase()}
                {/* 250 more visitors */}
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
                  event?.attributes?.title,
                  <span key={'workshops'}>workshops</span>,
                ]}
              />
            </Column>
            <Column className="column-5">
              <EventButton>
                <a
                  href={event?.attributes?.link as string}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    content={
                      event?.attributes?.linkButtonText?.replace(
                        '_',
                        ' '
                      ) as string
                    }
                    type="submit"
                    disabled={false}
                    loading={false}
                  />
                </a>
              </EventButton>
              <div className="clockBlock">
                <div className="clocktext">
                  {' '}
                  <span>
                    at{' '}
                    {dayjs(
                      event?.attributes?.startDate +
                        event?.attributes?.startTime
                    ).format('HH:mm A')}
                  </span>
                  {/* <span>every Saturday | Sunday</span> */}
                  <span>{event?.attributes?.status}</span>
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
                {/* <div className="duration">Duration - 2,5 hours</div> */}
                <div className="duration">
                  Price -{' '}
                  {event?.attributes?.price === '0'
                    ? 'Free'
                    : `£${event?.attributes?.price}`}
                </div>
                {event?.attributes?.venue === 'online' && (
                  <div className="tagOnline">{event?.attributes?.venue}</div>
                )}
              </div>
            </Column>
            {event?.attributes?.venue !== 'online' && (
              <Column className="column-5">
                <div className="mapBlock">
                  <div className="mapText">
                    <span>{location?.name || location?.street}</span>
                    <span>{location?.town + ' ' + location?.postCode}</span>
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
            )}
          </Row>
        </EventDetailsBlock>

        {/* About event */}
        <AboutEvent>
          <h2>About event </h2>
          <Markdown>{event?.attributes?.body as string}</Markdown>
        </AboutEvent>

        {/* time block */}
        <TimeAddressBlock>
          <Row className="timeAddressBlock">
            <Column className="column-12">
              <div className="time">
                {event?.attributes?.price === '0'
                  ? 'Free'
                  : `£${event?.attributes?.price}`}
              </div>
              {/* <div className="time">2,5 hours</div> */}
              <div className="date">
                {formatTimeAndDate(
                  event?.attributes?.startDate,
                  event?.attributes?.startTime as string
                )}
              </div>
              {event?.attributes?.venue !== 'online' ? <div className="address">
                {location?.town + ' ' + location?.postCode}
              </div> : null}
              
              {event?.attributes?.venue !== 'location' && (
                <div className="tagOnline">online</div>
              )}
              <EventButton>
                <a
                  href={event?.attributes?.link as string}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    content={
                      event?.attributes?.linkButtonText?.replace(
                        '_',
                        ' '
                      ) as string
                    }
                    type="submit"
                    disabled={false}
                    loading={false}
                  />
                </a>
              </EventButton>
            </Column>
          </Row>
          <SocialShare
            pathname={`/events/${category?.toLowerCase()}/${postSlug}`}
          />
        </TimeAddressBlock>
        {/* Address Map */}
        {event?.attributes?.venue !== 'online' && (
          <AddressMap>
            <GoogleMap>
              <Map
                lat={location?.latitude as number}
                lng={location?.longitude as number}
              />
            </GoogleMap>
          </AddressMap>
        )}

        {/*Categoriesblock*/}
        <CategoriesBlock>
          <ListCategory />
        </CategoriesBlock>

        {/*  */}

        {/*event*/}
        <EventList>
          <Row>
            <Column>
              <PageTitle
                className="pageTitle"
                text={['Most', <span key={''}>popular</span>, 'events']}
              />
            </Column>
          </Row>

          <Row>
            <RelatedEvents category={category} />
          </Row>
          <Row className="buttonRow">
            <Link passHref href={'/events'}>
              <Column>
                <Button
                  content="See more events "
                  type="submit"
                  disabled={false}
                  loading={false}
                />
              </Column>
            </Link>
          </Row>
        </EventList>
      </InnerContainer>

      <PageContainer></PageContainer>
    </>
  );
}

export default EventDetails;
