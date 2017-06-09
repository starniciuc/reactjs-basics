export function setUserName(name) {
    return {
        type: 'SET_NAME',
        payload: name
    };
}
export function setUserAge(age) {
    return {
        type: 'SET_AGE',
        payload: age
    };
}
