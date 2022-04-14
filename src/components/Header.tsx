import React, {useEffect, useRef} from 'react';

import {Button} from './Button';
import '../style/header.scss';
import {IconButton} from './IconButton';

type User = {
    name: string;
};

interface HeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}

export default ({user, onLogin, onLogout, onCreateAccount}: HeaderProps) => {
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
                    <IconButton icon={'notifications'}/>
                </div>
            </div>
        </header>
        <div style={{height: 62}}/>
    </>
}
