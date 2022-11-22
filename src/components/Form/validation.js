const regexUsername = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexPassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,10}$/;

export function validate(inputs) {
  const errors = {};
  if (!regexUsername.test(inputs.username)) {
    errors.username = "Username must be a valid email";
  }
  if (!inputs.username) {
    errors.username = "Username cannot be empty, enter an username";
  }
  if (inputs.username.length > 35) {
    errors.username = "Username cannot be longer than 35 characters";
  }
  if (!regexPassword.test(inputs.password)) {
    errors.password =
      "Password must have 6 to 10 valid characters and at least a number";
  }
  return errors;
}
