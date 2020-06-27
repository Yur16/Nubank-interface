import { StatusBar } from 'react-native';
import React from 'react';

import Main from './src/pages/Main';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae"/>
      <Main />
    </>
  );
}