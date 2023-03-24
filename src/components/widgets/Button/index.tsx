import Spinner from 'components/utilities/Spinner';

import { NativeButton } from './styles';

const Button = ({
  type,
  children,
  loading,
  disabled,
  style,
  ...props
}: any) => {
  return (
    <NativeButton
      style={style}
      {...props}
      type={type}
      disabled={disabled || loading}
    >
      {!loading && children}
      {loading && <Spinner style={{ position: 'relative' }} />}
    </NativeButton>
  );
};

export default Button;
