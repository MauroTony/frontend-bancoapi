import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatusComponent, StatushomeComponent } from './components';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: StatushomeComponent,
        children: [{ path: '', component: StatusComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(HomeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}