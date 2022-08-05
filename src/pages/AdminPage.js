import React, { useState } from 'react';

import {Card, Button, Container, Row, Col, Table} from 'react-bootstrap'
import '../styles/AdminPage.css'


function AdminPage(){
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
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Sugeng No Pants</td>
                    <td>Cileungsi</td>
                    <td>16820</td>
                    <td>69.000</td>
                    <td>waiting approve</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Haris Gams</td>
                    <td>Serang</td>
                    <td>42111</td>
                    <td>30.000</td>
                    <td>Success</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
}

export default AdminPage;