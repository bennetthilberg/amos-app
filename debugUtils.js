import AsyncStorage from '@react-native-async-storage/async-storage';

export async function logStorage() {
  const keys = await AsyncStorage.getAllKeys();
  const stores = await AsyncStorage.multiGet(keys);

  stores.map((result, i, store) => {
    console.log('Data:', { [store[i][0]]: store[i][1] });
    return true;
  });
}
