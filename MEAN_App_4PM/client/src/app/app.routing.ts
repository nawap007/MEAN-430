import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: 'app/public/public.module#PublicModule' },
    { path: 'admin', loadChildren: '../app/admin/admin.module#AdminModule' },
    { path: 'user', loadChildren: '../app/user/user.module#UserModule'  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
