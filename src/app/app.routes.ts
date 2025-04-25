import { Routes } from '@angular/router';
import { EstimatorComponentComponent } from './estimator-component/estimator-component.component';
import { BoardComponentComponent } from './board-component/board-component.component';

export const routes: Routes = [
    {path: 'calculator',component:EstimatorComponentComponent},
    {path: 'boards',component: BoardComponentComponent}
];
