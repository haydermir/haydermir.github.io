function showMessage(message) {
    document.getElementById('message').textContent = message;
}

const today = new Date();
document.getElementById('today').innerHTML= today;    

const summaryBtn = document.getElementById("summaryBtn").addEventListener('click', setSummaryDisplay); 
const mgmtBtn = document.getElementById("mgmtBtn").addEventListener('click', setMgmtDisplay);
const technicalBtn = document.getElementById("technicalBtn").addEventListener('click', setTechnicalDisplay); 
const eduBtn = document.getElementById("eduBtn").addEventListener('click', setEduDisplay); 
const orgBtn = document.getElementById("orgBtn").addEventListener('click', setOrgDisplay); 


function setSummaryDisplay() {
    document.getElementById('summarySection').classList.add("displayDiv");
    document.getElementById('summarySection').classList.remove("hideDiv");

    document.getElementById('mgmtSection').classList.add("hideDiv");
    document.getElementById('mgmtSection').classList.remove("displayDiv");

    document.getElementById('technicalSection').classList.add("hideDiv");
    document.getElementById('technicalSection').classList.remove("displayDiv");

    document.getElementById('eduSection').classList.add("hideDiv");
    document.getElementById('eduSection').classList.remove("displayDiv");

    document.getElementById('orgSection').classList.add("hideDiv");
    document.getElementById('orgSection').classList.remove("displayDiv");

}

function setMgmtDisplay() {
    console.log("in setMgmtDisplay ")
    document.getElementById('summarySection').classList.add("hideDiv");
    document.getElementById('summarySection').classList.remove("displayDiv");
    
    document.getElementById('mgmtSection').classList.add("displayDiv");
    document.getElementById('mgmtSection').classList.remove("hideDiv");
    
    document.getElementById('technicalSection').classList.add("hideDiv");
    document.getElementById('technicalSection').classList.remove("displayDiv");

    document.getElementById('eduSection').classList.add("hideDiv");
    document.getElementById('eduSection').classList.remove("displayDiv");

    document.getElementById('orgSection').classList.add("hideDiv");
    document.getElementById('orgSection').classList.remove("displayDiv");

};

function setTechnicalDisplay(){

    document.getElementById('summarySection').classList.add("hideDiv");
    document.getElementById('summarySection').classList.remove("displayDiv");

    document.getElementById('mgmtSection').classList.add("hideDiv");
    document.getElementById('mgmtSection').classList.remove("displayDiv");

    document.getElementById('technicalSection').classList.add("displayDiv");
    document.getElementById('technicalSection').classList.remove("hideDiv");

    document.getElementById('eduSection').classList.add("hideDiv");
    document.getElementById('eduSection').classList.remove("displayDiv");

    document.getElementById('orgSection').classList.add("hideDiv");
    document.getElementById('orgSection').classList.remove("displayDiv");
};

function setEduDisplay() {

    document.getElementById('summarySection').classList.add("hideDiv");
    document.getElementById('summarySection').classList.remove("displayDiv");

    document.getElementById('mgmtSection').classList.add("hideDiv");
    document.getElementById('mgmtSection').classList.remove("displayDiv");

    document.getElementById('technicalSection').classList.add("hideDiv");
    document.getElementById('technicalSection').classList.remove("displayDiv");

    document.getElementById('eduSection').classList.add("displayDiv");
    document.getElementById('eduSection').classList.remove("hideDiv");

    document.getElementById('orgSection').classList.add("hideDiv");
    document.getElementById('orgSection').classList.remove("displayDiv");
}

function setOrgDisplay() {

    document.getElementById('summarySection').classList.add("hideDiv");
    document.getElementById('summarySection').classList.remove("displayDiv");

    document.getElementById('mgmtSection').classList.add("hideDiv");
    document.getElementById('mgmtSection').classList.remove("displayDiv");

    document.getElementById('technicalSection').classList.add("hideDiv");
    document.getElementById('technicalSection').classList.remove("displayDiv");

    document.getElementById('eduSection').classList.add("hideDiv");
    document.getElementById('eduSection').classList.remove("displayDiv");

    document.getElementById('orgSection').classList.add("displayDiv");
    document.getElementById('orgSection').classList.remove("hideDiv");
}


/*
const elements = document.getElementsByClassName("sec");
console.log("List of Elements"); 
for (i = 0; i < elements.length; i++) {
//    if (elements[i].className.toString() === "sec" ) 
      console.log(elements[i].className.toString());
};
*/

