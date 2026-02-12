const teachercreate = require('../services/teacheriforservices')

const teachercreateData=(req,res)=>{

    try[
        const {t_name,t_code, t_email} =req.body
        const data = teachercreate(t_name,t_code, t_email)
        res.status(201).json({data: data,msg:'data servide'})


    ]catch(err){
          res.status(500).json({error.err, msg: 'internal'})
    }



}