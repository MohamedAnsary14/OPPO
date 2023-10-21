var PhoneNumberInpt = document.getElementById('PhoneNumberInpt')
function validatePhoneNumber() {
    let phoneRegExp = /^01[0125][0-9]{8}$/
    if (phoneRegExp.test(PhoneNumberInpt.value) == true) {
        PhoneNumberInpt.classList.remove('is-invalid')
        PhoneNumberInpt.classList.add('is-valid')
    }
    else {
        PhoneNumberInpt.classList.remove('is-valid')
        PhoneNumberInpt.classList.add('is-invalid')
    }

}

