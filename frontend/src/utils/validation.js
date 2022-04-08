/**
 * VERY simple email validation
 *
 * @param {String} text - email to be validated
 * @return {Boolean}
 *
 */
export function validateEmail(text) {
  return text?.indexOf("@") !== -1;
}

/**
 * Ensures an username consists of only letters, hyphens, periods and comas
 *
 * @param {String} username - username to be validated
 * @return {Boolean}
 */
export function validateName(username) {
  return /^[a-z ,.'-]+$/i.test(username);
}


// eslint-disable-next-line
export default {
  email: validateEmail,
  username: validateName,
  firstName: validateName,
  middleName: validateName,
  lastName: validateName,
  lastLastName: validateName,
};
