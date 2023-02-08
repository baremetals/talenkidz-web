import styled from "styled-components";

export const PageTitle = styled.div`
 color: #39007E;
 font-weight: 700;
font-size: 32px;
span {
  line-height: 123.1%;
  text-align: center;  
   position: relative;
  color: #fff;
  font-family: 'Syne',sans-serif !important;
  padding:2px 10px;
  margin-left:10px;
  margin-right:10px;
  @media (max-width: 991px) {  
    color: #39007E;
        margin-left: 0;
        margin-right: 10px;
        padding: 0;
  }
    &::after {
        content: '';
        background: #39007e;
        position: absolute;
        width: 103%;
        min-height: 100%;
        height: 100%;
        top: 0px;
        left: -5px;
        z-index: -1;
        padding-top:10px;
        border-radius: 10px;
        -webkit-transform: rotate(-1.97deg);
        -ms-transform: rotate(-1.97deg);
        transform: rotate(-1.97deg);
        display: flex;
        @media (max-width: 991px) { 
          display: none;
        }
    }  
}
`
