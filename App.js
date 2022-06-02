import MainStackNavigator from './routes/MainStackNavigator';
import { Provider, connect } from 'react-redux';
// import { createStore } from 'redux';

// let Store = createStore()

export default function App() {
  return (
    <MainStackNavigator />
  );
}

