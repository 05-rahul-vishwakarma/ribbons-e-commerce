import React from 'react'
import RibbonCard from '../PopuplarRibbon/RibbonCard'
import AvailableRibbon from '../PopuplarRibbon/AvailableRibbon';
import MoreRibbonCard from '../MoreRibbonCard';
import DiscovermoreRibbon from '../PopuplarRibbon/DiscovermoreRibbon';
export default function PopRibbonCard() {
  return (
    <section className="">  
      <div className=""> {/* Wrap and center the RibbonCard */}  
        <RibbonCard />  
      </div> 
      <MoreRibbonCard/>
      <AvailableRibbon />  
      <DiscovermoreRibbon/>
    </section>  
  )
}
