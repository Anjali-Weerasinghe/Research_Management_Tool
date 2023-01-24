import React from "react";
import '../../Styles/sidebar.css'
//import Image1 from'../../Images/journey_img1.png'

function sidebar() {

    return(
      
<div>
  

<div className="nav-side-menu">
    <div className="brand">RMT
    
    </div>
    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
  
        <div className="menu-list">
  
            <ul id="menu-content" className="menu-content collapse out">

            
               <li>
                  <a href="#">
                    
                    <div id="topicname">

                      <span>Research Planner   2022</span>
    
                    </div>
                  </a>
                </li>


                {/* --------------------------------    Dashboard  ------------------------------------------------ */}

                <li>
                  <a href="/dashboard">
                    <i className="fa fa-dashboard fa-lg"></i>&nbsp;&nbsp;&nbsp; Dashboard
                  </a>
                </li>


                {/* ----------------------------------------------------------------------------------------- */}

                <li  data-toggle="collapse" data-target="#Supervisor" className="collapsed">
                  <a href="#"><i class="fas fa-users" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp; Supervisor <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="Supervisor">
                    <li><a href="/dashboard/AddSupervisor">Add Supervisor</a></li>
                    <li><a href="/dashboard/AllSupervisor">All Supervisor</a></li>
                    
                </ul>


                <li data-toggle="collapse" data-target="#researchtopics" className="collapsed">
                  <a href="#"><i class="fa fa-search"></i>&nbsp;&nbsp;&nbsp; Research Topic <span className="arrow"></span></a>
                </li>  
                <ul className="sub-menu collapse" id="researchtopics">
                  {/* <li><a href="/dashboard/AddResearchTopic">Add Research  Topic</a></li> */}
                  <li><a href="/dashboard/AllResearchTopic">All Research Topic</a></li>
                </ul>


                <li data-toggle="collapse" data-target="#journey" className="collapsed">
                  <a href="#"><i class="fas fa-users"></i>&nbsp;&nbsp;&nbsp; Supervisor Request <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="journey">
                  <li><a href="/dashboard/AddRequestSupervisor">Add Supervisor</a></li>
                  <li><a href="/dashboard/ViewSupervisorApproval">View Supervisor status</a></li>
                </ul>

                <li data-toggle="collapse" data-target="#cosupervisor" className="collapsed">
                  <a href="#"> <i class="fas fa-users"></i>&nbsp;&nbsp;&nbsp; CoSupervisor Requests<span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="cosupervisor">
                  {/* <li><a href="/dashboard/AddCoSupervisor">Add Co-Supervisor Requests</a></li> */}
                  <li><a href="/dashboard/AllCoSupervisor">View Requests</a></li>
                  {/* <li><a href="/dashboard/ViewCoSupervisor">View Requests</a></li> */}
                </ul>

                {/* -------------------------------------------------------------------------------------------------------------- */}
                
                <li data-toggle="collapse" data-target="#panel" className="collapsed">
                  <a href="#"> <i class="fas fa-users"></i>&nbsp;&nbsp;&nbsp; Panel Member<span className="arrow"></span></a>
                </li>
               
                <ul className="sub-menu collapse" id="panel">
                  <li><a href="/dashboard/AddPanelMember">Add Panel Member</a></li>
                  <li><a href="/dashboard/ViewPanelMember">View Member</a></li>
                </ul>


                 {/* ------------------------------------------------------------------------------------------------------- */}

                 {/* -------------------------------------------------------------------------------------------------------------- */}
                
                <li data-toggle="collapse" data-target="#grpdetails" className="collapsed">
                  <a href="#"> <i class="fas fa-users"></i>&nbsp;&nbsp;&nbsp; Group Details<span className="arrow"></span></a>
                </li>
               
                <ul className="sub-menu collapse" id="grpdetails">
                  <li><a href="/dashboard/AdminViewGroupDetails">Manage Groups</a></li>
                  <li><a href="/dashboard/AdminViewGroupDetails">View Member</a></li>
                </ul>


                 {/* ------------------------------------------------------------------------------------------------------- */}


                <li data-toggle="collapse" data-target="#templates" className="collapsed">
                  <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp; Template <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="templates">
                  <li><a href="/dashboard/fileupload">upload template</a></li>
                  <li><a href="/dashboard/filelist">All Templates</a></li>
                </ul>
               
                <li data-toggle="collapse" data-target="#submissions" className="collapsed">
                  <a href="#"> <i class="fa fa-calendar"></i>&nbsp;&nbsp;&nbsp; Submissions<span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="submissions">
                  <li><a href="/dashboard/submitfileupload">Add Submissions</a></li>
                  <li><a href="/dashboard/submitfilelist">All Submissions</a></li>
                </ul>


                <li>
                  <a href="/dashboard/reportdashboard">
                  <i class="fas fa-file-export"></i>&nbsp;&nbsp;&nbsp; Report
                  </a>
                </li>


                
                

            </ul>
     </div>
</div>

 
</div>


    )
}
export default sidebar;