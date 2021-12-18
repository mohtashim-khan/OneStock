import React, { Component } from 'react';
import { useState, useEffect } from "react"
import NavBar from '../components/Navbar';
import "../css/AddBrokerage.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

const AddAccount = () => {

    const [accountType, setType] = useState('TFSA');
    const navigate = useNavigate();



    const [brokers, setBrokers] = useState(null);
    const [brokerage, setBrokerage] = useState(null);
    const [brokerageName, setBrokerageName] = useState(null);

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

        let name = null;

        for (var i = 0; i < brokers.length; i++) {
            if (brokers[i].id == brokerage) {
                name = brokers[i].name;
                break;
            }
        }

        axiosInstance
            .post('AccountGetPost/', {
                user: userinfo.user_id,
                accountType: accountInfo.accountType + "-" + name,
                brokerage: brokerage,

            }).then((res) => {
                alert("ACCOUNT ADDED!");
                navigate("/StockOrderHistory");
            }
            )

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
                        onChange={(e) =>
                            setBrokerage(e.target.value)
                        }>

                        {brokers &&
                            brokers.map((broker) => (
                                <option value={broker.id}>{broker.name}</option>
                            ))
                        }
                        {!brokers ? (
                            <option value="No existing broker">Please Choose A Valid Brokerage, Else Add Brokerages</option>
                        ) :
                            (<option value="null"></option>
                            )
                        }
                    </select>

                    <button>Add Account</button>
                </form>

                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/AddBrokerage";
                }
                }>Add New Brokerage</button>


            </div>

        </div>


    );
}

export default AddAccount;