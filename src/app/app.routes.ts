import { Routes } from '@angular/router';
import { AboutPage } from './about-page/about-page';
import { Main } from './layouts/main/main';
import { PortfolioContainer } from './portfolio-container/portfolio-container';
import { Projects } from './projects/projects';

export const routes: Routes = [
    {
        path: '',
        component: PortfolioContainer
    },
    {
        path: 'about',
        component: AboutPage
    },
    {
        path: 'projects',
        component: Projects
    }
];
