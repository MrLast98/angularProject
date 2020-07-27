import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	footerText: string = "Siamo un'azienda no-profit che vuole principalmente fare da lavanderia per il denaro sporco degli importatori di lemuri in cambogia";
	@ViewChild(MatMenuTrigger) menuButton: MatMenuTrigger;
	onMouseClick() {
		this.menuButton.openMenu();	
	}
}