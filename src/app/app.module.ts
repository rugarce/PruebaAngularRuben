import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [],
   exports: [],
   declarations: [HeroesComponent],
   bootstrap: [AppComponent]
  })
  export class AppModule { }