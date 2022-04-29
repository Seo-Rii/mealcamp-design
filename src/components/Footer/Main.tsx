import React from "react";
import {FooterItem} from "../Footer";

export default () => {
    return <div className="wrapper">
        <FooterItem icon='notifications' text='알림'/>
        <FooterItem icon='home' text='홈' active/>
        <FooterItem icon='account_circle' text='계정'/>
    </div>
}