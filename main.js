function validateForm(event) {
    event.preventDefault()
    let firstName = document.forms["myForm"]["firstName"].value;
 
    if (firstName == "") {
        document.getElementById("firstName").textContent = "لطفا فیلد را کامل نمایید";
        return false;
        } else {
            document.getElementById("firstName").textContent = "";
        }
        if (firstName.length <= 2) {
            document.getElementById("firstName").textContent = "نام باید حداقل ۳ کاراکتر باشد";
            return false;
        } else {
            document.getElementById("firstName").textContent = "";
        }

    let familyName = document.forms["myForm"]["familyName"].value;
    if (familyName == "") {
        document.getElementById("familyName").textContent = "لطفا فیلد را کامل نمایید";
        return false;
        } else {
            document.getElementById("familyName").textContent = "";
        }
        if (familyName.length <= 2) {
            document.getElementById("familyName").textContent = "نام خانوادگی باید حداقل ۳ کاراکتر باشد";
            return false;
        } else {
            document.getElementById("familyName").textContent = "";
        }
    
    let idCode = document.forms["myForm"]["idCode"].value;
    if (idCode == "") {
        document.getElementById("idCode").textContent = "لطفا فیلد را کامل نمایید";
        return false;
        } else {
            document.getElementById("idCode").textContent = "";
        }
        if (idCode.length != 10) {
            document.getElementById("idCode").textContent = "کد ملی باید ده رقمی باشد";
            return false;
        } else {
            document.getElementById("idCode").textContent = "";
        }
        if (/^\d+$/.test(idCode)) {
            document.getElementById("idCode").textContent = "";
        } else {
            document.getElementById("idCode").textContent = "کد ملی باید فقط عدد باشد";
            return false;
        }

        let birtDateDay = document.forms["myForm"]["birthDateDay"].value;
        let birtDateMonth = document.forms["myForm"]["birthDateMonth"].value;
        let birtDateYear = document.forms["myForm"]["birthDateYear"].value;

        if(birtDateDay == "" || birtDateMonth == "" || birtDateYear == "") {
            document.getElementById("birthDate").textContent = "لطفا فیلد را کامل نمایید";
        } else {
            document.getElementById("birthDate").textContent = "";
        }
    
        if(/^\d+$/.test(birtDateDay) && /^\d+$/.test(birtDateMonth) && /^\d+$/.test(birtDateYear) ) {
            document.getElementById("birthDate").textContent = "";
        } else {
            document.getElementById("birthDate").textContent = "لطفا فیلد را کامل نمایید";
            return false;
        }
        
        let mail = document.forms["myForm"]["mail"].value;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (mail.match(validRegex)) {
            document.getElementById("ErEmail").textContent = ""
        } else {
            document.getElementById("ErEmail").textContent = "لطفا ایمیل خود را کامل وارد نمایید"
            return false;
        }
    }