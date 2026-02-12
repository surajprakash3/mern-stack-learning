

const studentdata=[]

const studentInfo = (req,res) =>{
    try{
        const {name, rollNum, email} =req.body;
        if(!name || !rollNum||!email){
            return "All field are requied"
        }
        studentdata.push({name, rollNum, email});
        res.status(201).json({data:studentdata,msg:"student info created"})

    }catch(err){
        res.status(500).json({error:err, msg:'internal'})

    }

}
module.exports= {studentInfo}