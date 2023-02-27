import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { IUserVm } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class LayoutHeaderComponent {
  public constructor(
    private readonly authServiceService: AuthServiceService
  ) {}

  public readonly user$: Observable<IUserVm | null> =
    this.authServiceService.user$;

  public signOut = (): void => this.authServiceService.signOut();
}
