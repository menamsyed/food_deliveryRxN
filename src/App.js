import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './screens/LoginScreen';
// TODO: Remove when fixed

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    //<Routes/>
    //<SignUpScreen/>
    <LoginScreen />
  );
};

export default App;
