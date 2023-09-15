import Nav from "../DashBoardComponent/Nav"
import './Dashboard.css'
import SideBar from "../DashBoardComponent/SideBar"
 import LineChart from "../DashBoardComponent/LineChart"
import Downpart from "../DashBoardComponent/Downpart"
const page = () => {
  return (
    <div>
   <SideBar/>
    <Nav/>
   <LineChart/>
   <Downpart/>

    </div>
  )
}

export default page