import Box from "packages/uikit/src/components/Box/Box"
import Flex from "packages/uikit/src/components/Box/Flex"
import Button from "packages/uikit/src/components/Button/Button"
import styled, { css } from "styled-components"

type ZapStyle = 'noZap' | 'zap'
    
const CurrencySelectButton = styled(Button).attrs({ variant: 'text', scale: 'sm' })<{ zapStyle?: ZapStyle }>`
        padding: 0 0.5rem;

        ${({ theme }) =>
            css`
            padding: 8px;
            background: ${theme.colors.background};
            border: 1px solid ${theme.colors.cardBorder};
            border-radius: 8px 8px 0px 0px;
            height: auto;
            `};
        `

export const CurrencyInputPanel = ({ currency, disableCurrencySelect } : { currency: any, disableCurrencySelect: boolean }) => {
    
    
    return (
        <Box position="relative">
            <Flex alignItems="center" justifyContent="space-between">
                <Flex>
                    <CurrencySelectButton
                        className="open-currency-select-button"
                        selected={!!currency}
                        onClick={() => {
                            if(!disableCurrencySelect) {
                               // onPresentCurrencyModal()
                            }
                        }}
                    >

                    </CurrencySelectButton>
                </Flex>
            </Flex>
        </Box>
    )
}