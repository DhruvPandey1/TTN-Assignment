import fs from 'fs'
import path from 'path';
export async function GET() {
    try{
        const res=await fetch('http://localhost:3000/data/teachers.json');
        const data= await res.json();

        return Response.json(data)
    }catch(error){
        return Response.json(
            {error:error.message},
            {status:500}
        )
    }
}


const filePath=path.join(process.cwd(),'public/data/teachers.json')
export async function POST(req) {
    try{
        const body=await req.json();
        const fileData=fs.readFileSync(filePath,'utf-8');
        const {teachers}=JSON.parse(fileData);
        teachers.push(body);

        fs.writeFileSync(filePath,JSON.stringify({teachers},null,2));

        return Response.json({
            message:"Teachers are added succesfully"
            
        },{
            status:200
        });
    }
    catch(error){
        return Response.json({
            message:error.message},
            {status:error.status}
        )
    }
}
