import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'forms', loadChildren: './forms/forms.module#FormsPageModule' },
  { path: 'missions', loadChildren: './missions/missions.module#MissionsPageModule' },
  { path: 'patients', loadChildren: './patients/patients.module#PatientsPageModule' },
  { path: 'teams', loadChildren: './teams/teams.module#TeamsPageModule' },
  { path: 'newform', loadChildren: './newform/newform.module#NewformPageModule' },
  { path: 'patient', loadChildren: './patient/patient.module#PatientPageModule' },
  { path: 'newmessage', loadChildren: './newmessage/newmessage.module#NewmessagePageModule' },
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
  { path: 'photo', loadChildren: './photo/photo.module#PhotoPageModule' },
  { path: 'missiondetails', loadChildren: './missiondetails/missiondetails.module#MissiondetailsPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'team', loadChildren: './team/team.module#TeamPageModule' },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

