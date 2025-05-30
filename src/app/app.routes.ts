import { Routes } from '@angular/router';
import { PageMain } from './pages/page-main/page-main';
import { PageInfo } from './pages/page-info/page-info';
import { PageError } from './pages/page-error/page-error';

export const routes: Routes = [
	{ component: PageMain, path: '', pathMatch: 'full' },
	{ component: PageInfo, path: 'info', pathMatch: 'full' },
	// {
	// 	path: '**',
	// 	redirectTo: '',
	// 	pathMatch: 'full'
	// },
	{
		path: '**',
		component: PageError,
		pathMatch: 'full'
	},
];
