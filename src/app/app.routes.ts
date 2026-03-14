import { Routes } from '@angular/router';
import { Home } from './home/home';
import { provideTransloco, provideTranslocoScope } from '@jsverse/transloco';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        loadComponent: ()=> import("./home/home").then((m)=> m.Home),
        providers: [provideTranslocoScope('home')]
    },
    {
        path:'match',
        loadComponent: ()=> import("./matches/matches").then((m)=> m.Matches),
        providers: [provideTranslocoScope('match')]
    },
    {
        path:'sign',
        loadComponent: ()=> import("./sign/sign").then((m)=> m.Sign),
        providers: [provideTranslocoScope('sign')]
    },
    {
        path:'contact',
        loadComponent: ()=> import("./contact/contact").then((m)=> m.Contact),
        providers: [provideTranslocoScope('contact')]
    },
    {
        path:'about',
        loadComponent: ()=> import("./about/about").then((m)=> m.About),
        providers: [provideTranslocoScope('about')]
    },
    {
        path:'stadium',
        loadComponent: ()=> import("./stadium/stadium").then((m)=> m.Stadium),
        providers: [provideTranslocoScope('stadium')]
    },
    {
        path:'update',
        loadComponent: ()=> import("./update/update").then((m)=> m.Update),
        providers: [provideTranslocoScope('update')]
    },
    {
        path:'faq',
        loadComponent: ()=> import("./faq/faq").then((m)=> m.Faq),
        providers: [provideTranslocoScope('faq')]
    },
    {
        path:'story',
        loadComponent: ()=> import("./story/story").then((m)=> m.Story),
        providers: [provideTranslocoScope('story')]
    },
    {
        path:'Register',
        loadComponent: ()=> import("./register/register").then((m)=> m.Register),
        children:[
            {
                path:'',
                redirectTo:'register1',
                pathMatch:'full',
            },
            {
                path:'register1',
                loadComponent: ()=> import("./register1/register1").then((m)=> m.Register1),
                providers: [provideTranslocoScope('register1')]
            },
            {
                path:'register2',
                loadComponent: ()=> import("./register2/register2").then((m)=> m.Register2),
                providers: [provideTranslocoScope('register2')]
            },
            {
                path:'register3',
                loadComponent: ()=> import("./register3/register3").then((m)=> m.Register3),
            },
            {
                path:'register4',
                loadComponent: ()=> import("./register4/register4").then((m)=> m.Register4),
            },
        ]
    },
];
