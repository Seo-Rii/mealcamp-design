import Ripple from "../Ripple";
import React from "react";

interface ListItemProps extends React.HTMLProps<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    meta?: any;
}

export default ({title, subtitle, meta, ...props}: ListItemProps) => {
    return <div className="--mc-list-item --mc-list-twoline" {...props}>
        <div className="--mc-list-item-container">
            {meta && <div className="--mc-list-head">{meta}</div>}
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <Ripple/>
        </div>
    </div>
}