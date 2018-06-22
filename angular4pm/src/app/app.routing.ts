import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/user.component';
import { DetachedUserComponent } from './detached/detacheduser.component';
import { SampleComponent } from './SampleComponent';
import { WorkspaceComponent } from './index/workspace/workspace.component';

const routes: Routes = [
  { path: '', component: WorkspaceComponent },
  { path: 'edit/:id', component: UserComponent },
  { path: 'detached', component: DetachedUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
