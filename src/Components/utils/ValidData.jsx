 const CheckValidData = (email,password)=>{

    const IsEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
    const IsPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!IsEmail) return "email is not valid";
    if(!IsPassword) return "password is not valid";
    
    return null
}
export default CheckValidData