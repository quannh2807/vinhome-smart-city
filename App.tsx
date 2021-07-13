import React from 'react';
import { Provider } from 'react-redux';
import { RootNavigator } from './src/navigations/RootNavigation';
import { PersistGate } from 'redux-persist/integration/react';
import { UIKitProvider } from './src/components/UIKitProvider';
import { LogBox } from 'react-native'

LogBox.ignoreAllLogs();

const App = () => {
	return (
		<Provider store={require('@/store').default}>
			<PersistGate persistor={require('@/store').persistor}>
				<UIKitProvider>
					<RootNavigator />
				</UIKitProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
