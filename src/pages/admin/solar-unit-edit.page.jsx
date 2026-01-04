import { useParams, useNavigate } from "react-router";
import { useGetSolarUnitByIdQuery } from "@/lib/redux/query";
import {EditSolarUnitForm} from "@/pages/admin/component/EditSolarUnitForm.jsx";

export default function SolarUnitEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: solarUnit, isLoading: isLoadingSolarUnit, isError: isErrorSolarUnit, error: errorSolarUnit } = useGetSolarUnitByIdQuery(id);

  console.log(solarUnit);

  if (isLoadingSolarUnit) {
    return <div>Loading...</div>;
  }

  if (isErrorSolarUnit) {
    return <div>Error: {errorSolarUnit.message}</div>;
  }

  const handleEdit = () => {
    // TODO: Navigate to edit page
    console.log("Edit solar unit:", solarUnit._id);
  };

  const handleDelete = () => {
    // TODO: Implement delete with confirmation
    console.log("Delete solar unit:", solarUnit._id);
  };

  return (
      <main className="mt-4">
        <h1 className="text-4xl font-bold text-foreground">Edit Solar Unit</h1>
        <h2 className="mt-4 text-2xl font-bold text-foreground">{solarUnit.serialNumber}</h2>
        <p className="text-gray-600 mt-2">Edit the details of the solar unit</p>

        <div className="mt-8">
          <EditSolarUnitForm solarUnit={solarUnit} />
        </div>
          <div>
              <main>
                  <h1>Solar Energy power generation</h1>
              </main>
          </div>
      </main>
  );
}
