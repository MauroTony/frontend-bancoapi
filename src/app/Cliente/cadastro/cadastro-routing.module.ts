import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent, CadastroComponent } from './components';

export const CadastrosRoutes: Routes = [
    {
        path: 'cadastro',
        component: CadastroComponent,
        children: [{ path: '', component: CadastrarComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(CadastrosRoutes)],
    exports: [RouterModule]
})
export class CadastroRoutingModule {
}