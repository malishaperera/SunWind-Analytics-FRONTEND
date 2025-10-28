import {Card} from "@/components/ui/card.jsx";
import {format, toDate} from "date-fns";
import {Skeleton} from "@/components/ui/skeleton.jsx";

const DataCard = ({ data, isLoading, isError, error, title ="Data Overview" }) => {
    if (isLoading) {
        return (
            <Card className="rounded-md p-4">
                <Skeleton className="h-6 w-64 mb-4" />
                <div className="grid grid-cols-7 gap-4 mt-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div key={index} className="col-span-1 px-2 py-1">
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <Skeleton className="h-3 w-12" />
                                <Skeleton className="h-6 w-16" />
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        );
    }

    if (!data || isError) {
        return null;
    }

    return (
        <Card className="rounded-md p-4">
            <h2 className="text-xl font-medium text-foreground">
                Last 7 Days Energy Production
            </h2>

            <div className="grid grid-cols-7 gap-4 mt-4">
                {data.slice(0, 7).map((el) => {
                    return (
                        <div
                            key={el._id.date}
                            className="col-span-1 px-2 py-1 hover:bg-gray-100"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-gray-500 font-medium">
                                    {format(toDate(el._id.date), "MMM d")}
                                </h3>
                                <p className="text-xl font-bold text-foreground">
                                    {el.totalEnergy} kWh
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    )
};

export default DataCard;