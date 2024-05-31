import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import Routes from "./routes/Routes";
// TODO: Remove when fixed
 

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
   }, []);



  return (
    <Routes/>
      
  );
};

export default App;
