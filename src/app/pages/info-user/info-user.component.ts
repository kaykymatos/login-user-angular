import { Component, OnInit, inject } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { IUser } from '../../interfaces/IUser';
import { LocalstorageService } from '../../services/localstorage.service';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-info-user',
  standalone: true,
  imports: [],
  templateUrl: './info-user.component.html',
  styleUrl: './info-user.component.scss'
})
export default class InfoUserComponent implements OnInit {

  #apiService: ApiServiceService = inject(ApiServiceService);
  #localStorageService: LocalstorageService = inject(LocalstorageService);
public usuario: IUser = {
  firstName: "",
  id: 0,
  lastName: "",
  email: "",
  password: ""
};
  ngOnInit(): void {
    this.#apiService.getInfoUser$(
      this.#localStorageService.getItem('token')!).subscribe((info) => {
        this.usuario = info;
      })
  }



}
