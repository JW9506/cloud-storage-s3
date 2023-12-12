import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner/loading-spinner.service';
import { MessageBoxService } from 'src/app/services/message-box/message-box.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { UserManagementService } from 'src/app/services/user-management/user-management.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
