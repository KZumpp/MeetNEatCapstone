import Main from './Components/Main/Main'
import { useEffect } from "react";
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import Restaurant from './Components/Restaurants/Restaurant';
import InvitePage from './Components/Invites/InvitePage';
import GenerateInvites from './Components/Invites/GenerateInvites';
import ShowFavorites from './Components/Restaurants/ShowFavorites';
import './App.css';
import { keepTheme } from './Themes';



const store = ConfigureStore();

function App() {
  useEffect(() => {
    keepTheme();
})
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div>
    <Switch>
      <Route path="/meets/new" component={GenerateInvites}/>
      <Route path="/meets" component={InvitePage}/>
      <Route path="/search" component={Restaurant}/>
      <Route path="/favorites" component={ShowFavorites} />
      <Route path="/" component={Main} />
    </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}


export default App;
