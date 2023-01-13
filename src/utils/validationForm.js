import { useState, useCallback } from 'react'

function useFormWithValidation() {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const input = e.target;
        const { name, value } = input;

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: input.validationMessage });
        
        if (name === "name") {
            if (value.length < 2 || value.length > 30) {
                setErrors({ ...errors, [name]: "Поле должно содержать не менее 2 и не более 30 символов" });
            }
            if (value.length === 0) {
                setErrors({ ...errors, [name]: "Пожалуйста, заполните это поле" });
            }
        }
        
        if (name === "email" || name === "password") {
            if (value.length === 0) {
                setErrors({ ...errors, [name]: "Пожалуйста, заполните это поле" });
            }
        }
        
        setIsValid(input.closest("form").checkValidity());
    }

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return {
        values,
        errors,
        isValid,
        handleChange,
        resetForm,
        setValues,
        setIsValid,
        setErrors
    };
}

export default useFormWithValidation;