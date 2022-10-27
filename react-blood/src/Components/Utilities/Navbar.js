import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png";
import RootReducer from "../Redux/RootReducer"
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../Config/FirebaseConfig';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import UserDetaill from '../Utilities/UserDetaill';
import UserDetaillUpdate from '../Utilities/UserDetaillUpdate';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [openUpdate, setopenUpdate] = useState(false)
    const [ModalData, setModalData] = useState()
    const CurrentUser = useSelector(state => state.CurrentUser)
    const AllUsers = useSelector(state => state.AllUser)
    const [menu_nav, setmenu_nav] = useState()

    const dispatch = useDispatch(RootReducer)

    function openNav() {
        setmenu_nav({ width: "100%" })
    }
    function closeNav() {
        setmenu_nav({ width: "0" })
    }

    function onOpenModal(onOpenData) {
        setModalData(onOpenData)
        setOpen(true)
    }

    function onOpenUpdate(onUpdateData) {
        setModalData(onUpdateData)
        setopenUpdate(true)
    }

    function onCloseUpdate(onUpdateData) {
        setopenUpdate(false)
    }

    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        CheckUser()
    }, [])

    function CheckUser() {
        firebase.auth().onAuthStateChanged(function (login_user) {
            if (login_user) {
                const CurrentUserPayload = AllUsers[Object.keys(AllUsers).filter(user => AllUsers[user].Email == login_user.email)[0]]
                const user_dict_key = Object.keys(AllUsers).filter(user => AllUsers[user].Email == login_user.email)
                // console.log("CurrentUserPayload", CurrentUserPayload)
                dispatch({
                    type: "GetCurrentUser",
                    payload: user_dict_key,
                })
            }
        });
    }

    function LogOut(event) {
        event.preventDefault()
        firebase.auth().signOut().then(function () {
            console.log("LoggedOut")
            dispatch({
                type: "LoggedOutUser"
            })
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
    }


    return (
        <>
            
            <section className="logo_header flex h-20 px-8 md:px-16 lg:px-32  border-b-2 border-red-400">
                
                <div
                    className="logo_header__nav h-20 bg-red hidden lg:flex justify-between h-full items-center gap-11 text-xl font-medium text-gray-700">
                    <Link to="" className="border-b-4 border-transparent hover:border-red-600 mr-20">Home</Link>
                    <a href="/#About_Us" className="border-b-4 border-transparent hover:border-red-600 mr-20">Purpose</a>
                    <a href="#Team" className="border-b-4 border-transparent hover:border-red-600 mr-20">Benifits</a>
                    <Link to="/donor_list" className="border-b-4 border-transparent hover:border-red-600 mr-20">Donor List</Link>
                    <Link to="/sign_up" className="border-b-4 border-transparent hover:border-red-600 mr-20">Sign Up</Link>
                    {
                        (AllUsers[CurrentUser]) ?
                            (
                                <>
                                    <div className="dropdown">
                                        <p className="dropbtn border-b-4 border-transparent"><i className="fa   fa-user-circle"></i> {AllUsers[CurrentUser].Full_Name.split(" ")[AllUsers[CurrentUser].Full_Name.split(" ").length - 1]}</p>
                                        <div className="dropdown-content">
                                            <a onClick={() => onOpenModal(CurrentUser)} href="#" className="border-b-4 border-transparent hover:border-red-600">Profile</a>
                                            <Link to="/update_profile" className="border-b-4 border-transparent hover:border-red-600">Update  Profile</Link>
                                            <a onClick={(event) => LogOut(event)} href="#" className="border-b-4 border-transparent hover:border-red-600">Logout</a>
                                        </div>
                                    </div>
                                    <Modal open={open} onClose={onCloseModal}>
                                        {
                                            ModalData ? (
                                                <UserDetaill
                                                    Full_Name={AllUsers[ModalData].Full_Name}
                                                    Email={AllUsers[ModalData].Email}
                                                    Phone={AllUsers[ModalData].Phone}
                                                    Blood_Group={AllUsers[ModalData].Blood_Group}
                                                    Gender={AllUsers[ModalData].Gender}
                                                    Division={AllUsers[ModalData].Division}
                                                    District={AllUsers[ModalData].District}
                                                    Upazila={AllUsers[ModalData].Upazila}
                                                    Location={AllUsers[ModalData].Location}
                                                    Last_Donated={AllUsers[ModalData].Last_Donated}
                                                />
                                            ) : ""
                                        }
                                    </Modal>
                                    <Modal open={openUpdate} onClose={onCloseUpdate}>
                                        {
                                            ModalData ? (
                                                <UserDetaillUpdate
                                                    DictKey={ModalData[0]}
                                                    Full_Name={AllUsers[ModalData].Full_Name}
                                                    Email={AllUsers[ModalData].Email}
                                                    Phone={AllUsers[ModalData].Phone}
                                                    Blood_Group={AllUsers[ModalData].Blood_Group}
                                                    Gender={AllUsers[ModalData].Gender}
                                                    Division={AllUsers[ModalData].Division}
                                                    District={AllUsers[ModalData].District}
                                                    Upazila={AllUsers[ModalData].Upazila}
                                                    Location={AllUsers[ModalData].Location}
                                                    Last_Donated={AllUsers[ModalData].Last_Donated}
                                                />
                                            ) : ""
                                        }
                                    </Modal>
                                </>

                            ) : (
                                <Link to="/login" className="border-b-4 border-transparent hover:border-red-600">Login</Link>
                            )
                    }
                </div>
            </section>
        </>
    )
}

export default Navbar
