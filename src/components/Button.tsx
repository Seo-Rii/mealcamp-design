import React from 'react';
import Ripple from "./Ripple";
import '../style/button.scss';
import {className} from "../util/class";

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    raised?: boolean
    onClick?: () => void;
}

export const Button = ({
                           primary = false,
                           size = 'medium',
                           backgroundColor,
                           label,
                           raised = false,
                           ...props
                       }: ButtonProps) => {
    const mode = primary ? '--mc-button--primary' : '--mc-button--secondary';
    return (
        <button
            type="button"
            className={className(['--mc-button', `--mc-button--${size}`, mode, raised ? '--mc-button--raised' : ''])}
            {...props}
        >
            {label}
            <Ripple primary={primary}/>
        </button>
    );
};
