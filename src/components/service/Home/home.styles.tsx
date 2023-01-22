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

export const RightImg = styled.div`
  position: absolute !important;
  bottom: -50px !important;
  right: -50px;
  @media (max-width: 991px) {
    display: none;
  }
`;