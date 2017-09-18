import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabindingComponent } from './databinding/databinding.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { ChildComponent } from './inheritance/child.component';
import { MasterComponent } from './nested/master.component';
import { ParentHooksComponent } from './hooks/parent-hooks.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';

const routes: Routes = [
    { path: '', component: DatabindingComponent },
    { path: 'about/:id/:name', component: AboutComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: 'directive', component: DirectiveComponent },
    { path: 'pipe', component: PipeComponent },
    { path: 'inheritance', component: ChildComponent },
    { path: 'nested', component: MasterComponent },
    { path: 'templatedriven', component: TemplatedrivenComponent },
    { path: 'modeldriven', component: ModeldrivenComponent },
    { path: 'hooks', component: ParentHooksComponent },
    { path: '**', redirectTo: 'notfound' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
