import React from 'react'
import style from './ManageUser.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faUser, faObjectGroup, faPlusCircle, faDownload } from '@fortawesome/free-solid-svg-icons'
export default function ManageUser() {
    return (
        <div className="container" id={style.admin}>
            <div className={style.title}>
                <h1 className="text-center pt-4">Welcome to Admin</h1>
            </div>
            <p className={style.userSummary}>Summary</p>
            <div className="d-flex justify-content-evenly" >
                <div className={style.boxOne}>
                    <p><FontAwesomeIcon icon={faUserShield} className={style.icon} /> Admins</p>
                </div>
                <div className={style.boxTwo}>
                    <p><FontAwesomeIcon icon={faUser} className={style.icon} /> User</p>
                </div>
                <div className={style.boxThree}>
                    <p><FontAwesomeIcon icon={faObjectGroup} className={style.icon} /> Groups</p>
                </div>
                <div className={style.boxFour}>
                    <p><FontAwesomeIcon icon={faPlusCircle} className={style.icon} />Roles</p>
                </div>
            </div>
            <div className="d-flex mt-4 container justify-content-">
                <div className="d-flex align-items-start">
                    <button className={style.button}><FontAwesomeIcon icon={faDownload} className={style.icon}/>Download CSV</button>
                    <button className={style.button}><FontAwesomeIcon icon={faDownload} className={style.icon}/>Download CSV</button>
                </div>

                <div className="add justify-content-end">
                    <button className={style.add}><FontAwesomeIcon icon={faPlusCircle} className={style.icon}/> Add User</button>
                </div>
            </div>

        </div>
    )
}
