import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './class/User';
import { GetService } from './services/get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

}
