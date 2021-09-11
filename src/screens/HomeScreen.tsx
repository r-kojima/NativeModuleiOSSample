import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  NativeModules,
  TouchableHighlight,
  NativeEventEmitter,
} from 'react-native';

const HomeScreen = () => {
  const [count, setCount] = useState(0);
  const CounterEvents = new NativeEventEmitter(NativeModules.Counter);

  useEffect(() => {
    CounterEvents.addListener('onIncrement', res => setCount(res.count));
    return () => {
      CounterEvents.removeAllListeners('onIncrement');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const increment = () => {
    NativeModules.Counter.increment(2);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={increment}>
        <Text>increment</Text>
      </TouchableHighlight>
      <Text>{`Count :${count}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
