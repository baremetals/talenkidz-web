import styled from 'styled-components';


export const Section = styled.section`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;

  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const Container = styled.div`
  max-width: 1220px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const Heading = styled.h1`
  font-size: 52px;
  color: #0f021f;
  font-family: 'Syne', sans-serif;
  position: relative;
  z-index: 0;

  &.WhiteBg::after {
    content: '';
    background-color: #ffff;
    position: absolute;
    width: 110%;
    min-height: 82.77px;
    height: 100%;
    top: -15px;
    left: -20px;
    z-index: -1;
    border-radius: 20px;
    transform: rotate(3.13deg);
  }

  @media (max-width: 991px) {
    font-size: 42px;
    text-align: center;

    &.WhiteBg::after {
      width: 100%;
      left: 0px;
      top: 0;
    }
  }
`;

export const SubHeading = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin: 80px 0 50px;
  max-width: 372px;
  text-align: center;
`;

export const DoubtsCard = styled.div`
  background: rgba(57, 0, 126, 0.2);
  border-radius: 50px;
  max-width: 814px;
  width: 100%;
  min-height: 491px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
`;

export const Question = styled.div`
  position: absolute;
  @media (max-width: 991px) {
    display: none;
  }

  &.leftImg {
    left: -39%;
    top: 30px;
  }

  &.RightImg {
    right: -25%;
    top: 30px;
    width: 340px;
  }
`;