import Ripple from "./Ripple";
import '../style/list.scss'
import React from "react";
import TwoLine from "./ListItem/TwoLine";
import {IconButton} from "./IconButton";

export const ListItem = ({children}: React.HTMLProps<HTMLDivElement>) => {
    return <div className="--mc-list-item">
        {children}
        <Ripple/>
    </div>
}

export default () => {
    return (
        <div className="--mc-list">
            <div className="--mc-list-container">
                <TwoLine title="풀빛마루" subtitle="3분" meta={<IconButton icon='brunch_dining' superscript='star'/>}/>
                <TwoLine title="오늘도든든" subtitle="3분" meta={<IconButton icon='rice_bowl'/>}/>
                <TwoLine title="휴 김밥" subtitle="3분" meta={<IconButton icon='ramen_dining'/>}/>
                <TwoLine title="리틀하노이" subtitle="3분" meta={<IconButton icon='ramen_dining'/>}/>
                <TwoLine title="롯데리아" subtitle="3분" meta={<IconButton icon='fastfood'/>}/>
                <TwoLine title="오늘도든든" subtitle="3분" meta={<IconButton icon='rice_bowl'/>}/>
                <TwoLine title="휴 김밥" subtitle="3분" meta={<IconButton icon='ramen_dining'/>}/>
                <TwoLine title="리틀하노이" subtitle="3분" meta={<IconButton icon='ramen_dining'/>}/>
                <TwoLine title="롯데리아" subtitle="3분" meta={<IconButton icon='fastfood'/>}/>
                <TwoLine title="오늘도든든" subtitle="3분" meta={<IconButton icon='rice_bowl'/>}/>
                <TwoLine title="휴 김밥" subtitle="3분" meta={<IconButton icon='ramen_dining'/>}/>
                <TwoLine title="리틀하노이" subtitle="3분" meta={<IconButton icon='ramen_dining'/>}/>
                <TwoLine title="롯데리아" subtitle="3분" meta={<IconButton icon='fastfood'/>}/>
            </div>
        </div>
    )
}