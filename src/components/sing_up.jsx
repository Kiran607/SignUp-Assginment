import React from "react";
import SignUp_Bg from "../assets/sign-up-BG 2.jpg";
import Vector from "../assets/Vector.jpg";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        fields:{}
    }
  }
  handleChange = e => {
    const {value } = e.target;
    this.setState({
       fields:value
    })
  };

  handleSubmit = () => {};

  render() {
    return (
      <div className="sign-up-form">
        <div className="sign-up-bg">
          <img src={SignUp_Bg} alt="" />
          <form onSubmit={this.handleSubmit}>
            <div className="sign-up">
              <div className="signUp-title-text">
                <div>
                  <img src={Vector} alt=""/>
                  <span id="signup-now-text">SIGN UP NOW</span>
                </div>
                <div className="sign-up-header">
                To Start Your Free Sales Trial
                </div>
              </div>
              <div className="first-row">
                <div className="labels">
                  <label id="first-name-label">First Name</label>
                  <label id="last-name-label">Last Name</label>
                </div>
                <div className="input-fields">
                  <input
                    type="text"
                    className="firstName-input"
                    placeholder="Enter Your First Name..."
                    name="firstName"
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    className="lastName-input"
                    placeholder="Enter Your Last Name..."
                    name="lastName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="first-row">
                <div className="labels">
                  <label id="workEmail-name-label">Work Email</label>
                  <label id="Solution-name-label">Salutation</label>
                </div>
                <div className="input-fields">
                  <input
                    type="text"
                    className="workEmail-input"
                    placeholder="name/zyz.com..."
                    name="emailId"
                    onChange={this.handleChange}
                  />
                  <select className="select" name="select"
                  onChange={this.handleChange}
                  >
                    <option value="">Select Your Job Title</option>
                    <option>Mr.</option>
                    <option value="">Mrs.</option>
                  </select>
                </div>
              </div>

              <div className="first-row">
                <div className="labels">
                  <label id="Company-name-label">Company</label>
                </div>
                <div className="input-fields">
                  <input
                    type="text"
                    className="company-input"
                    placeholder="Enter Your Company Name"
                    name="company"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="first-row">
                <div className="labels">
                  <label id="employess-name-label">No. Of Employees</label>
                </div>
                <div className="input-fields">
                  <select className="select-employee" name="selectEmployee"
                  onChange={this.handleChange}
                  >
                    <option value="">
                      Select No. Of Employees In Your Company
                    </option>
                  </select>
                </div>
              </div>

              <div className="first-row">
                <div className="labels">
                  <label id="brithDate-name-label">Birthdate</label>
                  <label id="crm-name-label">CRM Vendor</label>
                </div>
                <div className="input-fields">
                  <input
                    type="text"
                    className="firstName-input"
                    placeholder="Select"
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    className="lastName-input"
                    placeholder="CRM Vendor"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="first-row">
                <div className="labels">
                  <label id="phone-name-label">Phone Number</label>
                  <label id="Solution-name-label">Country</label>
                </div>
                <div className="input-fields">
                  <input
                    type="text"
                    className="workEmail-input"
                    placeholder="9xxxxxxxx"
                    onChange={this.handleChange}
                  />
                  <select className="select"
                  onChange={this.handleChange}
                  >
                    <option value="">Select Your Country</option>
                  </select>
                </div>
              </div>

              <div className="first-row-checkbox">
                <div className="checkbox">
                  <span>
                    <input type="checkbox" className="checkbox-select" 
                    onChange={this.handleChange}
                    />
                  </span>
                  <span className="bottom-text">
                    I Agree To the Master Subscription Agreement.
                  </span>
                </div>
              </div>

              <div className="first-row">
                <div className="submit">
                  <button className="submit-start">Start My Free Trial</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
