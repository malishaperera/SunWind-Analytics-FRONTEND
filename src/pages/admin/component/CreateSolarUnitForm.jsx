import { z } from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {DatePicker} from "@/components/ui/date-picker.jsx";
import {useCreateSolarUnitMutation} from "@/lib/redux/query.js";

const formSchema = z.object({
    serialNumber: z
        .string()
        .min(1, { message: "Serial number is required" })
        .max(50, { message: "Serial number must be less than 50 characters" }),

    installationDate: z
        .string()
        .min(1, { message: "Installation date is required" }),

    capacity: z
        .preprocess((val) => Number(val), z.number().positive({ message: "Capacity must be a positive number" })),

    status: z.enum(["ACTIVE", "INACTIVE", "MAINTENANCE"], {
        message: "Please select a valid status",
    }),
});


    export function CreateSolarUnitForm() {
        // 1. Define your form.
        const form = useForm({
            resolver: zodResolver(formSchema),
        });

        const [createSolarUnit,{isLoading: isCreatingSolarUnit}] = useCreateSolarUnitMutation();

    // 2. Define a submit handler.
    async function onSubmit(values) {
        try{
            await createSolarUnit(values).unwrap();
        }catch (error){
            console.error("Failed to create solar unit:", error);
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="serialNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Serial Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Serial Number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="installationDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Installation Date</FormLabel>
                            <FormControl>
                                {/*<DatePicker/>*/}
                                <Input placeholder="Installation Date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="capacity"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Capacity</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="Capacity" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status</FormLabel>
                            <FormControl>
                                <Select vslue={field.value || ""} onValueChange={field.onChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Status"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ACTIVE">Active</SelectItem>
                                        <SelectItem value="INACTIVE">Inactive</SelectItem>
                                        <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isCreatingSolarUnit}>{isCreatingSolarUnit ? "Creating..." : "Create"}</Button>
            </form>
        </Form>
    )
}