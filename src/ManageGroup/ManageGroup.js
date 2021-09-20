import React, { useState, useEffect } from 'react'
import style from './ManageGroup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faUser, faObjectGroup, faPlusCircle, faDownload, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'
export default function ManageGroup() {
    const [addGroup, setAddgroup] = useState(true)
    const [edit, setEdit] = useState(true)
    const [uploadGroup, setUploadGroup] = useState({
        name: '',
        date: '',
        description: '',
    })
    const [showUser, setShowUser] = useState([])
    // const [dltUser, setDltUser] = useState([])

    const handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        const newData = { ...uploadGroup }
        newData[event.target.name] = event.target.value;
        setUploadGroup(newData);

    }

    const handleAddGroup = e => {
        // e.preventDefault(true);
        if (uploadGroup !== '') {
            // console.log(service)
            const url = `http://localhost:5000/addGroup`
            console.log(url)
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(uploadGroup)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
            alert('New user added successfully')

        }
    };

    useEffect(() => {
        const url = 'https://salty-sierra-05084.herokuapp.com/showGroup'
        fetch(url)
            .then(response => response.json())
            .then(data => setShowUser(data))
    }, [])

    // delete user from userCollection
    const handleDeleteGroup = (_id) => {
        fetch(`https://salty-sierra-05084.herokuapp.com/deleteGroup/${_id}`, {
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
                addGroup ?
                    " "
                    :
                    <div className="container pt-4 mb-5">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <input type="text" name="name" class="form-control" id="inputName" onBlur={handleChange} placeholder="Name" required />
                            </div>
                            <div class="col-md-6">
                                <input type="text" name="date" class="form-control" id="inputUserName" onBlur={handleChange} placeholder="Create date" required />
                            </div>
                            <div class="col-12">
                                <input type="text" name="description" class="form-control" id="inputEmail" onBlur={handleChange} placeholder="description" required />
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
                                <button type="submit" onClick={handleAddGroup} className={style.user}>Upload</button>
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
                    <button className={style.add} onClick={() => setAddgroup((user) => !user)}>
                        <FontAwesomeIcon icon={faPlusCircle} className={style.ADD} />
                        {
                            addGroup ? <span> Add Group</span> : <span> Don't Add</span>
                        }
                    </button>
                </div>
            </div>

            {
                showUser.map((group) => (
                    <div id={style.table}>
                        <table class="table table-striped border-success">
                            <thead className={style.tableHead}>
                                <tr className={style.tableRow}>
                                    <th className="text-success" scope="col">Group ID</th>
                                    <th className="text-success" scope="col">G.name</th>
                                    <th className="text-success" scope="col">Group description</th>
                                    <th className="text-success" scope="col">C. Date</th>
                                    <th className="text-success" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody className={style.tableData}>
                                <tr>

                                    <td>{group._id}</td>
                                    <td>{group.name}</td>
                                    <td>{group.description}</td>
                                    <td>12/12/21</td>
                                    <td className="d-flex justify-center-end" onClick={() => setEdit((hey) => !hey)}>
                                        <span className="d-flex" id={style.edit}>
                                            <FontAwesomeIcon icon={faPen} className={style.edit}/>
                                            {
                                                edit ? <span>Edit?</span> : <span>No!</span>
                                            }
                                        </span>
                                        <span onClick={() => handleDeleteGroup(group._id)} className="d-flex" id={style.edit}> <FontAwesomeIcon icon={faTrashAlt} className={style.delete} />delete
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
