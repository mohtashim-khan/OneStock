import React, { Component } from 'react';
import { useState, useEffect } from "react"
import NavBar from '../components/Navbar';
import "../css/AddBrokerage.css"
import axiosInstance from '../axios';

const AddAccount = () => {

    const [accountType, setType] = useState('TFSA');



    const [brokers, setBrokers] = useState(null);
    const [brokerage, setBrokerage] = useState(null);
    let userinfo = null;
    userinfo = parseJwt(localStorage.getItem('access_token'));

    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    useEffect(() => {
        axiosInstance
            .get('BrokeragesGetPost/')
            .then(response => {
                setBrokers(response.data)
            })
            .catch((err) => {
                console.log(err)
                alert("permission denied");
            }


            );

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        const accountInfo = {
            accountType
        }
        axiosInstance
            .post('AccountGetPost/', {
                user: userinfo.user_id,
                accountType: accountInfo.accountType,
                brokerage: brokerage,

            })
            .catch((err) => {
                alert("Error");
            }
            );

    }

    return (

        <div className="content">
            <NavBar />
            <div className="AddAccount">
                <h2>Add Banking Account</h2>
                <form onSubmit={handleSubmit}>
                    <label>Type: </label>
                    <select
                        name="abcc"
                        required
                        value={accountType}
                        onChange={(e) => setType(e.target.value)}>
                        <option value="TFSA">TFSA</option>
                        <option value="RRSP">RRSP</option>
                        <option value="Non-Registered">Non-Registered</option>
                    </select>

                    <label>Brokerage: </label>
                    <select
                        required
                        value={brokerage}
                        onChange={(e) => setBrokerage(e.target.value)}>

                        {brokers &&
                            brokers.map((broker) => (
                                <option value={broker.name}>{broker.name}</option>
                            ))
                        }
                        {!brokers ? (
                            <option value="No existing broker">No existsing Brokers, Use Add Brokerage Below</option>
                        ) :
                            (<option value="null">Add Additional Brokers Using Add Brokerage Below</option>
                            )
                        }
                    </select>

                    <button>Add Account</button>
                </form>


            </div>

        </div>


    );
}

export default AddAccount;