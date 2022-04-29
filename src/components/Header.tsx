import React, {useEffect, useRef} from 'react';

import {Button} from './Button';
import '../style/header.scss';
import {IconButton} from './IconButton';
import {className} from "../util/class";

interface HeaderProps {
    subtitle?: string
    back?: boolean
}

export default ({subtitle, back = false}: HeaderProps) => {
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
            <div className={className(['wrapper', subtitle && '--mc-header-dynamic'])}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    {back && <IconButton icon={'arrow_back'} style={{marginRight: -20}}/>}
                    <div className="--mc-header-titlecontainer">
                        <h1 className="--mc-header-title">MealCamp</h1>
                        {subtitle && <h1 className="--mc-header-subtitle">{subtitle}</h1>}
                    </div>
                </div>
                <div>
                    <IconButton icon={'notifications'}/>
                </div>
            </div>
        </header>
        <div style={{height: 62}}/>
    </>
}
