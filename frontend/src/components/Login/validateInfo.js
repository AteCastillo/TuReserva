export default function validateInfo(values){
    let errors = {}
    // trim to get rid of whitespace, if nothing is typed in there
    if(!values.username){
        errors.username = 'Username required';
    }

    
    if(!values.password){
        // if no value:
        errors.password = 'Password is required';
    } 
    return errors
}