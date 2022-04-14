import React, {useEffect, useRef} from 'react';
import '../style/footer.scss';
import '../style/icon.scss';
import {IconButton} from './IconButton';
import Ripple from "./Ripple";
import {className} from "../util/class";

interface FooterItemProps {
    icon: string;
    text: string;
    active?: boolean
    onClick?: () => void;
}

interface FooterProps {

}

export const FooterItem = ({icon, text, active = false}: FooterItemProps) => {
    return <div className={className(['--mc-footer-item', active && 'active'])}>
        <span className={active ? "--mc-icon" : "--mc-icon-outlined"} style={{fontSize: 16}}>{icon}</span>
        {active && <div className="--mc-footer-item-indicator"/>}
        <Ripple center/>
    </div>
}

export default ({}: FooterProps) => {
    return <>
        <div style={{height: 62}}/>
        <footer>
            <div className="wrapper">
                <FooterItem icon='notifications' text='알림'/>
                <FooterItem icon='home' text='홈' active/>
                <FooterItem icon='account_circle' text='계정'/>
            </div>
        </footer>
    </>
}
