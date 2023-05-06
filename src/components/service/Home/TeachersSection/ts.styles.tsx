import styled from 'styled-components';

export const TeachersService = styled.section`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  position: relative;
  overflow: hidden;
  .TeacherCarouselBlock {
    max-width: 960px;
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

export const TeacherHeading = styled.h1`
  font-size: 52px;
  color: #0f021f;
  font-family: 'Syne', sans-serif;
  position: relative;
  z-index: 0;
  text-align: right;
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

export const TeacherItem = styled.div`
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  Button {
    background: #0f021f;
    border-radius: 20px;
    max-width: 324px;
    width: 100%;
    min-height: 70px;
    font-weight: 600;
    font-size: 24px;
    margin-top: 50px;
  }
`;

export const TeacherInfo = styled.div`
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    margin-top: 50px;
    margin-bottom: 30px;
    color: #000000;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 132.9%;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const TeacherExperience = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .jobExprince {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:before {
      background: rgba(57, 0, 126, 0.4);
      border-radius: 20px;
      transform: rotate(10.75deg);
      content: '';
      min-width: 160px;
      min-height: 62px;
      position: absolute;
    }
    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 42px;
      line-height: 132.9%;
      color: #0f021f;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
  .ContentParent {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:before {
      background: rgba(57, 0, 126, 0.4);
      border-radius: 20px;
      transform: rotate(10.75deg);
      content: '';
      min-width: 160px;
      min-height: 62px;
      position: absolute;
    }
    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 42px;
      line-height: 132.9%;
      color: #0f021f;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

export const StarBlock = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .star {
    display: flex;
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      margin-left: 10px;
    }
  }
  .userImg {
    display: flex;
    flex-direction: column;
    ul {
      display: flex;
      padding: 0;
      position: relative;
      height: 50px;
      li {
        padding: 0;
        margin: 0;
        list-style: none;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        overflow: hidden;
        border: 1px solid #ffffff;
        position: absolute;
        &:nth-child(1) {
          right: 10px;
        }
        &:nth-child(2) {
          right: 40px;
        }
        &:nth-child(3) {
          right: 80px;
        }
        &:nth-child(4) {
          right: 100px;
        }
        &:nth-child(5) {
          right: 130px;
        }
      }
    }
    a {
      color: rgba(0, 0, 0, 0.8);
      font-weight: 500;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
    }
  }
`;

export const ChessImageBlock = styled.div`
  position: absolute;
  left: -40px;
  top: -30px;
  img {
    filter: drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.05));
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

export const TeacherImgBlock = styled.div`
  border-radius: 50% 50% 0% 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 8px 8px 0px;
  padding-bottom: 0;
  border: solid 3px #39007e;
  border-bottom: 0;
  border-left: 0;
  width: 408px;
  height: 408px;
  position: relative;
  @media (max-width: 991px) {
    width: 328px;
    height: 328px;
  }
`;

export const TeacherBorder = styled.div`
  border-radius: 50% 50% 0% 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 400px;
  height: 400px;
  @media (max-width: 991px) {
    width: 320px;
    height: 320px;
  }
`;

export const OwlCarouselBlock = styled.div`
  max-width: 914px;
  margin: 0 auto;
  .slick-dots {
    li {
      button {
        background: rgba(57, 0, 126, 0.5);
        width: 10px;
        height: 10px;
        margin: 5px 7px;
        &.slick-active {
          background: #39007e;
        }
      }
    }
  }
`;
