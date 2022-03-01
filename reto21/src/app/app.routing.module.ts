import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from "./error404/error404.component";
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from "./users/details/details.component";
import { ListComponent } from "./users/list/list.component";
import { UserComponent } from "./users/user/user.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contact-reactive', loadChildren: () => import('./contact-reactive/contact-reactive.module').then(m => m.ContactReactiveModule) },
    { path: 'contact-template', component: ContactComponent },
    { path: 'contact-template/:id', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'users', component: UserComponent, children: [
            { path: 'list', component: ListComponent },
            { path: 'details', component: DetailsComponent },

        ]
    },
    { path: '**', component: Error404Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }