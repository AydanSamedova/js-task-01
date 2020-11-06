function validation() {
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var birthday = document.getElementById("birthday").value
    var email = document.getElementById("email").value
    var nomre = document.getElementById("phone").value
    var gender = document.querySelectorAll('[name="gender"]')
    var Choose_option = document.getElementById("Choose_option")
    var error = document.getElementById("error");

    console.log(Choose_option.value)


    var text;
    if (name.length < 1) {
        text = "Adinizi daxil edin";
        error.innerHTML = text;
        console.log(name)
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


    var text;

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            break
        }
        if (i == (gender.length - 1)) {
            text = "Gender daxil edin";
            error.innerHTML = text;
            return false;

        }
    }



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


    var text;
    if (Choose_option.value === "-1") {
        text = "Secim daxil edin";
        error.innerHTML = text;
        return false;
    }




    console.log("Ad:", name, "Soyad:", surname, "Email:", email, "Nomre:", nomre, "Tarix:", birthday, "Gender:", gender)
    alert("Form Ugurla Yollanildi");
    return true;

}