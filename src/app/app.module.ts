import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { PokemonsModule } from './pokemons/pokemons.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FlexLayoutModule,
    PokemonsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
