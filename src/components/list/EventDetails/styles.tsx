import styled from "styled-components";


export const EventDetailsBlock = styled.div`
margin: 50px 0 90px;
.pageTitle {
  line-height: 46px;
}
button {
     max-width: max-content !important;
}
.clockBlock {
    margin-top:40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .clocktext {
        text-align:right;
        display: flex;
        flex-direction: column;
    }
    .iconImg {
        margin-left:20px;
    }
}
.mapBlock {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .mapText {
        text-align:right;
        display: flex;
        flex-direction: column;
        max-width: 66%;
         @media (max-width: 992px) {  
           max-width: 100%;
        }
    }
    .iconImg {
        margin-left:20px;
    }
}
.eventTime {
  margin-bottom:10px;
    .date {
    color: #0F021F;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
  }
}
.durationBlock {
    display:flex;
    align-items: center;
    margin-top: 15px;
    @media (max-width: 992px) {  
         justify-content: center;
    }
    .duration {
        color: #0F021F;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
    }
    .tagOnline {
        background: rgba(57, 0, 126, 0.2);
        border-radius: 20px;
        color: rgba(57, 0, 126, 0.59);
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 123.1%;
        text-align:center;
        width: 102px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left:50px;
    }
}

.VisitorsBlock {
    display:flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 500;
    font-size: 14px;
    color: #0F021F;
     @media (max-width: 992px) {  
      justify-content: flex-start;
   }
    span {
      margin-left:15px !important
    }
}
`;

export const EventButton = styled.div`
   text-align:right;
   button {
    background: #0f021f;
    color: #fff;
    padding: 19px 1.375rem;
    min-width: 210px;
    width: 100%;
    border-radius: 20px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
   }
`;

export const ImageIcon = styled.div`
  .iconImg {
    maring-left:10px;
  }
`;

export const AboutEvent = styled.div`
  h2 {
    color: #39007E;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 123.1%;
    margin-bottom:44px;
  }
  h3 {
    margin-bottom:30px;
  }
  p {
    color: #000000;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 138%;
    margin-bottom:30px;
`;

export const TimeAddressBlock = styled.div`
    .timeAddressBlock {
        margin-top:30px;
        margin-bottom:90px;
        .column-12 {
          display:flex;
          align-items: center;
          justify-content: space-between;
          color: #0F021F;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          @media (max-width: 992px) {  
             flex-direction: column;
             .time {
                margin-bottom:20px; 
             }
              .date {
                margin-bottom:20px; 
             }
              .address {
                margin-bottom:20px; 
             }
            }
          
          .tagOnline {
                background: rgba(57, 0, 126, 0.2);
                border-radius: 20px;
                color: rgba(57, 0, 126, 0.59);
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 123.1%;
                text-align:center;
                width: 102px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left:50px;
            }
        }
    } 
`;

export const CategoriesBlock = styled.div`
margin-bottom: 127px;
margin-top: 90px;
`;

export const EventList = styled.div`
   .pageTitle {
      max-width:1024px;
      margin:0 auto 50px;
   }
   .buttonRow {
      text-align:center;
      margin-top:54px;
      Button {
         background: #0F021F !important; 
         border: 1px solid #0F021F !important;
         border-radius: 15px !important;
         max-width: 310.94px;
         width:100%;
         font-style: normal;
         font-weight: 500;
         font-size: 16px;
         line-height: 123.1%;
         color: #FFFFFF;
      }
   }
`;



