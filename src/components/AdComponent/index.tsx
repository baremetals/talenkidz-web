import React, { useState } from 'react'
import { AdBlock } from "../../styles/common.styles";
type sizeProps = {
    height: number
    width: number
}

AdComponent.defaultProps = {
    width: 300,
    height: 250
  }

function AdComponent({ height, width }: sizeProps) {
    return (
        <>
            <AdBlock style={{height: height, width: width}}>
                <h2 style={{margin: 33, color: '#fff', textAlign: 'center' }}>Advertisement</h2>
            </AdBlock>
        </>
    );
}

export default AdComponent