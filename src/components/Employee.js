import React from 'react'
import {UserProvider, UserConsumer} from './userContext'

export default function Employee () {
 
    return (
        <div>
            <UserConsumer>
                {

                (data) => {
                    return <div>
                        {
                    data.map(same => {
                        return <div>
                            {console.log(same.employee_name)}
                            <h2>{same.employee_name}</h2>
                            <h2>{same.employee_salary}</h2>
                            <h2>{same.employee_age}</h2>
                        </div>
                    })
                }
                    </div>
                }
            }
            </UserConsumer>
        </div>
    )
}