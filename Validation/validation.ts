interface FormErrors {
  name?: string;
  phone?: string;
}

interface FormErrorsFromContact {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
}

export const contactValidate = (values: any) => {
  const re = /\S+@\S+\.\S+/;
  let errors: FormErrors = {};

  if (!values.name) {
    errors.name = 'The field is required.';
  }

  return errors;
};

export const contactFromValidate = (values: any) => {
  const re = /\S+@\S+\.\S+/;
  let errors: FormErrorsFromContact = {};
  if (!values.email) {
    errors.email = 'The field is required.';
  } else if (!re.test(values.email)) {
    errors.email = 'Please Write A Valid Email Address';
  }
  if (!values.name) {
    errors.name = 'The field is required.';
  }
  if (!values.message) {
    errors.message = 'The field is required.';
  }
  if (!values.phone) {
    errors.phone = 'The field is required.';
  }
  return errors;
};
