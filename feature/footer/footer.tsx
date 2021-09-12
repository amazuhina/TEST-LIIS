import React from 'react'
import styled from 'styled-components'
import {View} from 'react-native';
import { BtnAdd } from '../../components/buttons/btn-add';


const FooterStl = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`



export const Footer: React.FunctionComponent = () => {

    return (
        <FooterStl>
            <BtnAdd/>
        </FooterStl>
    )
}