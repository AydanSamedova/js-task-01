function validation() {
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var birthday = document.getElementById("birthday").value
    var email = document.getElementById("email").value
    var nomre = document.getElementById("nomre").value
    var gender = document.getElementsByName("gender").value
    var error = document.getElementById("error");


    var text;
    if (name.length < 1) {
        text = "Adinizi daxil edin";
        error.innerHTML = text;
        return false;
    }

    if (surname.length < 1) {
        text = "Soyadinizi daxil edin";
        error.innerHTML = text;
        return false;
    }



    if (birthday == '') {
        text = "Tarix daxil edin";
        error.innerHTML = text;
        return false;
    }


    // if (gender[0].checked == true) {
    //     gender = "qadin";
    // } else if (gender[1].checked == true) {
    //     gender = "kisi";
    // } else {
    //     text = "Gender daxil edin";
    //     error.innerHTML = text;
    //     return false;
    // }




    if (email.indexOf("@") == -1) {
        text = "Mailinizi daxil edin";
        error.innerHTML = text;
        return false;
    }


    if (nomre.length < 8) {
        text = "Nomre daxil edin";
        error.innerHTML = text;
        return false;
    }


    console.log("Ad:", name, "Soyad:", surname, "Email:", email, "Nomre:", nomre, "Tarix:", birthday, "Gender:", gender)
    alert("Form Ugurla Yollanildi");
    return true;

}