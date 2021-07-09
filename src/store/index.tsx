import { constantReducer, constantSetStore } from '@/store/constant';
import { setStore } from '@/store/getStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';

const middlewares: any[] = [];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const appReducer = combineReducers({
	constant: constantReducer,
});

const rootReducer = (state: any, action: any) => {
	if (action.type === 'RESET_STORE_DATA') {
		//Clear store state
		state = undefined;
	}

	return appReducer(state, action);
};

const persistedReducer = persistReducer(
	{
		key: 'root',
		whitelist: ['global', 'constant'], // if you want to persist something, put it here
		storage: AsyncStorage,
	},
	rootReducer,
);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);

export default store;

// set store
setStore(store);
constantSetStore(store);
