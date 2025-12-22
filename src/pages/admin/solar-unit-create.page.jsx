import {Input} from "@/components/ui/input.jsx";
import {Label} from "@radix-ui/react-label";
import {Button} from "@/components/ui/button.jsx";
import {CreateSolarUnitForm} from "@/pages/admin/component/CreateSolarUnitForm.jsx";

export default function SolarUnitCreatePage() {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formDta = new FormData(e.target);
        const data = Object.fromEntries(formDta);
        console.log(data);
    }

  return (
    <main className="mt-4">
      <h1 className="text-3xl font-bold text-foreground">Create Solar Unit</h1>
      <p className="text-gray-600 mt-2">Create a new Solar unit</p>
      <div className="mt-8">
        {/*<form onSubmit={handleSubmit}>*/}
        {/*  <div className="w-1/2">*/}
        {/*    <div className="grid gap-2">*/}
        {/*        <Label htmlFor="serialNumber">Serial Number</Label>*/}
        {/*        <Input type="text" required id="serialNumber" name="serialNumber" />*/}
        {/*    </div>*/}

        {/*      <div className="mt-4">*/}
        {/*          <Button type="submit">Create</Button>*/}
        {/*      </div>*/}
        {/*  </div>*/}
        {/*</form>*/}

      </div>
        <CreateSolarUnitForm/>
    </main>
  );
}
