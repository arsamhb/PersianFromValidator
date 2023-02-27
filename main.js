function validateForm(event) {
    event.preventDefault()/* in prevent defult ro balad naboodam */
    let firstName = document.forms["myForm"]["firstName"].value;
    if (firstName == "") {
        document.getElementById("ErFirstName").style.display = "block";
        return false;
        }  else {
            document.getElementById("ErFirstName").style.display = "none";
        }/* in dastore . lenght ro eshtebah typei dashtam */
        if (firstName.length <= 2) {
            document.getElementById("ErFirstName2").style.display = "block";
            return false;
        } else {
            document.getElementById("ErFirstName2").style.display = "none";
        }

    let familyName = document.forms["myForm"]["familyName"].value;
    if (familyName == "") {
        document.getElementById("ErFamilyName").style.display = "block";
        return false;
        } else {
            document.getElementById("ErFamilyName").style.display = "none";
        }
        if (familyName.length <= 2) {
            document.getElementById("ErFamilyName2").style.display = "block";
            return false;
        } else {
            document.getElementById("ErFamilyName2").style.display = "none";
        }
    
    let idCode = document.forms["myForm"]["idCode"].value;
    if (idCode == "") {
        document.getElementById("ErIdCode").style.display = "block";
        return false;
        } else {
            document.getElementById("ErIdCode").style.display = "none";
        }
        if (idCode.length != 10) {
            document.getElementById("ErIdCode1").style.display = "block";
            return false;
        } else {
            document.getElementById("ErIdCode1").style.display = "none";
        }
        if (/^\d+$/.test(idCode)) {
            document.getElementById("ErIdCode2").style.display = "none";
        } else {
            document.getElementById("ErIdCode2").style.display = "block";
            return false;
        }

        let birtDateDay = document.forms["myForm"]["birthDateDay"].value;
        let birtDateMonth = document.forms["myForm"]["birthDateMonth"].value;
        let birtDateYear = document.forms["myForm"]["birthDateYear"].value;

        if(birtDateDay == "" || birtDateMonth == "" || birtDateYear == "") {
            document.getElementById("ErBirthDate").style.display = "block";
        } else {
            document.getElementById("ErBirthDate").style.display = "none";
        }
    
        if(/^\d+$/.test(birtDateDay) && /^\d+$/.test(birtDateMonth) && /^\d+$/.test(birtDateYear) ) {
            document.getElementById("ErBirthDate").style.display = "none";
        } else {
            document.getElementById("ErBirthDate").style.display = "block";
            return false;
        }
        
        let mail = document.forms["myForm"]["mail"].value;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (mail.match(validRegex)) {
            document.getElementById("ErEmail").style.display = "none"
        } else {
            document.getElementById("ErEmail").style.display = "block"
            return false;
        }
    }