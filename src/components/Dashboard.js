import React from 'react'
import { UserConsumer } from './userContext'
import Employee from './Employee'

function loadAgain(){
   // window.location.reload(false);
   window.location.href = '/';
}


export default function Dashboard() {
    return (
        <div>
            <div>
                <Employee />

            </div>
          
        </div>
    )
}
