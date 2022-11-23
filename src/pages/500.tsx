import React from 'react'
import ErrorPage from "components/utilities/ErrorPage";

const ServerError = () => {
    return <ErrorPage statusCode={500} />;
};

export default ServerError
