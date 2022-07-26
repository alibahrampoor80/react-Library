import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Books from "./Components/Books";
import Book from "./Components/Book";
import About from "./Components/About";
import NotFound from "./Components/NotFound";

import 'bootstrap/dist/css/bootstrap.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}>
                    <Route path={'/books'} element={<Books/>}>
                        <Route index element={
                            <main style={{padding: '1rem',display:'inline-block'}}>
                                <p>کتاب مورد نظر خود را انتخاب کنید</p>
                            </main>
                        }/>

                         <Route path={':bookId'} element={<Book/>}/>

                    </Route>
                    <Route path={'/about'} element={<About/>}/>
                </Route>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>

        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
