import { useState } from "react";
import { SwapForm } from "./components/SwapForm"

export const Swap = () => {
    const [isChartDisplayed, setIsChartDisplayed] = useState(false)
    return <SwapForm                         
    setIsChartDisplayed={setIsChartDisplayed}
    isChartDisplayed={isChartDisplayed}
    />;
}