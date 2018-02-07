import { AbstractControl } from '@angular/forms';

const EMAIL_REGEXP = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;

const email = (c: AbstractControl) => EMAIL_REGEXP.test(c.value) ? null : { email: { valid: false } };

export default { email };