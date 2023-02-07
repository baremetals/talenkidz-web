import React, { ReactNode } from 'react';
import { Text } from 'styles/common.styles';
import { FormGroup } from '../auth-styles';

interface props {
  children: ReactNode
}

const LinkWrapper = ({ children }: props) => {
  return (
    <FormGroup style={{ marginBottom: '0', textAlign: 'center' }}>
      <Text
        style={{
          marginBottom: '0',
          color: '#120D26',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '16.8px',
          padding: '0 30px',
        }}
      >
        {children}
      </Text>
    </FormGroup>
  );
};

export default LinkWrapper;