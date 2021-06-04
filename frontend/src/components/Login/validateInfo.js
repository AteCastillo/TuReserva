export default function validateInfo(values){
    let errors = {}
    // trim to get rid of whitespace, if nothing is typed in there
    if(!values.username){
        errors.username = 'Username required';
    }

    
    if(!values.password){
        // if no value:
        errors.password = 'Password is required';
    } else if(values.password.length < 6){
        errors.password = 'Password needs at least 6 characters';
    }
}