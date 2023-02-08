import styled from "styled-components";

export const AboutPage = styled.div`
  .gametypeBlock {
     margin-top:129px;
     margin-bottom: 110px;
     @media (max-width: 991px) {
      div {
        flex: auto;
      }
         margin-top:70px;
        margin-bottom: 60px;
    }
  }
  .pageTitle {
    text-align:center;
    margin:60px 0;
    &.aboutpage {
       span {
        font-size:64px;
         @media (max-width: 991px) {
           font-size:40px;
         }
      }
    }
   
  }
`;


export const GameType = styled.div`
 p {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  text-align:center;
  max-width:90%;
 }
  
`;

export const ImgBox = styled.div`
   &.gameImg{
    text-align:center;
    min-height:260px
   }
`;

export const SectionBlock = styled.div`
  &.TalentKidsApproach {
    margin:200px auto 200px;
    max-width:1012px; 
     @media (max-width: 991px) {
         margin:80px auto 200px;
      }
    .pageHeader {
       margin-bottom:60px; 
       justify-content: flex-end;
        .pageTitle {
          font-size:52px;
          text-align: right;
          margin: 0 0 90px;
            span {
              display: inline-block;
               @media (max-width: 991px) {
                   display: initial;
               }
              &::after {
                width:100%;
              }
            }
        }
     }
     .ApproachStep {
       display:flex;
       span {
        font-style: normal;
        font-weight: 800;
        font-size: 128px;
        line-height:80px;
        /* or 104px */
        letter-spacing: -0.01em;
        color: rgba(57, 0, 126, 0.5);
         font-family: 'Syne', sans-serif !important;
         @media (max-width: 991px) {
             font-size: 68px;
        }
        }
        p {
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 123.1%;
          letter-spacing: 0.02em;
          color: #39007E;
          margin-left:30px;
          margin-bottom:0;
          
        }
     }
     .LastStep {
        margin-top:99px;
        @media (max-width: 991px) {
              margin-top:20px;
        }
     }
  }

  &.CapacityBlock {
    background: #F1FAFF;
    border-radius: 20px;
    margin:200px auto 0;
    max-width:1012px; 
    padding:50px 90px;
    position: relative;
     @media (max-width: 991px) {
        margin:80px auto 0;
        padding:50px 30px;
      }
     .CapacityIcon {
        position: absolute;
        top: -162px;
        left: -143px;
         @media (max-width: 991px) {
          display:none;
         }
     }
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 123.1%;
      letter-spacing: -0.01em;
      color: #39007E;
      margin-bottom:40px;
      margin-left:70px;
      @media (max-width: 991px) {
        margin-left:0;
      }
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 130%;
      color: #000000;
      font-family: 'Montserrat', sans-serif;
      &.ColorBlue{
        color: #39007E;
            text-align: center;
      }
    }
  }

  &.TestimonialBlock {
      margin:200px auto 0;
      max-width:1012px; 
      @media (max-width: 991px) {
          margin:80px auto 0;
          .row {
            flex-direction: column-reverse;
          }
      }
     .TestimonialInfo {
       margin:0 auto;
          p {
              font-style: normal;
              font-weight: 700;
              font-size: 32px;
              line-height: 123.1%;
              letter-spacing: -0.01em;
              color: #39007E;
              margin-bottom:30px;
          }
          label {
              font-style: italic;
              font-weight: 700;
              font-size: 24px;
              line-height: 29px;
              color: rgba(57, 0, 126, 0.5);
          }
          
      }
      .TestimonialInfoRow {
        margin:90px 0 80px;
        .TestimonialText {
               p {
                  font-style: normal;
                  font-weight: 500;
                  font-size: 20px;
                  line-height: 130%;
                  color: #39007E;
                  font-family: 'Montserrat', sans-serif;
               }
          }
      }
  }

  &.TalentedKidBlock{
     margin-top:200px; 
      @media (max-width: 991px) {
          margin-top:80px; 
        .row {
           div {
            flex:auto;
           }
        }
        }
    .pageHeader {
       margin-bottom:60px; 
        justify-content: flex-end;
        .pageTitle {
          font-size:52px;
          text-align: right;
            span {
              display: inline-block;
               @media (max-width: 991px) {
                   display: initial;
               }
              &::after {
                width:100%;
              }
            }
        }
     }
     .TalentedKidInfo {
       position: relative;
        @media (max-width: 991px) {
          margin-bottom:20px;
        }
       p  {
           font-weight: 500;
            font-size: 24px;
            line-height: 135%;
            color: #000000;
           position: relative;
          z-index: 111;
           &::after {
             content:"";
              left: -30px;
              top: -30px;
              width: 87px;
              height: 87px;
              background: rgba(186,175,216,0.69);
              position: absolute;
              border-radius: 50px;
              z-index: -1;
                @media (max-width: 991px) { 
                  left: -12px;
                }
           }
       }
    }
  }

  &.WhyCreativeCareer {
     max-width:1012px;
     background: #F1FAFF;
     margin:200px auto 0;
     padding:50px;
     border-radius: 20px;
     position: relative;
      @media (max-width: 991px) { 
         margin:80px auto 0;
      }
    .WhyCreativeCareerIcon {
      position: absolute;
      top: -120px;
      left: -120px;
       @media (max-width: 991px) { 
        display:none;
       }
        @media (max-width:1200px) { 
          left: -80px;
       }
     }
     .pageTitle {
        margin: 50px 0;
        font-size:52px;
        text-align: left;
     }
     p {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 130%;
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        &.blue {
          color: #39007E;
        }
     }
  }

  &.AllStart {
     max-width:1012px;
      margin:200px auto 0;
      @media (max-width: 991px) { 
        margin:80px auto 0;
      }
    .pageHeader {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
       margin-bottom:90px;
         @media (max-width: 991px) { 
          margin-bottom:0;
        }
       .pageTitle {
           text-transform: uppercase;
       }
    }
    .inYears {
      font-style: normal;
      font-weight: 800;
      font-size: 128px;
      line-height: 81.1%;
      letter-spacing: -0.01em;
      color: rgba(57, 0, 126, 0.5);
          margin-top: 30px;
      span {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: rgba(57, 0, 126, 0.5);
        font-family: 'Syne', sans-serif !important;
      }
    }
    .AllStarInfo {
       position: relative;
        margin-bottom:60px;
       @media (max-width: 991px) { 
          margin-top:60px;
        }
       p  {
           font-weight: 500;
            font-size: 20px;
            line-height: 135%;
            color: #000000;
            position: relative;
            font-family: 'Montserrat', sans-serif;
          z-index: 111;
           &::after {
             content:"";
              left: -30px;
              top: -30px;
              width: 87px;
              height: 87px;
              background: rgba(186,175,216,0.69);
              position: absolute;
              border-radius: 50px;
              z-index: -1;
           }
       }
  }

  .pageHeader {
      text-align: right;
      width: 100%;
      display: flex;
      align-items: flex-start;
        .pageTitle {
          margin-bottom:60px;
          font-size: 52px;
          text-align: right;
          margin: 0 0 60px;
          span {
                font-size: 52px;
                position: relative;
                display: inline-flex;
            &::after {
                  width: 100%;
          }
      }
   }
   
`;

export const KeepScrolling = styled.div`
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 135%;
      color: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: flex-end;
      margin-top:120px;
      .downArrow {
          position: relative;
          margin-left: 40px;
          text-align: center;
          span {
            margin-left: 9px !important;
            margin-top: 3px !important;
          }
        &:after {
          content: '';
          position: absolute;
          background: rgba(57, 0, 126, 0.4);
          border-radius: 20px;
          transform: rotate(135.02deg);
          width: 76.28px;
          height: 62px;
          display: block;
          top: 0;
        }
      }
`;


export const ShapeImageBlock = styled.div`
  border-radius: 50% 50% 0% 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding:8px 8px 0px;
  padding-bottom: 0;
  border-bottom: 0;
  border-left: 0;
  width:288px;
  height:288px;
  position: relative;
  margin:0 auto;
    @media (max-width: 991px) {
      width:228px;
      height:228px;
    }
`;

export const ShapeImage = styled.div`
  border-radius: 50% 50% 0% 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  width:270px;
  height:270px;
   @media (max-width: 991px) { 
     width:220px;
      height:220px;
   }
`;




