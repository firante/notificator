import { AbstractControl } from '@angular/forms';

const EMAIL_REGEXP = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;

const email = (c: AbstractControl) => EMAIL_REGEXP.test(c.get('email').value) ?  c.get('email').setErrors(null) : c.get('email').setErrors({ 'invalidEmail': true });

const passwordMatch = (c: AbstractControl) => c.get('password').value === c.get('confirmPassword').value ?  c.get('confirmPassword').setErrors(null) : c.get('confirmPassword').setErrors({'MatchPassword': true});

export default { email, passwordMatch };