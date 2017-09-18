import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabindingComponent } from './databinding/databinding.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DirectiveComponent } from './directive/directive.component';

const routes: Routes = [
    { path: '', component: DatabindingComponent },
    { path: 'about/:id/:name', component: AboutComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: 'directive', component: DirectiveComponent },
    { path: '**', redirectTo: 'notfound' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
