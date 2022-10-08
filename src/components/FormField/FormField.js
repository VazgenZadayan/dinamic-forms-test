import styles from './FormField.module.scss';

const FormField = ({ name, type, options, error, onChange, placeholder }) => {
  const getField = (type, placeholder, options, onChange) => {
    if (type === 'textarea') {
      return <textarea placeholder={placeholder} onChange={onChange} />;
    }

    if (type === 'select') {
      return (
        <select placeholder={placeholder} onChange={onChange}>
          {options.map((option, index) => (
            <option key={`form-select-${index}`}>{option}</option>
          ))}
        </select>
      );
    }

    return (
      <input type={'text'} placeholder={placeholder} onChange={onChange} />
    );
  };

  return (
    <div className={styles.form_field}>
      <label>{name}</label>
      {getField(type, placeholder, options, onChange)}
      {error && <p className={styles.error_message}>{error}</p>}
    </div>
  );
};

export default FormField;
