import { CardListComponent } from './components/card-list/card-list.component';
import { CommonModule } from '@angular/common';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { GifsService } from './services/gifs.service';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SearchBoxComponent,
    HomePagesComponent,
    CardListComponent,
    GifsCardComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePagesComponent,
    
  ]
})
export class GifsModule { }
