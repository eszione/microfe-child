import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './EditTradePartner.css';
import { ITradePartnerData } from '../../../shared/types/ITradePartnerData';
import { useState } from 'react';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';

export default () => {
    const location: { state: ITradePartnerData } = useLocation();
    const [data, setData] = useState(location?.state);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const update = (event: FormEvent<HTMLInputElement>, field: string) => {
        const newData = { ...data, [field]: event.currentTarget.value };
        setData(newData);
    };

    const save = async () => {
        setLoading(true);
        const response = await fetch('https://esmond-test-json.s3.us-west-2.amazonaws.com/tradepartner.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            toast('Uploaded!');
            navigate('/tradepartners');
        }
        setLoading(false);
    };

    return (
        <div className='edit-trade-partner'>
            <div className='edit-trade-partner-view'>
                <div className='edit-trade-partner-details'>Trade partner details</div>
                <div className='edit-trade-partner-row'>
                    <div className='edit-trade-partner-column-label'>Id</div>
                    <input className='edit-trade-partner-column-input' defaultValue={data?.id} onChange={(event) => update(event, 'id')} />
                </div>
                <div className='edit-trade-partner-row'>
                    <div className='edit-trade-partner-column-label'>Name</div>
                    <input className='edit-trade-partner-column-input' defaultValue={data?.name} onChange={(event) => update(event, 'name')}/>
                </div>
            </div>
            <div className='edit-trade-partner-edit'>
                <button className='back-button'><NavLink className='back-link' to='/tradepartners'>Back</NavLink></button>
                <button className='save-button' onClick={save} disabled={loading}>Save</button>
            </div>
        </div>
    )
};
