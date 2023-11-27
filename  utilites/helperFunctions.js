module.exports = {
    isStringEmpty: (string, errorMsg = '') => {
        if (!string) {
            {
                return {
                    error: errorMsg,
                    success: false
                }
            }
        }
        return {
            error: null,
            success: true
        }
    },
    validationResult: (arrayOfValidations) => {
        const errors = [];
        arrayOfValidations.forEach(validation => {
            if (!validation.success) {
                errors.push(validation.error);
            }
        });
        return errors;
    }
};