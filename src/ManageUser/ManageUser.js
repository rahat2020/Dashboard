import React from 'react'
import style from './ManageUser.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faUser, faObjectGroup, faPlusCircle, faDownload } from '@fortawesome/free-solid-svg-icons'
export default function ManageUser() {
    return (
        <div className="container mb-5" id={style.admin}>
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
            <div className="d-flex mt-4 container" >
                <div className="d-flex" id={style.left}>
                    <button className={style.buttonOne}><FontAwesomeIcon icon={faDownload} className={style.CSV} />Download CSV</button>
                    <button className={style.button}><FontAwesomeIcon icon={faDownload} className={style.PDF} />Download PDF</button>
                </div>

                <div className="ms-auto">
                    <button className={style.add}><FontAwesomeIcon icon={faPlusCircle} className={style.ADD} /> Add User</button>
                </div>
            </div>

            <div className="container pt-4 mb-5">
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" className={style.user}>Add User</button>
                    </div>
                </form>
            </div>

            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
