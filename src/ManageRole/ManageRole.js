import React, { useState, useEffect } from 'react'
import style from './ManageRole.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faUser, faObjectGroup, faPlusCircle, faDownload, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'
export default function ManageRole() {
    const [addAdmin, setAddadin] = useState(true)
    const [edit, setEdit] = useState(true)
    const [uploadAdmin, setUploadAdmin] = useState({
        name: '',
        date: '',
        email: '',
    })
    const [showUser, setShowUser] = useState([])
    // const [dltUser, setDltUser] = useState([])

    const handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        const newData = { ...uploadAdmin }
        newData[event.target.name] = event.target.value;
        setUploadAdmin(newData);

    }

    const handleAddAdmin = e => {
        // e.preventDefault(true);
        if (uploadAdmin !== '') {
            // console.log(service)
            const url = `http://localhost:5000/addAdmin`
            console.log(url)
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(uploadAdmin)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
            alert('New user added successfully')

        }
    };

    useEffect(() => {
        const url = 'https://salty-sierra-05084.herokuapp.com/showAdmin'
        fetch(url)
            .then(response => response.json())
            .then(data => setShowUser(data))
    }, [])

    // delete user from userCollection
    const handleDeleteAdmin = (_id) => {
        fetch(`https://salty-sierra-05084.herokuapp.com/deleteAdmin/${_id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res) {
                    alert('delted successfully');
                    console.log(res)
                }
            })

        console.log('button is clcked')
    }

    return (
        <div className="container mb-5" id={style.admin}>
            <div className="pt-4 d-flex justify-content-between" id={style.title}>
                <p><span className={style.adminTitle}>Dashboard </span>//<span className={style.adminTitle}>Admin</span> </p>
                <button className={style.adminButton}>:)Dashboard</button>
            </div>
            <p className={style.userSummary}>Summary</p>

            {
                addAdmin ?
                    " "
                    :
                    <div className="container pt-4 mb-5">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <input type="text" name="name" class="form-control" id="inputName" onBlur={handleChange} placeholder="Admin Name" required />
                            </div>
                            <div class="col-md-6">
                                <input type="text" name="date" class="form-control" id="inputUserName" onBlur={handleChange} placeholder="Create date" required />
                            </div>
                            <div class="col-12">
                                <input type="text" name="email" class="form-control" id="inputEmail" onBlur={handleChange} placeholder="Admin email" required />
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" required />
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" onClick={handleAddAdmin} className={style.user}>Upload</button>
                            </div>
                        </form>
                    </div>
            }

            {
                edit ?
                    " "
                    :
                    <div class="container">
                        <div class="toast-body text-success">
                            Hey, You want edit?😄 But I didn't implement that! sorry😟'.
                        </div>
                    </div>
            }
            <div className="d-flex justify-content-evenly">
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
            <div className="d-flex mt-4 container mb-3" >
                <div className="d-flex" id={style.left}>
                    <button className={style.buttonOne}><FontAwesomeIcon icon={faDownload} className={style.CSV} />Download CSV</button>
                    <button className={style.button}><FontAwesomeIcon icon={faDownload} className={style.PDF} />Download PDF</button>
                </div>
                <div className="ms-auto">
                    <button className={style.add} onClick={() => setAddadin((user) => !user)}>
                        <FontAwesomeIcon icon={faPlusCircle} className={style.ADD} />
                        {
                            addAdmin ? <span> Add Admin</span> : <span> Don't Add</span>
                        }
                    </button>
                </div>
            </div>

            {
                showUser.map((group) => (
                    <div className="" id={style.table}>
                        <table class="table table-striped border-success">
                            <thead className={style.tableHead}>
                                <tr className={style.tableRow}>
                                    <th className="text-success" scope="col">Admin ID</th>
                                    <th className="text-success" scope="col">A.name</th>
                                    <th className="text-success" scope="col">A.Email</th>
                                    <th className="text-success" scope="col">C. Date</th>
                                    <th className="text-success" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody className={style.tableData}>
                                <tr>

                                    <td >{group._id}</td>
                                    <td >{group.name}</td>
                                    <td >{group.email}</td>
                                    <td >12/12/21</td>
                                    <td className="d-flex justify-center-end">
                                        <span className="d-flex" id={style.edit} onClick={() => setEdit((hey) => !hey)}>
                                            <FontAwesomeIcon icon={faPen} className={style.edit} />
                                            {
                                                edit ? <span>Edit?</span> : <span>No!</span>
                                            }
                                        </span>
                                        <span onClick={() => handleDeleteAdmin(group._id)} className="d-flex" id={style.edit}> <FontAwesomeIcon icon={faTrashAlt} className={style.delete} />delete
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))
            }



        </div>
    )
}
