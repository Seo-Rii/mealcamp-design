import React, {useEffect, useRef} from 'react';
import '../style/footer.scss';
import '../style/icon.scss';
import {IconButton} from './IconButton';
import Ripple from "./Ripple";

interface FooterItemProps {
    icon: string;
    text: string;
    onClick?: () => void;
}

interface FooterProps {

}

export const FooterItem = ({icon, text}: FooterItemProps) => {
    return <div className="--mc-footer-item">
        <span className="--mc-icon" style={{fontSize: 16}}>{icon}</span>
        <p>{text}</p>
        <Ripple center/>
    </div>
}

export default ({}: FooterProps) => {
    return <>
        <div style={{height: 62}}/>
        <footer>
            <div className="wrapper">
                <FooterItem icon='notifications' text='알림'/>
                <FooterItem icon='home' text='홈'/>
                <FooterItem icon='account_circle' text='계정'/>
            </div>
        </footer>
    </>
}
