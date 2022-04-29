import React from "react";
import {FooterItem} from "../Footer";
import Progress from "../Progress";

export default () => {
    return <div className="wrapper">
        <FooterItem icon='shopping_cart' ripple={false} active indicator={false}/>
        <Progress progress={1} style={{width: '20%'}} color='var(--mt-on-surface)'/>
        <FooterItem icon='payments' ripple={false} active indicator={false}/>
        <Progress progress={0.5} style={{width: '20%'}} color='var(--mt-on-surface)'/>
        <FooterItem icon='takeout_dining' ripple={false}/>
    </div>
}