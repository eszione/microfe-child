import { useEffect } from 'react';
import './AddTradePartner.css';
import { toast } from 'react-toastify';

export default () => {
    const pushData = async () => {
        const response = await fetch('https://esmond-test-json.s3.us-west-2.amazonaws.com/tradepartner.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: 123, name: 'Trade partner 123'})
        });

        if (response.ok) {
            toast('Uploaded!');
        }
    };

    useEffect(() => {
        pushData();
    }, []);

    return (
        <div className='add-trade-partner'>TradePartner: 123</div>
    )
};
