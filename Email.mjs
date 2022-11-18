function Email(email, validationChars) {
    this.email = email;
    this.validationChars = validationChars;
    this.displayEmail = () => {
        console.log(`Your email: ${this.email}`);
    }
    this.validate = () => {
        let vFlags = new Array(this.validationChars.length);
        for (let i = 0; i < this.validationChars.length; i++) {
            if (this.email.split('').includes(this.validationChars[i])) {
                vFlags[i] = true;
            }
            else {
                vFlags[i] = false;
            }
        }
        return vFlags.includes(false) ? 'invalid email' : 'email is correct'
    }
}

