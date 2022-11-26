import { ErrorMsg } from 'components/widgets/Input';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { upperCase } from 'src/lib/helpers';
import Markdown from 'markdown-to-jsx';
import { GiPriceTag } from 'react-icons/gi';
import { HiStatusOnline } from 'react-icons/hi';
import { MdOutlineSchedule } from 'react-icons/md';
import { VscLocation } from 'react-icons/vsc';
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
import RelatedEvents from '../EventDetails/RelatedEvents';
dayjs.extend(relativeTime);

import GoogleMap from 'components/utilities/Google/GoogleMap';
import SocialShare from 'components/utilities/SocialShare';
import { EventEntityResponseCollection } from 'generated/graphql';
import Link from 'next/link';
import Map from 'components/utilities/Google/Map';

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

  return (
    <>
      <InnerBanner 
      // style={{ backgroundImage: 'url(/inner-banner.jpg)' }}
      >
        <InnerContainer>
          <Title role="heading">{event?.attributes?.title}</Title>
          <Text style={{ marginBottom: '0', color: '#1E0A3C' }}>
            <Link href={'/'}>Home</Link> / <Link href={'/events'}>Events</Link>{' '}
            / {upperCase(category as string)}
          </Text>

          <AvatarRow>
            <PostDate>
              <Avatar>
                <Image
                  // style={{ width: '3rem', height: '3rem' }}
                  src={
                    (event?.attributes?.host?.data?.attributes
                      ?.logo as string) || '/logo-w.svg'
                  }
                  alt="host logo image"
                  width={48}
                  height={48}
                />
                By : {host?.name || 'TalentKids'}
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
      </InnerBanner>

      <PageContainer>
        <InnerContainer>
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
                  <AddressMap>
                    <GoogleMap>
                      <Map
                        lat={location?.latitude as number}
                        lng={location?.longtitude as number}
                      />
                    </GoogleMap>
                  </AddressMap>
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
