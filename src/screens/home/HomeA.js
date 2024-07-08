import React, { useState } from 'react';
import { Keyboard, SafeAreaView, StyleSheet } from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ScrollSpy from '../../components/ScrollSpy';
import { useGetAllPostQuery } from '../../redux/services/post';
import theme from '../../theme/theme';
 import { useGetAllMenuQuery } from '../../redux/services/menu';
const HomeA = () => {
  //DATA fetching.
  const {data, isLoading} = useGetAllPostQuery();
  //const menuDATA = useGetAllMenuQuery();
  //console.log(menuDATA,'menuuuu');
   
  //STATES for searching.
  const [text, setText] = useState('');
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState([]);
  //console.log(data, '<==================xoxo');
  //USEEFFECTS.

  const _searchItem = value => {
    value.length == 0 ? _closeSearch() : setSearching(true);
    setText(value);
    let filteredData = data.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.body.toLowerCase().includes(value.toLowerCase())
        ? true
        : false,
    );
    setResult(filteredData);
  };
  const isSearching = () => {
    setSearching(true);
    setText('');
  };
  const _closeSearch = () => {
    setText('');
    setResult([]);
    setSearching(false);
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={isLoading} />
      <CustomStatusBar statusBarColor={theme.primaryColor} />
      <Header
        //closeSearching={_closeSearch}
        //search={isSearching}
        onChangeText={value => _searchItem(value)}
        textValue={text}
      />
      <ScrollSpy searching={searching} textValue={text} filteredData={result} />
    </SafeAreaView>
  );
};

export default HomeA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.defaultBackgroundColor,
  },
});
