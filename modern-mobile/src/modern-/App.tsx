import { Switch, Route } from '@modern-js/runtime/router';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <div className="text-center">测试tailwindcss</div>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
