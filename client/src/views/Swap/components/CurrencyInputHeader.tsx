import styled from 'styled-components';
import Flex from '../../../packages/uikit/src/components/Box/Flex';
import IconButton from '../../../packages/uikit/src/components/Button/IconButton';

const CurrencyInputContainer = styled(Flex)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    width: 100%;
    border-bottom: 1px solid '#E7E3EB';
`

const ColoredIconButton = styled(IconButton)`
    color: '#7A6EAA';
`

export const CurrencyInputHeader = () => {
    return (
        <p>CurrencyInputHeader</p>
    )
}