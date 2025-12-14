import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { switchDashboardTab } from "@/lib/redux/features/uiSlice";
import { useDispatch } from "react-redux";

const Tab = (props) => {
    const dispatch = useDispatch();
    const selectedTab = useSelector((state) => state.ui.selectedHomeTab);

    return (
        <Button
            key={props.tab.value}
            variant={selectedTab === props.tab.value ? "default" : "outline"}
            onClick={(e) => dispatch(switchDashboardTab(props.tab.value))}
        >
            {props.tab.label}
        </Button>
    );
};

export default Tab;
