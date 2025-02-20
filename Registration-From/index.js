function submits() {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const fullName = firstName + " " + lastName;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value;
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    const gender = selectedGender ? selectedGender.value : "";

    if(!firstName.trim() || !lastName.trim() || !email.trim() || !address.trim() || !dob || !phone.trim() || !gender ) {
        alert("Please fill all the required fields");
        return;
    } 
    
    const formOtput = document.getElementsByClassName("delete-form")[0];
    formOtput.style.display =  "flex";

    const outputHTML = `
             <div class="output-data-Content">
             <h2>User Details</h2>
             <p><strong>Full Name:</strong> ${fullName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Address:</strong> ${address}</p>
             <p><strong>Date of Birth:</strong> ${dob}</p>
             <p><strong>Gender:</strong> ${gender}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             </div>    
             <button class="delete-button" onclick="deleteSubmission(this)"> <img src="./image/dustbinm.svg" alt="delete"></button>
          `;   


          //Create a new div element
          const newSubmission = document.createElement("div");
          newSubmission.classList.add("output-data");
          newSubmission.innerHTML = outputHTML;

          formOtput.insertBefore(newSubmission,formOtput.firstChild);
}


function deleteSubmission(button){
    const outputData = button.closest('.output-data');
    if(outputData){
        outputData.remove();
    }

    const formOtput = document.getElementsByClassName("delete-form")[0];
    if(!formOtput.hasChildNodes()){
        console.log("No Submission left.");
        formOtput.style.display = "none";
    }
}