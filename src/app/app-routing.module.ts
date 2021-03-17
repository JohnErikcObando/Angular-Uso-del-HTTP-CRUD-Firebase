import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const routes:Routes =[
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe', component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'heroe'}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
