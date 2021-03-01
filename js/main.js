//TAB
const tabs = document.getElementsByClassName('services_tab');
const tabsContainer = document.getElementById('tabs-container');
const contents = document.getElementsByClassName('services_item');

tabsContainer.addEventListener('click', event => {
    const target = event.target;
    const targetClassList = target.classList;

    if (targetClassList.contains('services_tab')) {
        for (let i = 0; i < contents.length; i++) {
            let tabItem = tabs[i];
            let servicesItem = contents[i];

            //(servicesItem.dataset.content === target.dataset.tab) ? servicesItem.classList.add('opened') : servicesItem.classList.remove('opened');

            if (servicesItem.dataset.content === target.dataset.tab) {
                tabItem.classList.add('opened');
                servicesItem.classList.add('opened');
            } else {
                tabItem.classList.remove('opened');
                servicesItem.classList.remove('opened');
            }
        }
    }
});

//VALIDATION

//mail

email.onblur = function () {
    let reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let address = document.getElementById("email").value;
    var pc = document.getElementById("message");


    if (document.getElementById("email").value == '') {
        output = `Введите email ${ pc.innerHTML="<img src='11111.png'>"}`;
        document.getElementById('message').innerHTML = output;
        return false;
    }
    if (!reg.test(address)) {
        output = 'Некорректный емаил' ;
        document.getElementById('message').innerHTML = output;
        return false;
    }

};

email.onfocus = function () {
    document.getElementById('email').value = '';
    document.getElementById('message').innerText = '';
};

//password
password.onblur = function () {

    let account = document.getElementById("password");
    let valid = document.getElementById("mess");
    let regexp = /^[a-z\d]+$/i;
    let regexp1 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/gm;

    if (document.getElementById("password").value == '') {
        output = "Обязательное поле";
        document.getElementById('mess').innerText = output;
        return false;
    }

    if (document.getElementById("password").value.length < 8) {
        output = "Не меньше 8 символов";
        document.getElementById('mess').innerText = output;
        return false;
    }

    if (!regexp1.test(account.value)) {
        valid.innerText = "Пароль должен содержать как минимум 1 цифру, 1 заглавную и 1 прописную букву"
    }

    if (!regexp.test(account.value)) {
        valid.innerText = "Пароль должен состоять только из цифр и букв латинского алфавита";
    }

};

password.onfocus = function () {
    document.getElementById('password').value = '';
    document.getElementById('mess').innerText = '';
};

//password1
firstpass.onblur = function () {

    let account = document.getElementById("firstpass");
    let valid = document.getElementById("firstpass1");
    let regexp = /^[a-z\d]+$/i;
    let regexp1 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/gm;

    if (document.getElementById("firstpass").value == '') {
        output = "Обязательное поле";
        document.getElementById('firstpass1').innerText = output;
        return false;
    }

    if (document.getElementById("firstpass").value.length < 8) {
        output = "Не меньше 8 символов";
        document.getElementById('firstpass1').innerText = output;
        return false;
    }

    if (regexp1.test(account.value) && regexp1.test(account.value)) {
        valid.innerText = "";
    }

    if (!regexp1.test(account.value)) {
        valid.innerText = "Пароль должен содержать как минимум 1 цифру, 1 заглавную и 1 прописную букву";
    }

    if (!regexp.test(account.value)) {
        valid.innerText = "Пароль должен состоять только из цифр и букв латинского алфавита";
    }
};

password.onfocus = function () {
    document.getElementById('firstpass').value = '';
    document.getElementById('firstpass1').innerText = '';
};

//tel
tel.onblur = function () {
    let regWorld = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;
    let address = document.getElementById("tel").value;

    if (document.getElementById("tel").value == '') {
        output = "Обязательное поле";
        document.getElementById('tel1').innerText = output;
        return false;
    }

    if (!regWorld.test(address)) {
        output = 'Некорректный номер';
        document.getElementById('tel1').innerText = output;
        return false;
    }

};

tel.onfocus = function () {
    document.getElementById('tel').value = '';
    document.getElementById('tel1').innerText = '';
};

//mail registration
emailreg.onblur = function () {
    let reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let address = document.getElementById("emailreg").value;

    if (document.getElementById("emailreg").value == '') {
        output = "Введите email";
        document.getElementById('emailreg1').innerText = output;
        return false;
    }
    if (!reg.test(address)) {
        output = 'Некорректный емаил';
        document.getElementById('emailreg1').innerText = output;
        return false;
    }
};

emailreg.onfocus = function () {
    document.getElementById('emailreg').value = '';
    document.getElementById('emailreg1').innerText = '';
};

//select region
select.onblur = function () {
    if (document.getElementById("select").value == 'region') {
        output = 'Обязательное поле';
        document.getElementById('sel').innerText = output;
        return false;
    }
}

select.onfocus = function () {
    document.getElementById('sel').innerText = '';
};

//checkbox
function check() {
    let chbox;
    chbox = document.getElementById('accept');
    if (!chbox.checked) {
        output = 'Вы должны принять условия пользовательского соглашения';
        document.getElementById('checkaccept').innerText = output;
        return false;
    }
}

//compare password
secondpass.onblur = function () {
    let diag_nap_uchr = document.getElementById('firstpass');
    let diag_osn = document.getElementById('secondpass');

    if (document.getElementById("secondpass").value == '') {
        output = "Обязательное поле";
        document.getElementById('secondpass2').innerText = output;
        return false;
    }

    if (diag_nap_uchr.value !== diag_osn.value) {
        output = 'Пароли не совпадают';
        document.getElementById('secondpass2').innerText = output;
        return false;
    }
}

secondpass.onfocus = function () {
    document.getElementById('secondpass').value = '';
    document.getElementById('secondpass2').innerText = '';
};

//password to text (change govnokod on review later )

function showPassword(target) {
    let input = document.getElementById('password');
    let input1 = document.getElementById('firstpass');


    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }

    if (input1.getAttribute('type') == 'password') {
        target.classList.add('view');
        input1.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input1.setAttribute('type', 'password');
    }
}

function showPasswordDP(target) {
    let input2 = document.getElementById('secondpass');
    if (input2.getAttribute('type') == 'password') {
        target.classList.add('view');
        input2.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input2.setAttribute('type', 'password');
    }
}

//({fileName: fileValue}).
document.publish.onsubmit = function () {
    let email = this.email.value;
    let password = this.password.value;
    alert(`email: ${email}, password: ${password}`)
    /*let emailreg = this.emailreg.value;
    let tel = this.tel.value;
    let firstpass1 = this.firstpass1.value;
    let secondpass2 = this.secondpass2.value;
    let sel = this.sel.value;
    let checkaccept = this.checkaccept.value;
    alert(`email: ${emailreg}, tel: ${tel}
    pass: ${firstpass1}, password: ${secondpass2}
    select: ${sel}, accept: ${checkaccept  }
    `)*/
};


/*
document.publish.onsubmit = function () {
    let email = this.email.value;
    let password = this.password.value;
    if (email != document.getElementById("message").value
    || password != document.getElementById("mess").value) {
        alert(`email: ${email}, password: ${password}`)
    }
};*/

/*if (regexp.test(account.value)) {
      valid.innerText = "";
  } else {
      valid.innerText = "Пароль должен состоять только из цифр и букв латинского алфавита";
  }

  if (regexp1.test(account.value)) {
      valid.innerText = "";
  } else {
      valid.innerText = "Пароль должен содержать как минимум 1 цифру, 1 заглавную и 1 прописную букву";
  }*/