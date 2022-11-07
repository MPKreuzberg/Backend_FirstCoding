import UsersCollection from "../models/usersschema.js"


export const getAllUsers = async (req,res, next)=>{
    //Controller // request handler
    try{
        const Userss = await UserssCollection.find()
        res.json(Userss)  
    } 
    catch(err){
      next(err) 
    }
}

export const getSingleUser = async(req,res, next)=>{
    "/Users/:id"
    "/Users/123"
    try{
        const id = req.params.id
        const singleUsers = await UsersCollection.findById(id)
        res.json({success:true, Users:singleUsers})

    }
    catch(err){
      next(err) 
    }
}

export const createUsers = async (req,res, next)=>{
    //POST request to create Users
    try{
        const Users = new UsersCollection(req.body)
        await Users.save()
        res.json({success:true, Users})
    }
    catch(err){
      next(err) 
    }

}


export const updateUser = async (req,res, next)=>{
    // Patch request /Userss/:id
    try{
        const id = req.params.id ;
        const updatedUsers = await UserssCollection.findByIdAndUpdate(id, req.body,{new:true} )
        res.json({success:true, Users:updatedUsers})
    }
    catch(err){
      next(err) 
    }
}



export const deleteUsers = async (req,res, next)=>{
    //Delete request /Userss/:id
    try{
        const {id}= req.params 
        //findByIdAndDelete
/*         const deletedItem = await UserssCollection.findByIdAndRemove(id) */

        const existingUsers = await UserssCollection.findById(id)

        if(existingUsers){
            const deleteStatus = await UserssCollection.deleteOne({_id:existingUsers._id})
            res.json({success:true, status: deleteStatus})
        }else{
            throw new Error("Users id doesn't exist ! ")
        }
        
    }
    catch(err){
      next(err) 
    }
}