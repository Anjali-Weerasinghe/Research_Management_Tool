import React, {useState} from 'react';
import axios from "axios";

import {useHistory} from 'react-router-dom';

export default function AddPanelMember() {


    const [Group_Id, setGroup_Id] = useState("");
    const [panelmember1, setpanelmember1] = useState("");
    const [panelmember2, setpanelmember2] = useState("");
    const [panelmember3, setpanelmember3] = useState("");
    const [panelmember4, setpanelmember4,] = useState("");
   
    
   
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newSupervisor ={

            Group_Id,
            panelmember1,
            panelmember3,
            panelmember4,
            panelmember2,
            

        }

        // add route for the journey details

        axios.post("http://localhost:8070/panelMembers/add", newSupervisor).then(()=>{
            alert("Supervisor Added");
            history.push('/dashboard/ViewPanelMember');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="form_journey">

            <br></br>
            <br></br>
            <h2 id="headertext-Sup">
                Add Panel Members
            </h2>
            <hr id="hr"></hr>
            <br></br>

            {/* add journey form */}
            <form onSubmit={sendData}  id="form_journey" style={{marginLeft:'14cm'}}>


                <div className="row">
                    <label htmlFor="route">Group Id </label>
                    <input type="text" className="form-control" id="Group_Id" data-testid="groupidtest" placeholder="" required
                     onChange = {(e) => {
                        setGroup_Id(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="route">Panel Member 1 </label>
                    {/* <input type="text" className="form-control" id="panelmember1" placeholder="" required
                     onChange = {(e) => {
                        setpanelmember1(e.target.value);
                    }}   
                    /> */}

                        <select className="form-control" id="panelmember1" style={{height:"1cm"}} required onChange = {(e) => {
                                     setpanelmember1(e.target.value);
                                }}>
                                <option>Select Type</option>
                                <option value="Prof.Koliya Pulasinghe">Prof.Koliya Pulasinghe</option>
                                <option value="Prof. Chandimal S. Jayawardena">Prof. Chandimal S. Jayawardena</option>
                                <option value="Prof. Mahesha Kapurubandara">Prof. Mahesha Kapurubandara</option>
                                <option value="Prof. Samantha Thelijjagoda">Prof. Samantha Thelijjagoda</option>
                                <option value="Dr. Pradeepa Samarasinghe">Dr. Pradeepa Samarasinghe</option>
                                <option value="Dr. Janaka Wijekoon">Dr. Janaka Wijekoon</option>
                                <option value="Dr. Dharshana Kasthururathne">Dr. Dharshana Kasthururathne</option>
                                <option value="Dr. Anuradha Karunasena">Dr. Anuradha Karunasena</option>
                                <option value="Dr. Windhaya Rankothge">Dr. Windhaya Rankothge</option>
                                <option value="Dr. Malitha Wijesundara">Dr. Malitha Wijesundara</option>
                                <option value="Dr. Nuwan Kodagoda"> Dr. Nuwan Kodagoda</option>
                                <option value="Dr. Jayantha Amararachchi">Dr. Jayantha Amararachchi</option>
                                <option value="Dr. Jeewanee Bamunusinghe">Dr. Jeewanee Bamunusinghe</option>

                            </select>
                </div>

               

                <div className="row" required>
                        <label htmlFor="passenger_id">Panel Member 2</label>
                        {/* <input type="text" className="form-control" id="panelmember2" placeholder=""
                         
                         onChange = {(e) => {
                            setpanelmember2(e.target.value);
                         }}
                        /> */}

                <select className="form-control" id="panelmember2" style={{height:"1cm"}} required onChange = {(e) => {
                                     setpanelmember2(e.target.value);
                                }}>
                                <option>Select Type</option>
                                <option value="Prof.Koliya Pulasinghe">Prof.Koliya Pulasinghe</option>
                                <option value="Prof. Chandimal S. Jayawardena">Prof. Chandimal S. Jayawardena</option>
                                <option value="Prof. Mahesha Kapurubandara">Prof. Mahesha Kapurubandara</option>
                                <option value="Prof. Samantha Thelijjagoda">Prof. Samantha Thelijjagoda</option>
                                <option value="Dr. Pradeepa Samarasinghe">Dr. Pradeepa Samarasinghe</option>
                                <option value="Dr. Janaka Wijekoon">Dr. Janaka Wijekoon</option>
                                <option value="Dr. Dharshana Kasthururathne">Dr. Dharshana Kasthururathne</option>
                                <option value="Dr. Anuradha Karunasena">Dr. Anuradha Karunasena</option>
                                <option value="Dr. Windhaya Rankothge">Dr. Windhaya Rankothge</option>
                                <option value="Dr. Malitha Wijesundara">Dr. Malitha Wijesundara</option>
                                <option value="Dr. Nuwan Kodagoda"> Dr. Nuwan Kodagoda</option>
                                <option value="Dr. Jayantha Amararachchi">Dr. Jayantha Amararachchi</option>
                                <option value="Dr. Jeewanee Bamunusinghe">Dr. Jeewanee Bamunusinghe</option>

                            </select>
                    </div>

                    <div className="row" required>
                        <label htmlFor="from">Panel Member 3</label>
                        {/* <input type="text" className="form-control" id="panelmember3"  placeholder="" 
                           
                           onChange = {(e) => {
                            setpanelmember3(e.target.value);
                         }}
                        /> */}

                    <select className="form-control" id="panelmember3" style={{height:"1cm"}} required onChange = {(e) => {
                                     setpanelmember3(e.target.value);
                                }}>
                                <option>Select Type</option>
                                <option value="Prof.Koliya Pulasinghe">Prof.Koliya Pulasinghe</option>
                                <option value="Prof. Chandimal S. Jayawardena">Prof. Chandimal S. Jayawardena</option>
                                <option value="Prof. Mahesha Kapurubandara">Prof. Mahesha Kapurubandara</option>
                                <option value="Prof. Samantha Thelijjagoda">Prof. Samantha Thelijjagoda</option>
                                <option value="Dr. Pradeepa Samarasinghe">Dr. Pradeepa Samarasinghe</option>
                                <option value="Dr. Janaka Wijekoon">Dr. Janaka Wijekoon</option>
                                <option value="Dr. Dharshana Kasthururathne">Dr. Dharshana Kasthururathne</option>
                                <option value="Dr. Anuradha Karunasena">Dr. Anuradha Karunasena</option>
                                <option value="Dr. Windhaya Rankothge">Dr. Windhaya Rankothge</option>
                                <option value="Dr. Malitha Wijesundara">Dr. Malitha Wijesundara</option>
                                <option value="Dr. Nuwan Kodagoda"> Dr. Nuwan Kodagoda</option>
                                <option value="Dr. Jayantha Amararachchi">Dr. Jayantha Amararachchi</option>
                                <option value="Dr. Jeewanee Bamunusinghe">Dr. Jeewanee Bamunusinghe</option>

                            </select>
                    </div>

                    <div className="row">
                    <label htmlFor="route">Panel Member 4 </label>
                    {/* <input type="text" className="form-control" id="panelmember4" placeholder="" required
                     onChange = {(e) => {
                        setpanelmember4(e.target.value);
                    }}   
                    /> */}

                <select className="form-control" id="panelmember4" style={{height:"1cm"}} required onChange = {(e) => {
                                     setpanelmember4(e.target.value);
                                }}>
                                <option>Select Type</option>
                                <option value="Prof.Koliya Pulasinghe">Prof.Koliya Pulasinghe</option>
                                <option value="Prof. Chandimal S. Jayawardena">Prof. Chandimal S. Jayawardena</option>
                                <option value="Prof. Mahesha Kapurubandara">Prof. Mahesha Kapurubandara</option>
                                <option value="Prof. Samantha Thelijjagoda">Prof. Samantha Thelijjagoda</option>
                                <option value="Dr. Pradeepa Samarasinghe">Dr. Pradeepa Samarasinghe</option>
                                <option value="Dr. Janaka Wijekoon">Dr. Janaka Wijekoon</option>
                                <option value="Dr. Dharshana Kasthururathne">Dr. Dharshana Kasthururathne</option>
                                <option value="Dr. Anuradha Karunasena">Dr. Anuradha Karunasena</option>
                                <option value="Dr. Windhaya Rankothge">Dr. Windhaya Rankothge</option>
                                <option value="Dr. Malitha Wijesundara">Dr. Malitha Wijesundara</option>
                                <option value="Dr. Nuwan Kodagoda"> Dr. Nuwan Kodagoda</option>
                                <option value="Dr. Jayantha Amararachchi">Dr. Jayantha Amararachchi</option>
                                <option value="Dr. Jeewanee Bamunusinghe">Dr. Jeewanee Bamunusinghe</option>

                            </select>
                </div>

               

                

                    {/* ------reset button---- */}
                <button type="reset" data-testid="buttonreset"  id = "#">Reset</button>

                <button type="submit" data-testid="buttonsubmit"  id = "#">Add</button>
            </form>

            
            
        </div>
    )
}