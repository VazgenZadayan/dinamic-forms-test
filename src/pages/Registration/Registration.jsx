import { getFields } from './validation';

import useRegistration from './useRegistration';

import styles from './Registration.module.scss';

const Registration = () => {
  const { onSubmit, registrationData, onChangeField } = useRegistration();

  return (
    <div className={styles.registration_page}>
      <h2>Registration</h2>
      <form onSubmit={onSubmit} className={styles.registration_form_wrapper}>
        {getFields(registrationData, onChangeField)}
        <button type={'submit'} className={styles.registration_submit_button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
