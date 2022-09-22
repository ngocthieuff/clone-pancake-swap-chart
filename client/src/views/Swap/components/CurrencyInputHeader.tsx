import styled from 'styled-components';
import { ChartDisableIcon } from '../../../../../../../tut/pancake-frontend/packages/uikit/src/components/Svg';
import Flex from '../../../packages/uikit/src/components/Box/Flex';
import IconButton from '../../../packages/uikit/src/components/Button/IconButton';

const CurrencyInputContainer = styled(Flex)`
    flex-direction: column;
    align-items: center;
    padding: 24px;
    width: 100%;
    border-bottom: 1px solid '#E7E3EB';
`

const ColoredIconButton = styled(IconButton)`
    color: '#7A6EAA';
`

export const CurrencyInputHeader = ({
    title,
    subtitle,
    setIsChartDisplayed,
    isChartDisplayed,
} :
{
    title: string,
    subtitle: string,
    setIsChartDisplayed: any,
    isChartDisplayed: boolean,
}
) => {

    const toggleChartDisplayed = () => {
        setIsChartDisplayed((currentIsChartDisplayed: boolean) => !currentIsChartDisplayed)
    }

    return (
        <CurrencyInputContainer>
            <Flex width="100%" alignItems="center" justifyContent="space-between">
                <ColoredIconButton onClick={toggleChartDisplayed} variant="text" scale="sm">
                    <ChartDisableIcon color="textSubtle" />
                </ColoredIconButton>
            </Flex>
        </CurrencyInputContainer>
    );
}