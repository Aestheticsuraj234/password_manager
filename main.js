// add eventlistener to the button

document.querySelector(".form-section-content-form-group-button").addEventListener("click", (e) => {

    e.preventDefault();
    // get all the feilds value✅
    let WebsiteName = document.getElementById("website").value;
    let UserName = document.getElementById("username").value;
    let Password = document.getElementById("password").value;


    // add validation✅
    if (!WebsiteName || !UserName || !Password) {
        alert("Bhai saare feilds bharna hai😴");
        return;
    }

    // if validation is true then send the data to the localstorage.
    
    // if empty then we create a empty array. push data into it.
    if(localStorage.getItem("Password_data")===null)
    {
        let emptyArray=[];
        let data = {
            "WebsiteName": WebsiteName,
            "UserName": UserName,
            "Password": Password
        }
        emptyArray.push(data);
        localStorage.setItem("Password_data", JSON.stringify(emptyArray));
    }
    // else we get the data from the localstorage and push the new data into it.
    else{
        let Newdata = {
            "WebsiteName": WebsiteName,
            "UserName": UserName,
            "Password": Password
        }

        let oldData = JSON.parse(localStorage.getItem("Password_data"));
        oldData.push(Newdata);
        localStorage.setItem("Password_data", JSON.stringify(oldData));

    }
   
    document.getElementById("website").value="";
    document.getElementById("username").value="";
    document.getElementById("password").value="";

})