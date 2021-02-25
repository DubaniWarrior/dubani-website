import React from 'react';
import Styled from 'styled-components';

const FooterStc=Styled.div`
    background:#000;
    padding-top:80px;
    padding-bottom:80px;

    .block
    {
        width:100px;
        height:100px;
        margin-bottom:20px;
        text-align:center;
        font-weight:600;
        font-size:18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .green
    {
        background:green;
    }

    .divMenu
    {
        text-align:right;
        @media (max-width: 768px) {
            display:none;
        }
    }
`;
export default FooterStc;