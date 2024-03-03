import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/IUser';
import { ApiServiceService } from '../../services/api-service.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-cadastration',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './cadastration.component.html',
  styleUrl: './cadastration.component.scss'
})
export default class CadastrationComponent {
  #fb = inject(FormBuilder);
  #apiService: ApiServiceService = inject(ApiServiceService);
  public validationMessages = {
    firstName: [
      { type: 'required', message: 'First name is required' },
      { type: 'minlength', message: 'First name must be at least 8 characters long' },
      { type: 'maxlength', message: 'First name cannot be more than 20 characters long' }
    ],
    lastName: [
      { type: 'required', message: 'Last name is required' },
      { type: 'minlength', message: 'Last name must be at least 8 characters long' },
      { type: 'maxlength', message: 'Last name cannot be more than 20 characters long' }

    ],
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

    firstName: [
      '',
      Validators.compose(
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(8)
        ])
    ],
    lastName: [
      '', Validators.compose(
        [Validators.required,
        Validators.maxLength(20),
        Validators.minLength(8)
        ])
    ], email: [
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
      let cadastration: IUser = {
        id: 0,
        email: this.profileForm.get("email")!.value,
        password: this.profileForm.get("password")!.value,
        lastName: this.profileForm.get("lastName")!.value,
        firstName: this.profileForm.get("firstName")!.value
      }
      this.#apiService.createUser$(cadastration).pipe(
        concatMap(() => this.#apiService.createUser$(cadastration)))
        .subscribe({
          next: (next) => console.log(next),
          error: (error) => console.log(error)
        });
    }

  }
}
