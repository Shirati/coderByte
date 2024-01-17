import produce from "immer"
import bed from '../images/bed.jpg'
import beach from '../images/beach.jpg'
import airport from '../images/airport.jpeg'
import camera from '../images/camera.jpg'
import table from '../images/table.jpg'

let id = 4;
export const doId = () => { return id++ };



const initialState = {
    donations:
        [{
            id: 1, userId: 3, userName: "avi",
            items: [
                { id: 3, name: "camera", price: 40, description: "professional camera", img: { camera }.camera },
                { id: 4, name: "flight", price: 40, description: "fly to which country you have dreamt", img: { airport }.airport },
                { id: 5, name: "vocation", price: 40, description: "fun focation in Dubai", img: { beach }.beach }]
        },
        {
            id: 2, userId: 2, userName: "ran",
            items: [
                { id: 1, name: "table", price: 90, description: "small nice table", img: { table }.table },
                { id: 2, name: "bed", price: 80, description: "comfortable bed", img: { bed }.bed },
                { id: 3, name: "camera", price: 40, description: "professional camera", img: { camera }.camera },
                { id: 4, name: "flight", price: 40, description: "fly to which country you have dreamt", img: { airport }.airport },
                { id: 5, name: "vocation", price: 40, description: "fun focation in Dubai", img: { beach }.beach }
            ]
        },
        {
            id: 3, userId: 4, userName: "eli",
            items: [
                { id: 1, name: "table", price: 90, description: "small nice table", img: { table }.table },
                { id: 5, name: "vocation", price: 40, description: "fun focation in Dubai", img: { beach }.beach }
            ]
        }]
};

const donationReducer = produce((state, action) => {

    switch (action.type) {
        case 'addDonation':

            // return {
            //     ...state, donations: [...state.donations, action.payload]
            // };
            action.payload.id = doId();
            console.log("addDon");
            state.donations.push(action.payload);

    }

}, initialState)

export default donationReducer;