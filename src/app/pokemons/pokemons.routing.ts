import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: 'pokemons',
    children: [
      { path: '', component: PokemonListComponent },
      { path: ':name', component: PokemonDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
