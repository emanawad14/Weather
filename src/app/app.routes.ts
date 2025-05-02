import { Routes } from '@angular/router';

export const routes: Routes = 
[

    {path:'' , redirectTo:'weather' , pathMatch:'full'},
    {path:'weather' , loadComponent:()=>import('./feature/weather/weather.component').then((c)=>c.WeatherComponent)}
];
