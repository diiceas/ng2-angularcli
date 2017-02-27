import { Component } from '@angular/core';
import { Auth }      from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'admin',
  templateUrl: './admin.template.html'
})

export class AdminComponent {
  constructor(private auth: Auth) {}
};
