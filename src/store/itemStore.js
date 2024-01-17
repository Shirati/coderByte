import produce from "immer"
import bed from '../images/bed.jpg'
import beach from '../images/beach.jpg'
import airport from '../images/airport.jpeg'
import camera from '../images/camera.jpg'
import table from '../images/table.jpg'

let id = 6;
export const doId = () => { return id++ };


const initialState = {
    items: [
        { id: 1, name: "table", price: 90, description: "small nice table", img: { table }.table },
        { id: 2, name: "bed", price: 80, description: "comfortable bed", img:  { bed }.bed },
        { id: 3, name: "camera", price: 40, description: "professional camera", img: { camera }.camera },
        { id: 4, name: "flight", price: 40, description: "fly to which country you have dreamt", img: { airport }.airport },
        { id:5, name: "vocation", price: 40, description: "fun focation in Dubai", img: { beach }.beach }


    ], 
    currentItem: { id: -1, name: "", price: 0, description: "", img: "" }
};
console.log({beach});
const itemReducer = produce((state, action) => {

    switch (action.type) {
        case 'addItem':
            state.items.push(action.payload);
            break;
        case 'removeItem':
            state.items.splice(a => a.id === action.payload.id);
            state.items = [...state.items];
            break;
        case 'updateItem':
            state.items.forEach((a) => {
                if (a.id === action.payload.id) {
                    a.name = action.payload.name;
                    a.price = action.payload.price;
                    a.description = action.payload.description;
                    a.img = action.payload.img;
                }
            });
            state.currentItem = action.payload;
        default: return state;
    }
}, initialState);

export default itemReducer;


