

import NavBar from '../components/Navbar';
import React, { useEffect,useState } from 'react';
function OtherAssetHistory(){
    const [entrycrypto,setCrypto] = useState(null);
    const [entrycash,setCash] = useState(null);
    const [entrybonds,setBonds] = useState(null);
    const [entrycommod,setCommod] = useState(null);
    const [entryreales,setReales] = useState(null);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:8000/api/CryptoGetPost/?format=json')
            .then(response => response.json())
            .then(data => setCrypto(data));
        
        fetch('http://localhost:8000/api/RealEstateGetPost/?format=json')
            .then(response => response.json())
            .then(data => setReales(data));

        fetch('http://localhost:8000/api/CommodotiesGetPost/?format=json')
            .then(response => response.json())
            .then(data => setCommod(data));
        
        fetch('http://localhost:8000/api/BondsGetPost/?format=json')
            .then(response => response.json())
            .then(data => setBonds(data));
        
        fetch('http://localhost:8000/api/CashGetPost/?format=json')
            .then(response => response.json())
            .then(data => setCash(data));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    
    return(
        <>
            <div>
        
            <NavBar/>
                <h2>Other Asset Order History</h2>
                <table val = "6">
                    <caption>Crypto Currency</caption>
                    <tr>
                        <th scope="col">AssetID</th>
                        <th>Valuation($)</th>
                        <th>Name Of Currency</th>
                        <th>Purchase Price($)</th>
                        <th>Quantity</th>
                    </tr>
                </table>
                <table val = "7">
                    <caption>Commodities</caption>
                    <tr>
                        <th scope="col">AssetID</th>
                        <th>Valuation($)</th>
                        <th>Type Of Commodities</th>
                        
                    </tr>
                </table>
                <table val = "8">
                    <caption>Bond</caption>
                    <tr>
                        <th scope="col">AssetID</th>
                        <th>Valuation($)</th>
                        <th>Face Value($)</th>
                        <th>Maturity Date</th>
                        <th>Interest</th>
                    </tr>
                </table>
                <table val = "9">
                    <caption>Real Estate</caption>
                    <tr>
                        <th scope="col">AssetID</th>
                        <th>Valuation($)</th>
                        <th>Type</th>
                        <th>Location</th>
                       
                    </tr>
                </table>
                <table val = "10">
                    <caption>Cash</caption>
                    <tr>
                        <th scope="col">AssetID</th>
                        <th>Valuation($)</th>
                        <th>Bank</th>
                        <th>Type of Currency</th>
                        
                    </tr>
                </table>
                
                <group>
                    <button onClick={(e) => {window.location.href="/CreateCryptoOrder";}}>Add Crypto</button>
                    <button onClick={(e) => {window.location.href="/CreateRealEstateOrder";}}>Add Real Estate</button>
                    <button onClick={(e) => {window.location.href="/CreateCashOrder";}}>Add Cash</button>
                    <button onClick={(e) => {window.location.href="/CreateBondOrder";}}>Add Bond</button>
                    <button onClick={(e) => {window.location.href="/CreateCommoditiesOrder";}}>Add Commodities</button>
                    
                </group>
                <group2>
                    <button onClick={(e) => {window.location.href="/ModifyCryptoOrder";}}>Modify Crypto</button>
                    <button onClick={(e) => {window.location.href="/ModifyRealEstateOrder";}}>Modify Real Estate</button>
                    <button onClick={(e) => {window.location.href="/ModifyCashOrder";}}>Modify Cash</button>
                    <button onClick={(e) => {window.location.href="/ModifyBondOrder";}}>Modify Bond</button>
                    <button onClick={(e) => {window.location.href="/ModifyCommoditiesOrder";}}>Modify Commodities</button>
                </group2>
               
                
            </div>
        </>
    );
}

export default OtherAssetHistory;