import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import UsersContainer from "./component/Users/UsersContainer";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./redux/redux-store";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import Login from "./component/Login/LoginContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./component/common/Preloader";

function App() {
    const initilized = useSelector(state => state.app.initilized)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    if (!initilized) {
        return <Preloader/>
    }

    return <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
            <Route path={"/users"} render={() => <UsersContainer/>}/>
            <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
            <Route path={"/login"} render={() => <Login/>}/>
            <Route exact path={"/"} render={() => <Redirect to="/users"/>}/>
        </div>

    </div>
}

const SocialApp = withRouter(App)

const AppContainer = () => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <SocialApp/>
            </Provider>
        </BrowserRouter>
    )

}


export default AppContainer;