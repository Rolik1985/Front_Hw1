const [...inputs] = document.querySelectorAll('input')
inputs.forEach(function (elem) {
    elem.addEventListener('change', function (e) {
        validate(e.target);
    })
})

function validate(elem) {
    let flag = false;
    if (elem.type === 'email') {
        if (!/^[A-z1-9._]+@[a-z1-9._]+.[a-z]{1,4}$/.test(elem.value)) {
            flag = true;

        }
    } else if (elem.type === 'tel') {
        if (!/^\+38\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(elem.value)) {
            flag = true;
        }
    } else if (elem.dataset.userName) {
        if (!/^[А-яіїґє]+$/.test(elem.value)) {
            flag = true;
        }
    } else if (elem.dataset.userIndex) {
        if (!/^\d{5}$/.test(elem.value)) {
            flag = true;
        }
    } else {
        if (elem.value === "") {
            flag = true;
        }
    }
    if (flag) {
        elem.style.border = '1px solid red';
    } else {
        elem.style.border = '1px solid green'
    }
};
