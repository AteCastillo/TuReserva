export default function validateInfo(values){
    let errors = {}
    // trim to get rid of whitespace, if nothing is typed in there

    if(!values.name.trim()){
        errors.name = 'Name required';
    }

    if(!values.description.trim()){
        errors.description = 'Description required';
    }

    if(!values.price.trim()){
        errors.price = 'Price required';
    }

    if(!values.duration.trim()){
        errors.duration = 'Duration required';
    }

    return errors;
}