import React, {useEffect, useState} from 'react';
import {Keyboard, SafeAreaView, StyleSheet} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import CustomStatusBar from '../../components/CustomStatusBar';
import Header from '../../components/Header';
import ScrollSpy from '../../components/ScrollSpy';
import {useGetAllPostQuery} from '../../redux/services/post';
import theme from '../../theme/theme';
import Loader from '../../components/Loader';

const HomeA = () => {
  //DATA fetching.
  const {data, isLoading} = useGetAllPostQuery();
  //STATES for searching.
  const [text, setText] = useState('');
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState([]);
  console.log(data, '<==================xoxo');
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
      <Loader loading={isLoading}/>
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
