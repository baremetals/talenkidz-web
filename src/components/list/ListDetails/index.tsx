
import Button from 'components/users/Auth/Button';
import Breadcrumb from 'components/widgets/Breadcrumb';
import EventBanner from 'components/widgets/EventBanner';
import { ErrorMsg } from 'components/widgets/Input';
import PageTitle from 'components/widgets/PageTitle';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Markdown from 'markdown-to-jsx';

import Image from 'next/image';
import {
  AddressMap,
  Column,
  InnerContainer,
  Row,
} from 'styles/common.styles';

import {
  AboutActivities,
  ActivitiesAction,
  ActivitiesDetails,
  ActivitiesList,
  // CommentBox,
  EventButton,
  Fee,
  ImageIcon,
  SportCoach,
  Visitor,
  VisitorInner,
} from './styles';

import Map from 'components/utilities/Google/Map';
import RelatedListings from '../ListDetails/RelatedListings';
dayjs.extend(relativeTime);

import SocialShare from 'components/utilities/SocialShare';
import { ListingEntityResponseCollection } from 'generated/graphql';
import Link from 'next/link';
// import { SocialDropDownIcon } from '../../../public/assets/icons/SocialDropDownIcon';
import GoogleMap from 'components/utilities/Google/GoogleMap';

// import ArticleCommentBox from 'components/widgets/ArticleCommentBox';
import { getDuration } from 'src/utils';

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

  const route = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Activities',
      url: '/activities',
    },
    {
      name: category,
      url: `/activities/${category}`,
    },
    {
      name: list?.attributes?.title as string,
      url: `/activities/${category}/${list?.attributes?.title}`,
    },
  ];

  return (
    <>
      <InnerContainer>
        {/* breadcrumb */}
        <Breadcrumb route={route} />

        {/* EventBanner */}
        <EventBanner
          src={imageurl || '/assets/images/activities.png'}
          title={list?.attributes?.title as string}
          itemId={list?.id as string}
          slug={list?.attributes?.slug as string}
        />

        {/*  */}
        <ActivitiesDetails>
          <Row>
            {/* <Column className="Column-6">
              <div className="offerDay">
                <div className="offericon">
                  <img src="/assets/svgs/offer.svg" />
                </div>
                <div className="day">Saturday | Sunday</div>
              </div>
            </Column> */}
            <Column className="Column-6">
              <Visitor>
                <VisitorInner>
                  {/* <Visitors>
                    <Image
                      src={'/assets/svgs/participants.svg'}
                      alt="article image"
                      width={16}
                      height={20}
                    />
                    <label>10-15 participants</label>
                  </Visitors> */}
                  <Fee>
                    {list?.attributes?.price === '0'
                      ? 'Free'
                      : `£${list?.attributes?.price}`}
                  </Fee>
                </VisitorInner>
              </Visitor>
            </Column>
          </Row>

          <Row className="coachSection">
            <Column>
              <SportCoach>
                <div className="coachSpe">
                  <Image
                    src={(host?.avatar as string) || '/assets/images/user.png'}
                    alt="host image"
                    width={35}
                    height={35}
                  />
                  {host?.username as string}
                </div>

                {/* <div className="star">
                  {' '}
                  <Image
                    src={'/assets/svgs/StarIcon.svg'}
                    alt="article image"
                    width={31}
                    height={31}
                  />{' '}
                  5,0
                </div> */}

                {/* <div className="comments">
                  {' '}
                  <Image
                    src={'/assets/svgs/commentsicon.svg'}
                    alt="article image"
                    width={31}
                    height={31}
                  />{' '}
                  12 comments
                </div> */}
              </SportCoach>
            </Column>
            <Column>
              <Link passHref href={(list?.attributes?.link as string) || ''}>
                <EventButton>
                  <Button
                    content={
                      list?.attributes?.linkButtonText?.replace(
                        '_',
                        ' '
                      ) as string
                    }
                    type="submit"
                    disabled={false}
                    loading={false}
                  />
                </EventButton>
              </Link>
            </Column>
          </Row>
          <Row>
            <Column className="column-7">
              <PageTitle
                className="pageTitle"
                text={[
                  list?.attributes?.title,
                  // <span key={'workshops'}>Regular sections</span>,
                ]}
              />
              <div className="durationBlock">
                <div className="duration">
                  Duration -{' '}
                  {getDuration(
                    list?.attributes?.startDate as string,
                    list?.attributes?.startTime as string,
                    list?.attributes?.endDate as string,
                    list?.attributes?.endTime as string
                  )}
                </div>

                {/* <div className="tagOnline">individual | group</div> */}
              </div>
            </Column>
            {list?.attributes?.venue !== 'online' && (
              <Column className="column-5 addressBlock">
                <div className="clockBlock">
                  <ImageIcon className="iconImg">
                    <Image
                      src={'/assets/svgs/clock.svg'}
                      alt="host logo image"
                      className="iconImg"
                      width={54}
                      height={54}
                    />
                  </ImageIcon>
                  <div className="clocktext">
                    {' '}
                    <span>
                      at{' '}
                      {dayjs(
                        list?.attributes?.startDate +
                          list?.attributes?.startTime
                      ).format('HH:mm A')}
                    </span>
                    <span>{list?.attributes?.status}</span>
                  </div>
                </div>
                <div className="mapBlock">
                  <ImageIcon className="iconImg">
                    <Image
                      src={'/assets/svgs/map.svg'}
                      alt="host logo image"
                      className="iconImg"
                      width={51}
                      height={60}
                    />
                  </ImageIcon>
                  <div className="mapText">
                    <span>{location?.name || location?.street}</span>
                    <span>{location?.town + ' ' + location?.postCode}</span>
                  </div>
                </div>
              </Column>
            )}
          </Row>
        </ActivitiesDetails>

        {/* About event */}
        <AboutActivities>
          <h2>About event </h2>
          <Markdown>{list?.attributes?.body as string}</Markdown>
          <Row className="infomationBlock">
            <Column className="column-8">
              <h3>Important information about participation in our events:</h3>
              <p>Age: 10 to 18 years | Maximum number of participants: 15</p>
            </Column>
            <Column className="column-4">
              <Link passHref href={(list?.attributes?.link as string) || ''}>
                <EventButton>
                  <Button
                    content={
                      list?.attributes?.linkButtonText?.replace(
                        '_',
                        ' '
                      ) as string
                    }
                    type="submit"
                    disabled={false}
                    loading={false}
                  />
                </EventButton>
              </Link>
            </Column>
          </Row>
        </AboutActivities>

        {/* Address Map */}
        <ActivitiesAction>
          <SocialShare pathname={`/activities/${categoryList}/${postSlug}`} />
          <AddressMap>
            <GoogleMap>
              <Map
                lat={location?.latitude as number}
                lng={location?.longtitude as number}
              />
            </GoogleMap>
          </AddressMap>

          {/* <CommentBox>
            <ArticleCommentBox className="commentBox" />
          </CommentBox> */}
        </ActivitiesAction>

        {/* <Activitie*/}
        {/* <ActivitiesList>
          <Row>
            <Column>
              <PageTitle
                className="pageTitle"
                text={'Tennis sections for today '}
              />
            </Column>
          </Row>
          <Row className="mb90">
            <Column className="Column-3">
              <ActivitiesItem
                id={''}
                hostName={undefined}
                hostImage={undefined}
                title={''}
                slug={undefined}
                location={undefined}
                venue={undefined}
                venueName={undefined}
                route={''}
                startDate={''}
                starTime={''}
                price={''}
                image={undefined}
              />
            </Column>
            <Column className="Column-3">
              <ActivitiesItem
                id={''}
                hostName={undefined}
                hostImage={undefined}
                title={''}
                slug={undefined}
                location={undefined}
                venue={undefined}
                venueName={undefined}
                route={''}
                startDate={''}
                starTime={''}
                price={''}
                image={undefined}
              />
            </Column>
            <Column className="Column-3">
              <ActivitiesItem
                id={''}
                hostName={undefined}
                hostImage={undefined}
                title={''}
                slug={undefined}
                location={undefined}
                venue={undefined}
                venueName={undefined}
                route={''}
                startDate={''}
                starTime={''}
                price={''}
                image={undefined}
              />
            </Column>
          </Row>
        </ActivitiesList> */}

        {/* <Activitie*/}
        {/* <ActivitiesList>
          <Row>
            <Column>
              <PageTitle className="pageTitle" text={'Participate weekly '} />
            </Column>
          </Row>
          <Row className="mb90">
            <Column className="Column-3">
              <ActivitiesItem
                id={''}
                hostName={undefined}
                hostImage={undefined}
                title={''}
                slug={undefined}
                location={undefined}
                venue={undefined}
                venueName={undefined}
                route={''}
                startDate={''}
                starTime={''}
                price={''}
                image={undefined}
              />
            </Column>
            <Column className="Column-3">
              <ActivitiesItem
                id={''}
                hostName={undefined}
                hostImage={undefined}
                title={''}
                slug={undefined}
                location={undefined}
                venue={undefined}
                venueName={undefined}
                route={''}
                startDate={''}
                starTime={''}
                price={''}
                image={undefined}
              />
            </Column>
            <Column className="Column-3">
              <ActivitiesItem
                id={''}
                hostName={undefined}
                hostImage={undefined}
                title={''}
                slug={undefined}
                location={undefined}
                venue={undefined}
                venueName={undefined}
                route={''}
                startDate={''}
                starTime={''}
                price={''}
                image={undefined}
              />
            </Column>
          </Row>
        </ActivitiesList> */}

        {/* <Activitie*/}
        <ActivitiesList>
          <Row>
            <Column>
              <PageTitle className="pageTitle" text={'Related Activites'} />
            </Column>
          </Row>
          <Row>
            <RelatedListings category={category} />
          </Row>
          <Row className="buttonRow mb90">
            <Link passHref href={'/activities'}>
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
        </ActivitiesList>
        <Column></Column>
      </InnerContainer>
    </>
  );
}

export default ListDetails;
