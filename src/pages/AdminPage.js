import React, { useState } from 'react';

import {Card, Modal, Table} from 'react-bootstrap'
import '../styles/AdminPage.css'
import PurchasedCard from '../components/PurchasedCard';
import { DummyTable } from '../dummyData/FakeDataProduct';


function AdminPage(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className='container' style={{marginTop: 100}}>
            <h1 className='text-red bold-red' 
            style={{marginBottom: 80}}>
                Income Transaction</h1>
            <Table bordered responsive="md" className='table-admin'>
                <thead style={{backgroundColor:'#E5E5E5'}}>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Post Code</th>
                    <th>Income</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:'#FFFFFF'}}>
                    {DummyTable.map((income,index) =>{

                        return(
                            <tr>
                            <td>{income.number}</td>
                            <td>{income.name}</td>
                            <td>{income.address}</td>
                            <td>{income.postcode}</td>
                            <td><a onClick={handleShow}
                            style={{cursor:'pointer'}}
                            >{income.income}</a></td>
                            <td>{income.status}</td>
                            </tr>
                            )
                        }
                    )}
                    
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} centered style={{marginTop: 0}}>
                <PurchasedCard/>
            </Modal>
        </div>
    );
}

export default AdminPage;