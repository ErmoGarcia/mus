export function valid_user(username : string) : boolean {
    if (username.length >= 4 && username.length <= 16) {
        return true;
    }
    return false;
}

export function valid_pass(pass : string) : boolean {
    const hasNumber = (val : string) => /^.*[0-9]+.*[A-Z]+.*$/.test(val);

    if (pass.length >= 4 && hasNumber(pass) ) {
        return true;
    }
    return false;
}
