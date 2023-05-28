import '../styles/sidebarpayment.css'
import person from '../../../assets/person/person1.png'
import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function SideBarAdmin({ children }) {
    const menuItem = [
      {
        path: "/profile",
        name: "Akun Saya ",
        icon: <FaUserAlt />,
      },
      {
        path: "/order/status",
        name: "Pesanan Saya",
        icon: <FaUserAlt />,
      },
      
    ];
  return (

<>

<div className="ant-sidenav">
   <img src={person} alt="brand little" className="ant-little-brand img-fluid" /> 
   <ul className="ant-list-clip">
  {menuItem.map((item, index) => {
    return (
      <li key={index}>
        <NavLink to={item.path}>
          <span className="icon">{item.icon} {item.name}</span>
          
        </NavLink>
      </li>
      
    );
  })}
 

</ul>
</div>


<div className="container-fluid">
  <div className="row">
  <div className="col ant-content d-flex align-items-stretch">
   {children}
    </div>
    <div>
      
    </div>
  </div>
</div>

</>    
  )
}