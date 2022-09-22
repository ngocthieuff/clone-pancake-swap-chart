import { CurrencyInputHeader } from "./CurrencyInputHeader";

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
      </>  
    );
}