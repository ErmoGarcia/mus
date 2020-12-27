export function validUser(username : string) : string | null {
    if (username.length < 4) {
        return "Username must be at least 4 characters long";
    }

    if (username.length > 16) {
        return "Username must be at most 16 characters long";
    }

    return null;
}

export function validPass(pass : string) : string | null {

    if (pass.length < 4) {
        return "Password must be at least 4 characters long";
    }

    if ( !/^.*[0-9]+.*$/.test(pass) ) {
        return "Password must contain at least one number";
    }

    if ( !/^.*[A-Z]+.*$/.test(pass) ) {
        return "Password must contain at least one capital letter";
    }

    return null;
}

export function validEmail(email : string) : string | null {

    if ( !/^.*@.*\..*$/.test(email) ) {
        return "Introduce a valid email";
    }

    return null;
}
