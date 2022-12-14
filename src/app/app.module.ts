import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule, NgbNav, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SingupComponent } from './singup/singup.component';
import { UsersComponent } from './users/users.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { UsersAdminFiltersComponent } from './users-admin-filters/users-admin-filters.component';
import { UsersAdminFiltersTemplateComponent } from './users-admin-filters-template/users-admin-filters-template.component';
import { UsersAdminFiltersTemplateFormComponent } from './users-admin-filters-template-form/users-admin-filters-template-form.component';
import { UsersAdminListComponent } from './users-admin-list/users-admin-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesAdminComponent } from './categories-admin/categories-admin.component';
import { CategoriesAdminFiltersComponent } from './categories-admin-filters/categories-admin-filters.component';
import { CategoriesAdminFiltersTemplateComponent } from './categories-admin-filters-template/categories-admin-filters-template.component';
import { CategoriesAdminFiltersTemplateFormComponent } from './categories-admin-filters-template-form/categories-admin-filters-template-form.component';
import { CategoriesAdminListComponent } from './categories-admin-list/categories-admin-list.component';
import { PartFormComponent } from './part-form/part-form.component';
import { PartsComponent } from './parts/parts.component';
import { PartsAdminComponent } from './parts-admin/parts-admin.component';
import { PartsAdminFiltersComponent } from './parts-admin-filters/parts-admin-filters.component';
import { PartsAdminFiltersTemplateComponent } from './parts-admin-filters-template/parts-admin-filters-template.component';
import { PartsAdminFiltersTemplateFormComponent } from './parts-admin-filters-template-form/parts-admin-filters-template-form.component';
import { PartsAdminFiltersTemplateListComponent } from './parts-admin-filters-template-list/parts-admin-filters-template-list.component';
import { PartsAdminListComponent } from './parts-admin-list/parts-admin-list.component';
import { PartsAdminListItemComponent } from './parts-admin-list-item/parts-admin-list-item.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { DiagramsAdminComponent } from './diagrams-admin/diagrams-admin.component';
import { DiagramsAdminFiltersComponent } from './diagrams-admin-filters/diagrams-admin-filters.component';
import { DiagramsAdminFiltersTemplateComponent } from './diagrams-admin-filters-template/diagrams-admin-filters-template.component';
import { DiagramsAdminFiltersTemplateFormComponent } from './diagrams-admin-filters-template-form/diagrams-admin-filters-template-form.component';
import { DiagramsAdminListComponent } from './diagrams-admin-list/diagrams-admin-list.component';
import { DiagramFormComponent } from './diagram-form/diagram-form.component';
import { OperatorDashboardComponent } from './operator-dashboard/operator-dashboard.component';
import { OperatorDashboardFiltersComponent } from './operator-dashboard-filters/operator-dashboard-filters.component';
import { OperatorDashboardFiltersTemplateComponent } from './operator-dashboard-filters-template/operator-dashboard-filters-template.component';
import { OperatorDashboardFiltersTemplateFormComponent } from './operator-dashboard-filters-template-form/operator-dashboard-filters-template-form.component';
import { OperatorDashboardListComponent } from './operator-dashboard-list/operator-dashboard-list.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AssemblyComponent } from './assembly/assembly.component';
import { AssemblyPartsComponent } from './assembly-parts/assembly-parts.component';
import { AssemblyPartsTemplateBaseComponent } from './assembly-parts-template-base/assembly-parts-template-base.component';
import { AssemblyPartsTemplateBladeComponent } from './assembly-parts-template-blade/assembly-parts-template-blade.component';
import { AssemblyPartsTemplateBodyComponent } from './assembly-parts-template-body/assembly-parts-template-body.component';
import { AssemblyPartsTemplateBaseListComponent } from './assembly-parts-template-base-list/assembly-parts-template-base-list.component';
import { AssemblyPartsTemplateBladeListComponent } from './assembly-parts-template-blade-list/assembly-parts-template-blade-list.component';
import { AssemblyPartsTemplateBodyListComponent } from './assembly-parts-template-body-list/assembly-parts-template-body-list.component';
import { AssemblyFormComponent } from './assembly-form/assembly-form.component';
import { AssemblyPartItemComponent } from './assembly-part-item/assembly-part-item.component';
import { AuditorDiagramsComponent } from './auditor-diagrams/auditor-diagrams.component';
import { AuditorDiagramsFiltersComponent } from './auditor-diagrams-filters/auditor-diagrams-filters.component';
import { AuditorDiagramsFiltersTemplateComponent } from './auditor-diagrams-filters-template/auditor-diagrams-filters-template.component';
import { AuditorDiagramsFiltersTemplateFormComponent } from './auditor-diagrams-filters-template-form/auditor-diagrams-filters-template-form.component';
import { AuditorDiagramsListComponent } from './auditor-diagrams-list/auditor-diagrams-list.component';
import { AuditorDiagramsFormComponent } from './auditor-diagrams-form/auditor-diagrams-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    DashboardComponent,
    AlertComponent,
    UsersComponent,
    UsersAdminComponent,
    UsersAdminFiltersComponent,
    UsersAdminFiltersTemplateComponent,
    UsersAdminFiltersTemplateFormComponent,
    UsersAdminListComponent,
    UserFormComponent,
    CategoryFormComponent,
    CategoriesComponent,
    CategoriesAdminComponent,
    CategoriesAdminFiltersComponent,
    CategoriesAdminFiltersTemplateComponent,
    CategoriesAdminFiltersTemplateFormComponent,
    CategoriesAdminListComponent,
    PartFormComponent,
    PartsComponent,
    PartsAdminComponent,
    PartsAdminFiltersComponent,
    PartsAdminFiltersTemplateComponent,
    PartsAdminFiltersTemplateFormComponent,
    PartsAdminFiltersTemplateListComponent,
    PartsAdminListComponent,
    PartsAdminListItemComponent,
    DiagramsComponent,
    DiagramsAdminComponent,
    DiagramsAdminFiltersComponent,
    DiagramsAdminFiltersTemplateComponent,
    DiagramsAdminFiltersTemplateFormComponent,
    DiagramsAdminListComponent,
    DiagramFormComponent,
    OperatorDashboardComponent,
    OperatorDashboardFiltersComponent,
    OperatorDashboardFiltersTemplateComponent,
    OperatorDashboardFiltersTemplateFormComponent,
    OperatorDashboardListComponent,
    AssemblyComponent,
    AssemblyPartsComponent,
    AssemblyPartsTemplateBaseComponent,
    AssemblyPartsTemplateBladeComponent,
    AssemblyPartsTemplateBodyComponent,
    AssemblyPartsTemplateBaseListComponent,
    AssemblyPartsTemplateBladeListComponent,
    AssemblyPartsTemplateBodyListComponent,
    AssemblyFormComponent,
    AssemblyPartItemComponent,
    AuditorDiagramsComponent,
    AuditorDiagramsFiltersComponent,
    AuditorDiagramsFiltersTemplateComponent,
    AuditorDiagramsFiltersTemplateFormComponent,
    AuditorDiagramsListComponent,
    AuditorDiagramsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbDropdownModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
