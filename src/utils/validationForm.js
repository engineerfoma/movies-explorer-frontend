import { useState, useCallback } from 'react';

function useFormWithValidation() {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: e.target.validationMessage });

        // if (name === "name") {
        //     if (value.length < 2 || value.length > 30) {
        //         setErrors({ ...errors, [name]: "Поле должно содержать не менее 2 и не более 30 символов" });
        //     }
        //     if (value.length === 0) {
        //         setErrors({ ...errors, [name]: "Пожалуйста, заполните это поле" });
        //     }
        // }

        // if (name === "email" || name === "password") {
        //     if (value.length === 0) {
        //         setErrors({ ...errors, [name]: "Пожалуйста, заполните это поле" });
        //     }
        // }
        

        setIsValid(e.target.closest("form").checkValidity());
    }

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, errors, isValid, handleChange, resetForm };
}

export default useFormWithValidation;