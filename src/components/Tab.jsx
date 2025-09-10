import {Button} from "@/components/ui/button.jsx";

const Tab =(props)=>{
    return(
        <Button
            key={props.tab.value}
            variant={props.selectedTab === props.tab.value ? "default" : "outline"}
            onClick={(e1) => props.onClick(props.tab.value)}
        >
            {props.tab.label}
        </Button>
    )
}

export default Tab;