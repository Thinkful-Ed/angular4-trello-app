import { Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board-list/board-list.component';

export const BoardRoutes: Routes = [
    { path: 'board/:id', component: BoardComponent },
    { path: '', component: BoardListComponent },
    {
        path: '**',
        redirectTo: 'board-list',
        pathMatch: 'full'
    }
];
