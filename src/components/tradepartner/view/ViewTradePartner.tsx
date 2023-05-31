import { useEffect, useState } from 'react';
import './ViewTradePartner.css';
import { NavLink } from 'react-router-dom';
import { ITradePartnerData } from '../../../shared/types/ITradePartnerData';

export default () => {
    const [data, setData] = useState<ITradePartnerData>();

    const getData = async () => {
        const response = await fetch('https://esmond-test-json.s3.us-west-2.amazonaws.com/tradepartner.json');

        const responseJson = await response.json();
        
        setData(responseJson);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='view-trade-partner'>
            <div className='view-trade-partner-view'>
                <div className='view-trade-partner-details'>Trade partner details</div>
                <div className='view-trade-partner-row'>
                    <div className='view-trade-partner-column-label'>Id</div>
                    <div className='view-trade-partner-column-value'>{data?.id}</div>
                </div>
                <div className='view-trade-partner-row'>
                    <div className='view-trade-partner-column-label'>Name</div>
                    <div className='view-trade-partner-column-value'>{data?.name}</div>
                </div>
            </div>
            <div className='view-trade-partner-edit'>
                <button className='navigation-button'>
                    <NavLink className='navigation-link' to='edit' state={data}>Edit</NavLink>
                </button>
            </div>
        </div>
    )
};
