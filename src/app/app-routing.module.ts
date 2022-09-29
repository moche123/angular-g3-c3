import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { ParentComponent } from './pages/parent/parent.component';
import { PipeDirectiveComponent } from './pages/pipe-directive/pipe-directive.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  },
  {
    path: 'pipe-directive',
    component: PipeDirectiveComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
