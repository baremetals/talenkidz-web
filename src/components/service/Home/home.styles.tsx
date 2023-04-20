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
    right: -14px;
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
      buttton {
        background: rgba(57, 0, 126, 0.5);
        &.slick-active {
          background: #39007e;
        }
      }
    }
  }
`;
