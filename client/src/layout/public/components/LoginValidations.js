function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (values.email === "") {
        error.email = "Please, enter your email"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Please, enter valid email"
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

    return error;
}

export default Validation;