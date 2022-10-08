import FormField from '../../components/FormField/FormField';

import { regExConstants, errorConstants } from '../../constants';

import styles from './Registration.module.scss';

export const validateField = (field) => {
  const { phoneRegex, emailRegex } = regExConstants;
  const { phoneFieldError, emailFieldError, requiredFieldError } =
    errorConstants;

  if (field.required && !field.value.trim()) {
    return requiredFieldError;
  }
  if (field.id === 'phone' && !field.value.trim().match(phoneRegex)) {
    return phoneFieldError;
  }
  if (field.id === 'email' && !field.value.trim().match(emailRegex)) {
    return emailFieldError;
  }

  return;
};

export const getFields = (registrationData, onChangeField) => {
  return registrationData.map((row, rowIndex) => {
    if (Array.isArray(row)) {
      return (
        <div
          className={styles.registration_page_columns}
          key={`row-${rowIndex}`}
        >
          {row.map((field, fieldIndex) => (
            <FormField
              key={`row-field-${rowIndex}--${fieldIndex}`}
              onChange={onChangeField(field.id)}
              {...field}
            />
          ))}
        </div>
      );
    }
    return (
      <FormField
        key={`row-${rowIndex}`}
        {...row}
        onChange={onChangeField(row.id)}
      />
    );
  });
};

export const validateFields = (registrationData) => {
  let isFormValid = true;
  const changedData = [...registrationData].map((item) => {
    if (Array.isArray(item)) {
      return item.map((field) => {
        field.error = validateField(field);
        isFormValid = field.error ? false : isFormValid;
        return field;
      });
    } else {
      item.error = validateField(item);
      isFormValid = item.error ? false : isFormValid;
    }
    return item;
  });
  return {
    fields: changedData,
    isFormValid,
  };
};
