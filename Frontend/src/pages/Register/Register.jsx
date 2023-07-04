import React, { useState, useRef } from "react";
import styled from "styled-components";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [match, setMatch] = useState("");
  const [address, setAddress] = useState("");
  const [roles, setRoles] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [type, setType] = useState("");
  const [membershipStatus, setMembershipStatus] = useState(0);
  const [dob, setDob] = useState("");
  const [residentialAddress, setResidentialAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [membershipExpiry, setMembershipExpiry] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [instructorCertification, setInstructorCertification] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const PhoneContainer = () => {
    const [phone, setPhone] = useState("");
    const [phoneExtension, setPhoneExtension] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [countryList, setCountryList] = useState([
      { name: "United States", code: "+1", flag: "us" },
      { name: "India", code: "+91", flag: "in" },
      { name: "United Kingdom", code: "+44", flag: "gb" },
      { name: "China", code: "+86", flag: "cn" },
    ]);

    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };

    const handleExtensionChange = (e) => {
      setPhoneExtension(e.target.value);
      const selectedCountry = countryList.find(
        (country) => country.code === e.target.value
      );
      setSelectedCountry(selectedCountry ? selectedCountry.name : "");
    };
    return (
      <div>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Phone"
        />
        <select value={phoneExtension} onChange={handleExtensionChange}>
          {countryList.map((country, index) => (
            <option key={index} value={country.code}>
              {country.name} ({country.code})
            </option>
          ))}
        </select>
        {selectedCountry && <p>Selected Country: {selectedCountry}</p>}
      </div>
    );
  };

  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    if (confirmPassword === password) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  };

  const FileUploader = ({ handleFile }) => {
    const [profilePhoto, setProfilePhoto] = useState("");
    const hiddenFileInput = useRef(null);

    const handleClick = (event) => {
      hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        setProfilePhoto(fileUploaded);
        handleFile(fileUploaded);
        };

    const Button = styled.button`
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 20px;
        `;

    return (
        <div className='auth-form-container'>
                <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="Full Name">Full Name</label>
                <input value={name} name="name" id="name" placeholder = "Full Name"></input>
                <label htmlFor="Email">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type = "email" placeholder = "youremail@gmail.com" id = "email" name="email"/>
                { /* <label htmlFor="Roles" */}
                <label htmlFor="Password">Password</label>
                <input value = {password} onChange={(e)=>setPassword(e.target.value)} type = "password" placeholder = "*************" id = "password" name="password"/>
                <label htmlFor="Confirm Password">Confirm Password</label>
                <div className="password-container">
                    <input type="password" placeholder="*************" id="confirmPassword" name="confirmPassword" />
                    {password && password === confirmPassword ? (
                        <span className="password-match">&#x2714;</span>
                    ) : (
                        <span className="password-not-match">&#x2718;</span>
                    )}
                </div>
                
                <Button onClick={handleClick}>
                    {profilePhoto ? 'Change photo' : 'Upload photo'}
                </Button>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                />
                {profilePhoto && (
                    <img src={profilePhoto} alt="Uploaded profile" width="100" height="100" />
                )}

                <label htmlFor="gender">Gender</label>
                <div className="gender-container"> 
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <label htmlFor="Roles">Roles</label>
                    <select value={roles} onChange={(e)=>setRoles(e.target.value)} name="roles" id="roles">
                        <option value="">Select a role</option>
                        <option value="member">Member</option>
                        <option value="instructor">Instructor</option>
                        <option value="admin">Admin</option>
                    </select>

                <label htmlFor="MembershipType">Membership Type</label>
                <div className="member-container">
                        <input type="radio" value="monthly" name="type" id="monthly" onChange={(e)=>setType(e.target.value)} />
                        <label htmlFor="monthly">Monthly</label>

                        <input type="radio" value="annual" name="type" id="annual" onChange={(e)=>setType(e.target.value)} />
                        <label htmlFor="annual">Annual</label>
                </div>

                {type === 'monthly' && (
                    <>
                        <label htmlFor="MembershipStatus">Membership Status</label>
                        <select value={membershipStatus} onChange={(e)=>setMembershipStatus(e.target.value)} name="membership-status" id="membership-status">
                            <option value="">Select membership status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>

                        <label htmlFor="MembershipExpiry">Membership Expiry</label>
                        <input value={membershipExpiry} onChange={(e)=>setMembershipExpiry(e.target.value)} type="date" placeholder="Membership expiry" id="membership-expiry" name="membership-expiry" />
                    </>
                )}

                {type === 'annual' && (
                <>
                    <label htmlFor="MembershipExpiry">Membership Expiry</label>
                    <input value={membershipExpiry} onChange={(e)=>setMembershipExpiry(e.target.value)} type="date" placeholder="Membership expiry" id="membership-expiry" name="membership-expiry" />
                </>
                )}

                {roles === 'instructor' && (
                <>
                    <label htmlFor="instructor-certification">Instructor Certification</label>
                    <input value={instructorCertification} onChange={(e)=>setInstructorCertification(e.target.value)} type="text" placeholder="Instructor certification" id="instructor-certification" name="instructor-certification"/>
                </>
                )}

                <label htmlFor="height">Height</label>
                <div className="height-container">
                    <input value={height} name="height" id="height" placeholder="Enter your height (cm)" onChange={(e) => setHeight(e.target.value)} />
                    <span className="unit">cm</span>
                </div>

                <label htmlFor="weight">Weight</label>
                <div className="weight-container">
                    <input value={weight} name="weight" id="weight" placeholder="Enter your weight (kg)" onChange={(e) => setWeight(e.target.value)} />
                    <span className="unit">kg</span>
                </div>

                <label htmlFor="dob">Date of Birth</label>
                <div className="dob-container">
                    <input value={dob} name="dob" id="dob" type="date" onChange={(e) => setDob(e.target.value)} />
                </div>

                <div className="address-container">
                    <label htmlFor="Street">Street</label>
                    <input value={residentialAddress.street} onChange={(e) => setResidentialAddress({...residentialAddress, street: e.target.value})} placeholder="123 Main St" name="street"/>
                    <label htmlFor="City">City</label>
                    <input value={residentialAddress.city} onChange={(e) => setResidentialAddress({...residentialAddress, city: e.target.value})} placeholder="New York" name="city"/>
                    <label htmlFor="State">State</label>
                    <input value={residentialAddress.state} onChange={(e) => setResidentialAddress({...residentialAddress, state: e.target.value})} placeholder="NY" name="state"/>
                    <label htmlFor="Zip">Zip</label>
                    <input value={residentialAddress.zip} onChange={(e) => setResidentialAddress({...residentialAddress, zip: e.target.value})} placeholder="10001" name="zip"/>
                </div>
                <button type ="submit">Log In</button>

            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch("login")}>Already have an account? Login here</button>
        </div>
    );
    }

};


