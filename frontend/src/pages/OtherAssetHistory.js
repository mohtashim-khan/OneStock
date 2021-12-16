

import NavBar from '../components/Navbar';
import React, { useEffect,useState } from 'react';
import axiosInstance from '../axios';
function OtherAssetHistory(){
    const [entrycryptos,setCrypto] = useState(null);
    const [entrycashs,setCash] = useState(null);
    const [entrybonds,setBonds] = useState(null);
    const [entrycommods,setCommod] = useState(null);
    const [entryreales,setReales] = useState(null);
    
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        axiosInstance
        .get("CryptoGetPost/")
            .then(response => {
                setCrypto(response.data)
            })
            .catch((err) => {
                alert("permission denied");
            }

            );
        
        axiosInstance
        .get("RealEstateGetPost/")
            .then(response => {
                setReales(response.data)
            })
            .catch((err) => {
                alert("permission denied");
            }

            );

        axiosInstance
        .get("CommodotiesGetPost/")
            .then(response => {
                setCommod(response.data)
            })
            .catch((err) => {
                alert("permission denied");
            }

            );
        
        
        axiosInstance
        .get("BondsGetPost/")
            .then(response => {
                setBonds(response.data)
            })
            .catch((err) => {
                alert("permission denied");
            }

            );
        
        axiosInstance
        .get("CashGetPost/")
            .then(response => {
                setCash(response.data)
            })
            .catch((err) => {
                alert("permission denied");
            }

            );
    
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
                    {entrycryptos&&
                        entrycryptos.map((entrycrpyto) => (
                            <tr>
                                <th>{entrycrpyto.id}</th>
                                <th>{entrycrpyto.valuation}</th>
                                <th>{entrycrpyto.name}</th>
                                <th>{entrycrpyto.purchasePrice}</th>
                                <th>{entrycrpyto.quantity}</th>
                                
                            </tr>
                        ))
                    }
                </table>
                <table val = "7">
                    <caption>Commodities</caption>
                    <tr>
                        <th scope="col">AssetID</th>
                        <th>Valuation($)</th>
                        <th>Type Of Commodities</th>
                        
                    </tr>
                    {entrycommods&&
                        entrycommods.map((entrycommod) => (
                            <tr>
                                <th>{entrycommod.id}</th>
                                <th>{entrycommod.valuation}</th>
                                <th>{entrycommod.type}</th>
                                
                            </tr>
                        ))
                    }
                </table>
                <table val = "8">
                    <caption>Bond</caption>
                    <tr>
                        <th scope="col">AssetID</th>
                        <th>Valuation($)</th>
                        <th>Principal Value($)</th>
                        <th>Maturity Date</th>
                        <th>Interest</th>
                    </tr>
                    {entrybonds&&
                        entrybonds.map((entrybond) => (
                            <tr>
                                <th>{entrybond.id}</th>
                                <th>{entrybond.valuation}</th>
                                <th>{entrybond.principal}</th>
                                <th>{entrybond.maturityDate}</th>
                                <th>{entrybond.interest}</th>
                                
                            </tr>
                        ))
                    }
                </table>
                <table val = "9">
                    <caption>Real Estate</caption>
                    <tr>
                        <th scope="col">AssetID</th>
                        <th>Valuation($)</th>
                        <th>Type</th>
                        <th>Location</th>
                       
                    </tr>
                    {entryreales&&
                        entryreales.map((entryreale) => (
                            <tr>
                                <th>{entryreale.id}</th>
                                <th>{entryreale.valuation}</th>
                                <th>{entryreale.type}</th>
                                <th>{entryreale.location}</th>
                                
                            </tr>
                        ))
                    }
                </table>
                <table val = "10">
                    <caption>Cash</caption>
                    <tr>
                        <th scope="col">AssetID</th>
                        <th>Valuation($)</th>
                        <th>Bank</th>
                        <th>Type of Currency</th>
                        
                    </tr>
                    {entrycashs&&
                        entrycashs.map((entrycash) => (
                            <tr>
                                <th>{entrycash.id}</th>
                                <th>{entrycash.valuation}</th>
                                <th>{entrycash.bank}</th>
                                <th>{entrycash.currency}</th>
                                
                            </tr>
                        ))
                    }
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