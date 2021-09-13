import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEditContactComponent } from './home/add-edit-contact/add-edit-contact.component';
import { ViewContactsComponent } from './home/view-contacts/view-contacts.component';



const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: ViewContactsComponent
    },
    {
      path: 'addOrEdit',
      component: AddEditContactComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
