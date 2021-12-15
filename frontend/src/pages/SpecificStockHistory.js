
import "../css/SearchBar.css"
import NavBar from '../components/Navbar';
import React, { useEffect,useState } from 'react';
function SpecificStockHistory(){
    const [entryorders,setOrder] = useState(null);
    const [entrydividend,setDividend] = useState(null);
    const [entryStock,setStock] = useState(null);
    const [ticker, setTicker] = useState('');
    const [button, setButton] = useState(null);
    
    // useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('http://localhost:8000/api/SpecificStockOrderHistoryGetPost/?format=json&ticker='+ticker)
    //         .then(response => response.json())
    //         .then(data => setentrys(data));
            
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

   


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/api/SpecificStockOrderHistoryGetPost/?format=json&ticker='+ticker)
            .then(response => response.json())
            .then(data => setOrder(data));
            

        fetch('http://localhost:8000/api/DividendGetPost/?format=json&ticker='+ticker)
            .then(response => response.json())
            .then(data => setDividend(data));

        fetch('http://localhost:8000/api/StockGetPost/?format=json&ticker='+ticker)
            .then(response => response.json())
            .then(data => setStock(data));
    }
    

    return(
        <>

        <div>
            <NavBar />
            <h2>Specific Stock Information</h2>
            <p2> Specific Stock Performance: </p2>
            <net_back>%3.9</net_back>
            <p3>Stock Net Value:</p3>
            <over_back>$1,221.02</over_back>
            <table val = "1">
                <caption>Dividend Information</caption>
                <tr>
                    <th scope="col">Ticker</th>
                    <th>Dividend Yield(%)</th>
                    <th>Dividend Last Paid($)</th>
                    <th>Total Accumulated($)</th>
                    <th>Account</th>
                </tr>
            </table>
            <table val = "3">
                <caption>Shares Information</caption>
                <tr>
                    <th scope="col">Ticker</th>
                    <th>Average Purchase Price($)</th>
                    <th>Current Price($)</th>
                    <th>Shares Owned</th>
                    <th>Account</th>
                </tr>
            </table>
            <table val = "4">
                <caption>Order History</caption>
                <tr>
                    <th scope="col">Buy/Sell</th>
                    <th>Order ID</th>
                    <th>Amount</th>
                    <th>Purchase/Sell Price($)</th>
                    <th>Date</th>
                    <th>Account</th>
                </tr>
            </table>
           

            <form class="form-wrapper" onSubmit={handleSubmit}>
                
                    
                <input type="text" placeholder="Enter Specific Ticker e.g TSLA.." onChange={(e) => setTicker(e.target.value)}></input>
                <input type="submit" name="submit" value="Search" /> 
                
                
            </form>



        </div>
        </>
    );
}

export default SpecificStockHistory;