// import {Button} from "@/components/ui/button.jsx";
//
// const Tab =(props)=>{
//
//     return(
//         <Button
//             key={props.tab.value}
//             variant={props.selectedTab === props.tab.value ? "default" : "outline"}
//             onClick={(e1) => props.onClick(props.tab.value)}
//         >
//             {props.tab.label}
//         </Button>
//     )
// }
//
// export default Tab;

import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { switchHomeTab } from "@/lib/redux/features/uiSlice";
import { useDispatch } from "react-redux";

const Tab = (props) => {
    const dispatch = useDispatch();
    const selectedTab = useSelector((state) => state.ui.selectedHomeTab);

    return (
        <Button
            key={props.tab.value}
            variant={selectedTab === props.tab.value ? "default" : "outline"}
            onClick={(e) => dispatch(switchHomeTab(props.tab.value))}
        >
            {props.tab.label}
        </Button>
    );
};

export default Tab;
