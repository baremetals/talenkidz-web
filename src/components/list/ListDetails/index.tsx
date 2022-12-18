import { ErrorMsg } from 'components/widgets/Input';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { upperCase } from 'src/helpers';
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
import Map from 'components/utilities/Google/Map';
import RelatedListings from '../ListDetails/RelatedListings';
dayjs.extend(relativeTime);

import SocialShare from 'components/utilities/SocialShare';
import { ListingEntityResponseCollection } from 'generated/graphql';
import Link from 'next/link';
// import { SocialDropDownIcon } from '../../../public/assets/icons/SocialDropDownIcon';
import GoogleMap from 'components/utilities/Google/GoogleMap';

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
                  src={
                    (list?.attributes?.host?.data?.attributes
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
                  <AddressMap className="viewerMap">
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
              <RelatedListings category={category} />
            </Column>
          </Row>
        </InnerContainer>
      </PageContainer>
    </>
  );
}

export default ListDetails;
