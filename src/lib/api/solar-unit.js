const baseUrl = "http://localhost:8080/api";

export const getSolarUnitByID = async (id) =>{
    try {
        const res = await fetch(`${baseUrl}/solar-units/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        });
        console.log(res);
        const data = await res.json();
        console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}






