import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonTypes, ButtonColors } from '../../shared/utils/button-properties';
import { LoginFormGroup } from './login-interface.interface';
import { finalize, take } from 'rxjs/operators';
import { SnackBarService } from '../../services/snackbar.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { IUserVm, UserRole } from '../../core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly snack: SnackBarService,
    private readonly _authServiceService: AuthServiceService
  ) {}

  public loginForm: FormGroup<LoginFormGroup> = this.fb.group({
    userName: new FormControl<string | null>(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl<string | null>(null, {
      nonNullable: true,
      validators: Validators.required,
    }),
    rememberMe: new FormControl<string | null>(null),
  });

  public readonly ButtonTypes = ButtonTypes;

  public readonly ButtonColors = ButtonColors;

  public loginSubmit = false;

  public onSubmitLogin = (): void => {
    this.loginSubmit = true;
    this._authServiceService
      .login({
        userName: this.loginForm.value?.userName as string,
        password: this.loginForm.value?.password as string,
      } as IUserVm)
      .pipe(
        take(1),
        finalize(() => (this.loginSubmit = false))
      )
      .subscribe({
        next: (res: { status: number; role: UserRole; message: string }) => {
          this.snack.snackbar(
            res?.message,
            res?.status === 200 ? 'success' : 'error'
          );

          if (res?.status === 200) {
            this.router.navigate([
              res?.role === UserRole.ADMIN
                ? '/store/dashboard'
                : '/store/products',
            ]);
          }
        },
      });
  };
}
