import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Esta es la data');
    }, 3000);
  };
  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10} //bdaja el refresh
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'yellow']}
          style={{backgroundColor: '#5856D6'}} //IOS
          tintColor="white" //IOS
          title="Refreshing" //IOS
          titleColor="black" //IOS
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;

// const styles = StyleSheet.create({});
