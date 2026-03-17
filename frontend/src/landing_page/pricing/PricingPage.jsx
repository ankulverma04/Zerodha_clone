import react from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import PriceTable from './PriceTable';
import Charges from './Charges';
function PrincingPage(){
    return(
        <>
        <Hero/>
        <Brokerage/>
        <PriceTable/>
        <Charges/>
        </>
    );
}
export default PrincingPage;