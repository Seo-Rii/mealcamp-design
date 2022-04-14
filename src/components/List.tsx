import Ripple from "./Ripple";
import '../style/list.scss'
import React from "react";

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
                <ListItem>풀빛마루</ListItem>
                <ListItem>카이마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>카이마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>카이마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>카이마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>카이마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>카이마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>카이마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>풀빛마루</ListItem>
                <ListItem>카이마루</ListItem>
                <ListItem>풀빛마루</ListItem>
            </div>
        </div>
    )
}