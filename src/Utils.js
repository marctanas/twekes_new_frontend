export const validFullName = (fullName) => {
    const re = /^([\w]{3,})+\s+([\w]{3,})$/;
    return re.test(fullName);
}

export const validEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validPassword = (password) => {
    const re = /^.{8,12}$/;
    return re.test(password);
}

export default {};




