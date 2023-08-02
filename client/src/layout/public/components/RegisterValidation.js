function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (values.email === "") {
        error.name = "Please, enter your name"
    } else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "Please, enter your email"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Please, enter your password"
    } else if (values.password[0].length < 10) {
        error.password = "Password must be at least 10 characters long"
    } else {
        error.password = ""
    }

    if (values.confirmPass === "") {
        error.confirmPass = "Please, confirm your password"
    } else if (values.confirmPass[0] !== values.password[0]) {
        error.confirmPass = "Passwords don't match"
    } else {
        error.confirmPass = ""
    }

    return error;
}

export default Validation;