const baseUrl = "http://localhost:3000/api";

export const getEnergyGenerationRecordBySolarUnit = async (solarUnitId) => {
    try{
        const res = await fetch(`${baseUrl}/energy-generation-records/solar-unit/${solarUnitId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
        const data = await res.json()
        console.log(data)
        return data;
    }catch(error){
        console.error(error);
    }
}