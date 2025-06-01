import { Routes } from '@angular/router';
import { PageMain } from './pages/page-main/page-main';

export const routes: Routes = [
	{ component: PageMain, path: '', pathMatch: 'full' },
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	},
];
