import React from 'react';
import './MainStyles';
import {Main} from "./Main";
import {Provider} from "react-redux";
import {store} from "./store/store";


const App: React.FC = () => (
    <Provider store={store}>
        <Main/>
    </Provider>
);

export default App;
