import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/IUser';
import { IUserLogin } from '../../interfaces/IUserLogin';
import { ApiServiceService } from '../../services/api-service.service';
import { concatMap } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  #fb = inject(FormBuilder);
  #apiService: ApiServiceService = inject(ApiServiceService);


  public validationMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'minlength', message: 'Email must be at least 8 characters long' },
      { type: 'maxlength', message: 'Email cannot be more than 20 characters long' }

    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 8 characters long' },
      { type: 'maxlength', message: 'Password cannot be more than 20 characters long' }

    ]
  };

  public profileForm = this.#fb.group({
    email: [
      '', Validators.compose(
        [Validators.required,
        Validators.maxLength(20),
        Validators.minLength(8)
        ])
    ], password: [
      '',
      Validators.compose(
        [Validators.required,
        Validators.maxLength(20),
        Validators.minLength(8)
        ])
    ],
  });
  public submit() {
    if (!this.profileForm.valid) {
      Object.keys(this.profileForm.controls).forEach((key) => {

        this.profileForm.get(key)?.markAsTouched();
      });
    } else {
      let login: IUserLogin = {
        email: this.profileForm.get("email")?.value,
        password: this.profileForm.get("password")?.value
      }
      this.#apiService.loginUser$(login).pipe(
        concatMap(() => this.#apiService.loginUser$(login)))
        .subscribe({
          next: (next) => console.log(next),
          error: (error) => console.log(error)
        });
    }
  }

}
