import React, { CSSProperties } from 'react';
import styled from 'styled-components';

type Props = {
  style?: CSSProperties;
};

const Spinner = ({ style }: Props) => {
  return (
    <>
      <Loader style={style}>
        <span></span>
      </Loader>
    </>
  );
};

export default Spinner;

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #39007e;
  border-radius: 100px;
  box-shadow: 0px 2px 5px rgb(66 66 66 / 8%);
  span {
    border: 2px solid #f3f3f3; /* Light grey */
    border-top: 2px solid #39007e; /* Blue */
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 2s linear infinite;
    display: inline-block;

    /* Safari */
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
