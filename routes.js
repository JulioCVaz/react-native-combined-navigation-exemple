import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import TesteRouter from './pages/TesteRouter';
import newRouter from './pages/newRouter';
import TwoRouter from './pages/TwoRouter';

export default createAppContainer(
  createDrawerNavigator({
    TesteRouter,
    newRouter,
    TwoRouter,
  })
);
