import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssemblyComponent } from './assembly/assembly.component';
import { AuditorDiagramsComponent } from './auditor-diagrams/auditor-diagrams.component';
import { CategoriesComponent } from './categories/categories.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { LoginComponent } from './login/login.component';
import { OperatorDashboardComponent } from './operator-dashboard/operator-dashboard.component';
import { PartsComponent } from './parts/parts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'operator_diagrams', component: OperatorDashboardComponent },
  { path: 'parts', component: PartsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admin_diagrams', component: DiagramsComponent },
  { path: 'auditor_diagrams', component: AuditorDiagramsComponent },
  { path: 'assembly/:id', component: AssemblyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
