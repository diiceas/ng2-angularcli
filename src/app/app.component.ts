import { Component }         from '@angular/core';
import { Auth }              from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.template.html'
})

export class AppComponent {
  constructor(private auth: Auth) {}
};
