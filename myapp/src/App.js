
import './App.css';
import MyRoute from './MyRoute';
//import { legacy_createStore } from 'redux';          //used to know for the compiler that any reducer is a store
import { Provider } from 'react-redux';       //to pass data from reducer to component
//import cartReducer from './redux/reducers/cartReducer';
import store from './store';


const  App=()=> {
 // const store = legacy_createStore(cartReducer)
  return (
    <Provider store={store}>
      <MyRoute/>
      
    </Provider>
  );
}

export default App;
