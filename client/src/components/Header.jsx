import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { CLEAR_MESSAGE } from '../actions/types';

export default function Header() {
    const navigate = useNavigate();
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    let location = useLocation();

    useEffect(() => {
        if (["/login", "/register"].includes(location.pathname)) {
          dispatch(CLEAR_MESSAGE()); // clear message when changing location
        }
      }, [dispatch, location]);
    
    const logOut = useCallback(() => {
        dispatch(logout(currentUser.tokens.refresh));
    }, [dispatch, currentUser]);


    return (
        <>
            <div className='flex flex-row justify-between bg-sky-700 p-6'>
                <div>
                    <nav className="flex items-center justify-between flex-wrap">
                            <a href='/'>
                                <div className="flex items-center flex-shrink-0 text-white mr-6">
                                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                                    <span className="font-semibold text-xl tracking-tight">AI CHAT</span>
                                </div>
                            </a>
                        <div className="block lg:hidden">
                            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            </button>
                        </div>
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                                <a href="/schedule" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-xl">
                                    Schedule
                                </a>
                                <a href="/chat" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-xl">
                                    Chat
                                </a>
                                <a href="/news" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-xl">
                                    News
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                
                <div>
                    <nav className="flex items-center justify-between flex-wrap">                      
                
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                                {!currentUser ? (
                                    <div>
                                        <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-xl">
                                            LOGIN
                                        </a>
                                        <a href="/register" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-xl">
                                            REGISTER
                                        </a>
                                    </div>

                                    
                                ) : (
                                    <div>
                                        <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-xl">
                                            {currentUser.username}
                                        </a>
                                        <button onClick={() => {
                                            logOut();
                                            navigate("/");
                                        }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-xl">
                                            LOGOUT
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
        
    )
}
