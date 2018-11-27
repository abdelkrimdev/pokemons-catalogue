import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

import { PokemonsRoutingModule } from './pokemons.routing';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    PokemonDetailsComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SharedModule
  ]
})
export class PokemonsModule { }
