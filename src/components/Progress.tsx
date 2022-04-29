import React from "react";
import '../style/progress.scss'

interface ProgressProps extends React.HTMLProps<HTMLDivElement> {
    progress: number;
    color?: string;
}

export default ({progress, color = 'var(--mt-primary)', ...props}: ProgressProps) => {
    return <div className="--mc-progress-container" {...props}
                style={{"--mc-progress-color": color, ...(props.style || {})} as React.CSSProperties}>
        <div className="--mc-progress-bar" style={{
            width: (progress * 100) + "%"
        }}></div>
    </div>
}