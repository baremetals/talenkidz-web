import styled from 'styled-components'

export const ErrorPage = styled.div`
  height: 75vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NotFoundIcon = styled.img`
  width: 8.75rem;
  margin-bottom: 1.2rem;
`

export const ErrorIcon = styled.img`
  width: 6.25rem;
  margin-bottom: 1.2rem;
`

export const ErrorMessage = styled.div``;

export const ErrorMessageWrapper = styled.div``;

export const ErrorCode = styled.h1`
  display: inline-block;
  border-right: 1px solid rgba(0, 0, 0,.3);
  margin: 0;
  margin-right: 20px;
  padding: 10px 23px 10px 0;
  font-size: 24px;
  font-weight: 500;
  vertical-align: top;
`

export const ErrorText = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  line-height: inherit;
  margin: 0;
  padding: 0;
`

export const ErrorTextWrapper = styled.div`
  display: inline-block;
  text-align: left;
  line-height: 49px;
  height: 49px;
  vertical-align: middle;
`

export const GoBackButton = styled.button`
  margin-top: 1.5rem;
  transition: 0.3s;
`
