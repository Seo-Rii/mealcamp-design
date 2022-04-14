import React, {useEffect, useState} from "react";
import '../style/ripple.scss';
import {className} from "../util/class";

interface RippleContainerProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
    duration?: number
    color?: string
    opacity?: number
    innerRef?: React.Ref<HTMLDivElement>
}

const RippleContainer = ({
                             children,
                             innerRef,
                             duration = 200,
                             color = 'var(--theme-on-surface)',
                             opacity = 0.15,
                             ...props
                         }: RippleContainerProps) =>
    <div className="--mc-ripple-container"
         style={{
             '--mc-ripple-duration': duration + 'ms',
             '--mc-ripple-color': color,
             '--mc-ripple-opacity': opacity
         } as React.CSSProperties}
         ref={innerRef} {...props}>{children}</div>

interface RippleProps {
    primary?: boolean
    duration?: number
    color?: string
    opacity?: number
}

let rippleBeginTime = 0;

export default ({
                    primary,
                    duration = 300,
                    color = primary ? 'var(--mt-on-primary)' : 'var(--mt-on-surface)',
                    opacity = primary ? 0.3 : 0.15
                }: RippleProps) => {
    const [ripplePosition, setRipplePosition] = useState({x: 0, y: 0, size: 0});
    const [rippleVisible, setRippleVisible] = useState(false);
    const [rippleAnimation, setRippleAnimation] = useState(false);
    const [rippleHideTimeout, setRippleHideTimeout] = useState(null as NodeJS.Timeout | null);

    const [touchSupport, setTouchSupport] = useState(false);

    const target = React.useRef<HTMLDivElement>(null);

    const rippleShowEvent = (event: React.MouseEvent | MouseEvent | TouchEvent) => {
        if (rippleVisible) return;
        setRippleAnimation(false);
        if (rippleHideTimeout) {
            clearTimeout(rippleHideTimeout);
            setRippleHideTimeout(null);
        }

        const rippleContainer = (event.currentTarget as HTMLElement)?.getBoundingClientRect();
        const size = Math.sqrt(rippleContainer.width ** 2 + rippleContainer.height ** 2) * 2;
        const pageX = (event as MouseEvent).pageX || (event as TouchEvent).touches[0].pageX;
        const pageY = (event as MouseEvent).pageY || (event as TouchEvent).touches[0].pageY;
        const x = pageX - rippleContainer.x - size / 2 - window.scrollX;
        const y = pageY - rippleContainer.y - size / 2 - window.scrollY;
        const newRipple = {
            x,
            y,
            size
        };

        rippleBeginTime = Date.now();
        setRipplePosition(newRipple);
        setTimeout(() => {
            setRippleAnimation(true);
            setTimeout(() => setRippleVisible(true), 0)
        }, 0);
    };

    const rippleHideEvent = (event: React.MouseEvent | MouseEvent | TouchEvent) => {
        setRippleHideTimeout(setTimeout(() => setRippleVisible(false), Math.max(0, duration - (Date.now() - rippleBeginTime))));
    };

    useEffect(() => {
        target.current?.addEventListener('mousedown', rippleShowEvent);
        target.current?.addEventListener('mouseup', rippleHideEvent);
        target.current?.addEventListener('touchstart', rippleShowEvent);
        target.current?.addEventListener('touchmove', rippleHideEvent);
        target.current?.addEventListener('touchend', rippleHideEvent);

        return () => {
            target.current?.removeEventListener('mousedown', rippleShowEvent);
            target.current?.removeEventListener('mouseup', rippleHideEvent);
            target.current?.removeEventListener('touchstart', rippleShowEvent);
            target.current?.removeEventListener('touchmove', rippleHideEvent);
            target.current?.removeEventListener('touchend', rippleHideEvent);
        }
    }, []);

    return <RippleContainer duration={duration} color={color} opacity={opacity} innerRef={target}>
        <span style={{
            left: ripplePosition.x,
            top: ripplePosition.y,
            width: ripplePosition.size,
            height: ripplePosition.size
        }} className={className([rippleAnimation ? 'animate' : '', rippleVisible ? 'show' : ''])}/>
    </RippleContainer>
}