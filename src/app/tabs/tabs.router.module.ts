import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          },
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }

        ]
      },
      {
        path: 'forms',
        children: [
          {
            path: '',
            loadChildren: '../forms/forms.module#FormsPageModule'
          },
          {
            path: '',
            loadChildren: '../newform/newform.module#NewformPageModule'
          },
          {
            path: '',
            loadChildren: '../photo/photo.module#PhotoPageModule'
          }
          
          
          
          
          
        ]
      },
      {
        path: 'missions',
        children: [
          {
            path: '',
            loadChildren: '../missions/missions.module#MissionsPageModule'
          },
          {
            path: '',
            loadChildren: '../missiondetails/missiondetails.module#MissiondetailsPageModule'
          }
        ]
      },
      {
        path: 'patients',
        children: [
          {
            path: '',
            loadChildren: '../patients/patients.module#PatientsPageModule'
          },
          {
            path: '',
            loadChildren: '../patient/patient.module#PatientPageModule'
          }
        ]
      },
      {
        path: 'teams',
        children: [
          {
            path: '',
            loadChildren: '../teams/teams.module#TeamsPageModule'
          },
          
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
