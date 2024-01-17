import { useSelector } from "react-redux"
import Donation from "./Donation"
import { Navigate } from "react-router-dom"
import Divider from '@mui/material/Divider';
import { List } from "@mui/material";

export default function ShowAllDonation() {
  const donationsStore = useSelector(state => state.donations.donations)
  const Ismanager = useSelector(state => state.users.isManager)

  if (!Ismanager)
    return <Navigate to={`/Home`} replace />;

  return (
    <>
      <h1 style={{ fontFamily: 'Segoe Print,Arial', textAlign: 'center', color: '#b3003b' }}>All The Donations</h1>

      <List sx={{ width: '100%', maxWidth: 500 }} >

        <Divider variant="inset" sx={{ backgroundColor: '#E29BB1' }} />
        {donationsStore && donationsStore.map((d, i) => <Donation key={i} userName={d.userName} items={d.items} />)}
      </List>
    </>
  )
}