export default function validateInfo(values){
    let errors = {}
    // trim to get rid of whitespace, if nothing is typed in there
    if(!values.username.trim()){
        errors.username = 'Username required';
    }

    if(!values.name.trim()){
        errors.name = 'Name required';
    }

    if(!values.address.trim()){
        errors.address = 'Address required';
    }

    if(!values.telephone.trim()){
        errors.telephone = 'Telephone required';
    }

    if(!values.email){
        // if no value:
        errors.email = 'Email is required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z09.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if(!values.password){
        // if no value:
        errors.password = 'Password is required';
    } else if(values.password.length < 6){
        errors.password = 'Password needs at least 6 characters';
    }

    if(!values.confirmpassword){
        // if no value:
        errors.confirmpassword = 'Password is required';  
    } else if(values.confirmpassword !== values.password){
        errors.confirmpassword = 'Passwords do not match';
    }
    return errors;
}