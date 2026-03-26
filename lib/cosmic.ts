
export async function getDataSobre() {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/69c49046ec4fb6783710ac7d?pretty=true&read_key=${process.env.READ_KEY}&props=metadata`, {next: { revalidate: 120 }}) 
        

        if(!res.ok){
            throw new Error("Failed to fetch data")
        }

        return res.json();
    }catch(err){
        throw new Error("Failed to fetch data")
    }
    
}