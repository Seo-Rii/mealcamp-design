import React, {useEffect, useRef} from 'react';

import {Button} from './Button';
import '../style/header.scss';
import styled from "styled-components";

type User = {
    name: string;
};

interface HeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}

export const Header = ({user, onLogin, onLogout, onCreateAccount}: HeaderProps) => {
    const header = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 0) {
                header.current?.classList.add('--mc-header--scrolled');
            } else {
                header.current?.classList.remove('--mc-header--scrolled');
            }
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return <>
        <header ref={header}>
            <div className="wrapper">
                <div>
                    <h1>MealCamp</h1>
                </div>
                <div>
                    {user ? (
                        <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
                            <Button size="small" onClick={onLogout} label="Log out"/>
                        </>
                    ) : (
                        <>
                            <Button size="small" onClick={onLogin} label="Log in"/>
                            <Button primary size="small" onClick={onCreateAccount} label="Sign up"/>
                        </>
                    )}
                </div>
            </div>
        </header>
        <div style={{height: 62}}/>
    </>
}
