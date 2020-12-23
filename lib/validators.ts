export default function valid_user(username : string) : boolean {
    if (username.length >= 4 && username.length <= 16) {
        return true;
    }
    return false;
}
