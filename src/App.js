import { useEffect } from "react";
import { Text } from "react-native";
import SplashScreen from "react-native-splash-screen";
// TODO: Remove when fixed
 

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
   }, []);



  return (
    <Text>hello world</Text>
      
  );
};

export default App;
