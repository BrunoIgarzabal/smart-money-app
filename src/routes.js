import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from './Pages/Welcome';
import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';
import Report from './Pages/Report';

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Welcome, Main, NewEntry, Report
        },
        {
            initialRouteName: 'Welcome',
            backBehavior: 'history'
        }
    )
);

export default Routes;