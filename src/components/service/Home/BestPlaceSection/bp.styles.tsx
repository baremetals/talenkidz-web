import styled from 'styled-components';

export const Div = styled.div``;

export const LocationImg = styled.div`
  position: absolute;
  right: 40px;
  top: 0px;
  z-index: 111;
  max-width: 340px;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const BestPlaceImg = styled.div`
  text-align: center;
  border-radius: 80% 0% 80% 80% / 80% 80% 80% 80%;
  overflow: hidden;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BestPlaceInfo = styled.div`
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    margin-bottom: 30px;
    @media (max-width: 991px) {
      text-align: center;
    }
  }
  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 132.9%;
    color: rgba(15, 2, 31, 0.8);
  }
`;

export const BestPlaceService = styled.section`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  position: relative;
  overflow: hidden;
  .bestPlace {
    position: relative;
  }
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  .owl-dots {
    position: relative;
    top: 30px;
    .owl-dot {
      span {
        background: rgba(57, 0, 126, 0.5);
        background: rgba(57, 0, 126, 0.5);
      }
      &.active {
        span {
          background: #39007e;
        }
      }
    }
  }
  .owl-nav {
    height: 47px;
    position: absolute;
    width: 26px;
    cursor: pointer;
    top: 40% !important;
    display: flex;
    min-width: 100%;
    justify-content: space-between;

    .owl-prev {
      left: -80px;
      position: relative;
      &[class*='owl-']:hover {
        background: transparent;
        text-decoration: none;
      }
      &:before {
        content: '';
        background: rgba(57, 0, 126, 0.4);
        border-radius: 20px;
        transform: rotate(46.94deg);
        width: 76.28px;
        height: 62px;
        position: absolute;
        top: -13px;
        right: -14px;
      }
      @media (max-width: 991px) {
        left: 20px;
      }
    }
    .owl-next {
      right: -80px;
      position: relative;
      &[class*='owl-']:hover {
        background: transparent;
        text-decoration: none;
      }
      &:before {
        content: '';
        background: rgba(57, 0, 126, 0.4);
        border-radius: 20px;
        transform: rotate(46.94deg);
        width: 76.28px;
        height: 62px;
        position: absolute;
        top: -13px;
        right: -14px;
      }
      @media (max-width: 991px) {
        right: 20px;
      }
    }
  }
  @media (max-width: 691px) {
    button {
      max-width: 165px !important;
      font-size: 15px !important;
    }
  }
`;

export const BestPlaceItem = styled.div`
  background: rgba(57, 0, 126, 0.2);
  border-radius: 50px;
  padding: 40px;
  @media (max-width: 991px) {
    .rowItem {
      flex-direction: column;
    }
  }
`;

export const OwlCarouselBlock = styled.div`
  max-width: 814px;
  margin: 0 auto;
  .slick-dots {
    li {
      &.slick-active {
        button {
          background: #39007e;
        }
      }
      button {
        background: rgba(57, 0, 126, 0.5);
        width: 10px;
        height: 10px;
        margin: 40px 3px 0;
        &:before {
          display: none;
        }
      }
    }
  }
  .slick-prev {
    left: -90px;
  }
  .slick-next {
    right: -90px;
  }
`;

export const BestPlaceHeading = styled.h1`
  font-size: 52px;
  color: #0f021f;
  font-family: 'Syne', sans-serif;
  position: relative;
  z-index: 0;
  text-align: left;
  text-transform: uppercase;
  max-width: 897px;
  margin: 0 auto 100px;
  line-height: 123.1%;
  .blueBg {
    position: relative;
    color: #fff;
    font-family: 'Syne', sans-serif !important;
    @media (max-width: 991px) {
      color: #0f021f;
    }
    &::after {
      content: '';
      background: #39007e;
      position: absolute;
      width: 103%;
      min-height: 72.77px;
      height: 100%;
      top: -4px;
      left: -5px;
      z-index: -1;
      border-radius: 20px;
      transform: rotate(-1.97deg);
      @media (max-width: 991px) {
        min-height: 59px;
        display: none;
      }
    }
  }
  @media (max-width: 991px) {
    font-size: 42px;
    text-align: center;
    .WhiteBg::after {
      width: 123%;
      height: 100%;
      top: 0;
      left: 0;
      display: none;
    }
  }
`;
