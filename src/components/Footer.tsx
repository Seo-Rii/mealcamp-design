import React, {useEffect, useRef} from 'react';
import '../style/footer.scss';
import '../style/icon.scss';
import Ripple from "./Ripple";
import {className} from "../util/class";


interface FooterItemProps {
    icon: string;
    text?: string;
    active?: boolean
    ripple?: boolean;
    indicator?: boolean;
}

interface FooterProps extends React.HTMLProps<HTMLDivElement> {

}

export const FooterItem = ({icon, text, active = false, ripple = true, indicator = active}: FooterItemProps) => {
    return <div className={className(['--mc-footer-item', active && 'active'])}>
        <span className={active ? "--mc-icon" : "--mc-icon-outlined"} style={{fontSize: 16}}>{icon}</span>
        {indicator && <div className="--mc-footer-item-indicator"/>}
        {ripple && <Ripple center/>}
    </div>
}

export default ({children}: FooterProps) => {
    return <>
        <div style={{height: 62}}/>
        <footer>
            {children}
        </footer>
    </>
}
