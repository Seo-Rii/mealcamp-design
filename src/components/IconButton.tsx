import React from 'react';
import Ripple from "./Ripple";
import '../style/iconbutton.scss';
import {className} from "../util/class";

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    icon: string;
    onClick?: () => void;
}

export const IconButton = ({
                           size = 'medium',
                           icon,
                           ...props
                       }: ButtonProps) => {
    return (
        <button
            type="button"
            className={className(['--mc-iconbutton', `--mc-iconbutton--${size}`])}
            style={{position: 'relative', overflow: 'hidden'}}
            {...props}
        >
            {icon}
            <Ripple/>
        </button>
    );
};