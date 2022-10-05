import Error from '~/pages/Error';
import { Project, Today, Schedule, Dayly, Monthly, Goals, ProjectDetail } from '~/pages';
import NonLayout from '~/layouts/NonLayout';
const publicRoute = [
    // TODOLIST APP
    { path: '/', component: Schedule },
    { path: '/project', component: Project },
    { path: '/projects/:id', component: ProjectDetail },
    { path: '/today', component: Today },
    { path: '/dayly', component: Dayly },
    { path: '/monthly', component: Monthly },
    { path: '/goals', component: Goals },
    { path: '/*', component: Error, layout: NonLayout },
];

const privateRoute = [];

export { publicRoute, privateRoute };
