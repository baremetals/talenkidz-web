import styled from 'styled-components';

export const Div = styled.div``;

export const LeftImg = styled.div`
  position: absolute !important;
  top: 120px !important;
  left: -50px;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const SliderLeft = styled.div`
  width: auto;
  height: auto;
  &:before {
    content: '';
    background: rgba(57, 0, 126, 0.4);
    border-radius: 20px;
    -webkit-transform: rotate(46.94deg);
    -ms-transform: rotate(46.94deg);
    transform: rotate(46.94deg);
    width: 76.28px;
    height: 62px;
    position: absolute;
    top: -13px;
    right: -14px;
  }
`;

export const SliderRight = styled.div`
  width: auto;
  height: auto;
  &:before {
    content: '';
    background: rgba(57, 0, 126, 0.4);
    border-radius: 20px;
    -webkit-transform: rotate(46.94deg);
    -ms-transform: rotate(46.94deg);
    transform: rotate(46.94deg);
    width: 76.28px;
    height: 62px;
    position: absolute;
    top: -13px;
    left: -14px;
  }
  img {
  }
`;

export const RightImg = styled.div`
  position: absolute !important;
  bottom: -50px !important;
  right: -50px;
  @media (max-width: 991px) {
    display: none;
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
        margin: 5px 7px;
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
