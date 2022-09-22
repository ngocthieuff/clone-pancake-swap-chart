import { AutoColumn } from "../../../components/Layout/Column";
import { CurrencyInputHeader } from "./CurrencyInputHeader";
import { Wrapper } from "./styleds";

export const SwapForm = (
    { setIsChartDisplayed, isChartDisplayed } 
    : 
    { setIsChartDisplayed: any, isChartDisplayed: boolean}
) => {
    return (
      <>
        <CurrencyInputHeader
                title={'Swap'} 
                subtitle={"Trade tokens in an instant"} 
                setIsChartDisplayed={setIsChartDisplayed} 
                isChartDisplayed={isChartDisplayed} 
            />
        <Wrapper id="swap-page" style={{ minHeight: '412px' }}>
          <AutoColumn gap="sm">
          </AutoColumn>
        </Wrapper>
      </>  
    );
}