import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./hcmember.css";
import Analytics from './analytics';
import HoursChart from './hoursChart';
import AllStats from './allstats';

const HCMember = () => {
  const [members, setMembers] = useState([]);
  const [nonmembers, SetNonmembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [nsearchTerm, setNSearchTerm] = useState("");
  const [status,setStatus]=useState();

  useEffect(() => {
    axios.get('/users')
      .then(response => {
        setMembers(response.data);
		const map1 = new Map();
		response.data.map(x=>map1.set(x.emailAddress,false));
		setStatus(map1);
		console.log(map1)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get('/nonusers')
      .then(response => {
        SetNonmembers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearch1 = (event) => {
    setNSearchTerm(event.target.value);
  }

  const handleLogout = () => {
    console.log("Logout came")
    localStorage.removeItem('auth');
    navigate('/login');
  }

  const handleCheckin = (member) => {
  const updatedStatus = new Map(status);
  updatedStatus.set(member.emailAddress, true);
  setStatus(updatedStatus);
	status.set(member.emailAddress,true);
  const checkinData = {
    emailAddress: member.emailAddress,
    checkInTime: new Date()
  }
    axios.post('/checkin', checkinData)
      .then(response => {
        const newCheckinRecord = response.data;
        const updatedMembers = members.map(m => {
          if (m._id === member._id) {
            return { ...m, checkInTime: response.data.checkInTime };
          }
          return m;
        });
		console.log(member);
        setMembers(updatedMembers);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleCheckout = (member) => {
    const updatedStatus = new Map(status);
    updatedStatus.set(member.emailAddress, false);
    setStatus(updatedStatus);
	  status.set(member.emailAddress,false);
    const checkoutData = {
      emailAddress: member.emailAddress,
      checkOutTime: new Date()
    }
    axios.post('/checkout', checkoutData)
      .then(response => {
        const newCheckoutRecord = response.data;
        const updatedMembers = members.map(m => {
          if (m._id === member._id) {
            return { ...m, checkOutTime: response.data.checkOutTime };
          }
          return m;
        });
        setMembers(updatedMembers);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const filteredMembers = members.filter(member =>
    member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.emailAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNonMembers = nonmembers.filter(nonmember =>
    nonmember.firstName.toLowerCase().includes(nsearchTerm.toLowerCase()) ||
    nonmember.emailAddress.toLowerCase().includes(nsearchTerm.toLowerCase())
  );

//   const MTypeMembers = filteredMembers.filter(member => member.type === "M");
//   const NMTypeMembers = filteredMembers.filter(member => member.type === "NM");

  return (
    <div>
      <button style={{float: 'right'}} className="btn btn-danger" onClick={handleLogout}>Logout</button>
    <div className="page-container">
    <div className="member-list-container">
      <div className="nm-member-list">
      <h3><br></br><b>CHECK-IN/CHECK-OUT Members</b></h3>
      <div className="search-bar">
        <input type="text" placeholder="Search for members to check the time" onChange={handleSearch} />
      </div>
        {filteredMembers.map(member => (
          <div key={member._id} className="member-card">
            <div className="member-info">
              <div className="member-name">{member.firstName}, {member.lastName} <button className="member-btn">{member.type} </button><div className="member-actions">
                {(!status.get(member.emailAddress)) && 
                  <button className="checkin-btn" onClick={() => handleCheckin(member)}>Check In</button>
                }
				{status.get(member.emailAddress) &&
                  <button className="checkout-btn" onClick={() => handleCheckout(member)}>Check Out</button>
                }
              </div></div>
              {/* <div className="member-email"><b>{member.emailAddress}</b>
			  </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="enrollment-container">
	  <div class="nm-member-list nm-type">
		<h3><b>Enroll Members/Non members for different Services or Free Trials</b></h3>
	  <div className="search-bar">
        <input type="text" placeholder="Search for members/non members " onChange={handleSearch1} />
      </div>
		{filteredNonMembers.map(nonmember => (
      <div key={nonmember._id} class="member-card nm-type">
        <div class="nm-member-info">
          <div class="nm-member-name">{nonmember.firstName} {nonmember.lastName} <Link to={`/enrollmember?email=${nonmember.emailAddress}&type=${nonmember.type}`}>
      <button className="enroll-btn">Enroll</button>
    </Link></div>
          {/* <div class="nm-member-email"><b>{nonmember.emailAddress}</b></div> */}
        </div>
      </div>
    ))}
  </div>
  </div>
 <br></br>

  <AllStats />
  <Analytics />
  </div>
    </div>
	// (member.checkInTime && !member.checkOutTime) &&
  );
};

export default HCMember;
