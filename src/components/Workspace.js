import DonationForm from "./DonationForm"
import ShowAllDonation from "./ShowAllDonation"
import Login from "./Login"
import {  Routes, Route } from "react-router-dom";
import Item from "./Item";
import UpUser from "./UpUser";
import Home from "./Home";
import UpdateItem from "./UpdateItem";
import AddItem from "./AddItem";
import ItemsList from "./ItemsList";
import Thanks from "./thanks";

export default function WorkSpace() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Home" element={<Home />} />
                <Route  path="/Thanks/:id" element={<Thanks />} />
                <Route path="/Items" element={<ItemsList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/:mes" element={<Login />} />
                <Route path="/donate" element={<DonationForm />} />
                <Route path="/showalldonate" element={<ShowAllDonation />} />
                <Route path="/Item/:id" element={<Item />} />
                <Route path="/UpUser/" element={<UpUser />} />
                <Route path="/Home/" element={<Home />} />
                <Route path="/UpdateItem/:id" element={<UpdateItem />} />
                <Route path="/AddItem/" element={<AddItem />} />
            </Routes>
        </>
    )
}