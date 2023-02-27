import { FormControl } from '@angular/forms';

export interface LoginFormGroup {
  userName: FormControl<string | null>;
  password: FormControl<string | null>;
  rememberMe: FormControl<string | null>;

}
