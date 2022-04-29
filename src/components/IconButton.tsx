import React from 'react';
import Ripple from "./Ripple";
import '../style/iconbutton.scss';
import {className} from "../util/class";

interface ButtonProps extends React.HTMLProps<HTMLDivElement> {
    iconSize?: 'small' | 'medium' | 'large';
    icon: string;
    superscript?: string;
    onClick?: () => void;
}

export const IconButton = ({
                               iconSize = 'medium',
                               icon,
                               superscript,
                               ...props
                           }: ButtonProps) => {
    return (
        <button
            className={className(['--mc-iconbutton', `--mc-iconbutton--${iconSize}`])}
            // @ts-ignore
            type='button'
            {...props}
        >
            {icon}
            {superscript && <div className={className(['--mc-iconbutton-superscript', '--mc-icon'])}>{superscript}</div>}
            <Ripple zIndex={2}/>
        </button>
    );
};