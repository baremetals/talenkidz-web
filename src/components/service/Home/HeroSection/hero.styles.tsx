import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  position: relative;
  overflow: hidden;
  @media (max-width: 991px) {
   margin-top:60px;
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

export const HeroHeading = styled.h1`
  font-size: 52px;
  color: #0f021f;
  font-family: 'Syne', sans-serif;
  position: relative;
  z-index: 0;
  text-align: center;
  text-transform: uppercase;
  max-width: 897px;
  margin: 0 auto 52px;
  line-height: 123.1%;
  .WhiteBg {
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
    }
  }
  @media (max-width: 991px) {
    font-size: 42px;
    text-align: center;
    .WhiteBg::after {
      width: 130%;
      height: 100%;
      top: 0;
      left: -60px;
      display: none;
    }
  }
`;

export const HeroInfo = styled.p`
  font-family: 'Montserrat', sans-serif !important;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #0f021f;
  text-align: center;
  margin-bottom: 40px;
`;

export const HeroItem = styled.div`
  width: 100%;
  max-width: 1033px;
  height: 100%;
  min-height: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  border: 5px solid rgba(15, 2, 31, 0.24);
  border-radius: 100px;
  overflow: hidden;
  span {
    width: 100% !important;
    img {
      object-fit: cover;
    }
  }
  @media (max-width: 691px) {
    border-radius: 20px;
  }
`;

export const OwlCarouselsBlock = styled.div`
  max-width: 1033px;
  margin: 0 auto;
`;

export const HeroButtonBlock = styled.div`
  margin-top: 190px;
  max-width: 435px;
  width: 100%;
  position: absolute;
  background: rgba(255, 255, 255, 0.71);
  border-radius: 20px;
  content: '';
  padding: 13px 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background: #0f021f;
    border-radius: 20px;
    font-weight: 600;
    font-size: 20px;
    font-family: 'Syne', sans-serif;
    min-height: 70px;
    max-width: 394px;
    width: 100%;
  }
  @media (max-width: 691px) {
    max-width: 195px;
    padding: 13px 11px;
    margin-top: auto;
    button {
      min-height: auto;
    }
  }
`;
