import { Routes } from '@angular/router';
import { BoardComponent } from './board.component';
import { BoardListComponent } from './board-list.component';

export const BoardRoutes: Routes = [
    { path: 'board/:id', component: BoardComponent },
    { path: '', component: BoardListComponent },
    {
        path: '**',
        redirectTo: 'board-list',
        pathMatch: 'full'
    }
];
