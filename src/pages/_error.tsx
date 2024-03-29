import ErrorPage from 'components/utilities/ErrorPage';
import { NextPageContext } from "next";
import { ErrorProps } from "next/error";

function Error({ statusCode }: ErrorProps) {
  return <ErrorPage statusCode={statusCode} />;
}

export const getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
