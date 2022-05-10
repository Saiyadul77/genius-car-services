import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';

const CheckOut = () => {
    const {serviceId}= useParams();
    const [service]=useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handleUser= event=>{
        event.preventDefault();
        const order={
            name: user.name,
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('https://agile-badlands-59334.herokuapp.com/order', order)
        .then(response=>{
            const {data}=response;
            if(data.insertedId){
                toast('Your order is Booked!!');
                event.target.reset();
            }
        })

    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Please Order: {service.name}</h1>
            <form onSubmit={handleUser}>
                <input className='w-100 mb-2' type="text" name="name" value={user?.displayName} placeholder='Name' id="" required readOnly disabled/><br />
                <input className='w-100 mb-2' type="email" name="email" value={user?.email} placeholder='email' id="" required readOnly disabled/><br />
                <input className='w-100 mb-2' type="text" name="service" value={service.name} placeholder='Service' id="" required readOnly disabled/><br />
                <input className='w-100 mb-2' type="text" name="address" autoComplete="off" placeholder='Address' id="" required/><br />
                <input className='w-100 mb-2' type="text" name="phone" autoComplete='off' placeholder='Contact Number' id="" required/>
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />

            </form>
        </div>
    );
};

export default CheckOut;