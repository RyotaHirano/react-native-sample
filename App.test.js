import 'react-native';
import { StackNavigator } from 'react-navigation'
import React from 'react';
import App from './App';
import PageAScreen from './components/PageAScreen'

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

test('render PageA', () => {
  const App = StackNavigator({
    PageA: {
      screen: PageAScreen
    },
  })
  const navigation = App

  let tree = renderer.create(
    <PageAScreen navigation={navigation}/>
  );

  tree = tree.toJSON()
  expect(tree).toMatchSnapshot();
})