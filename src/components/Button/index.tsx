import React from "react";
import Spinner from "components/Spinner";

import { NativeButton } from './styles';

const Button = ({ type, children, loading, disabled, ...props }: any) => {
    return (
        <NativeButton {...props} type={type} disabled={disabled || loading}>
            {!loading && children}
            {loading && <Spinner style={{ position: 'relative' }} />}
        </NativeButton>
    );
};

export default Button;