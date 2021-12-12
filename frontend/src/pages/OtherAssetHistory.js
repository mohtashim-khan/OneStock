import React from 'react'
import NavBar from '../components/Navbar';


function OtherAssetHistory(){
    return(
        <>
            <NavBar />
            <div>
                
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
                    <button>Add Asset</button>
                    <button>Delete Asset</button>
                    <button>Modify Asset by ID</button>
                </group>
               
                
            </div>
        </>
    );
}

export default OtherAssetHistory;