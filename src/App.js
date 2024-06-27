import {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './screens/LoginScreen';
import auth from '@react-native-firebase/auth';
import SignUpScreen from './screens/SignUpScreen';
import LogOutScreen from './screens/LogOutScreen';
import Routes from './routes/Routes';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';

// TODO: Remove when fixed

const App = () => {
  const [user, setUser] = useState();
  console.log(user, 'userrr');

  //onAuthStateStateChanged is async listener,
  //which trigger the initial state whenver connection estaiblished with FB

  const onAuthStateSave = user => {
    setUser(user);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateSave);
    return subscriber;
  });

  return (
    //<Routes/>
    //<SignUpScreen/>
    // <LogOutScreen/>
    // <>{user?<LogOutScreen/>:<LoginScreen/>}</>
    <Provider store={store}>
      <Routes user={user} />
    </Provider>
  );
};

export default App;
