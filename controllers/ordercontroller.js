
import OrdersColleciton from "../models/ordersschema.js"


export const getAllOrders = async (req,res, next)=>{
    //Controller // request handler
    try{
        const Orders = await OrdersCollection.find()
        res.json(Orders)  
    } 
    catch(err){
      next(err) 
    }
}

export const getSingleOrder = async(req,res, next)=>{
    "/Orders/:id"
    "/Orders/123"
    try{
        const id = req.params.id
        const singleOrders = await OrdersCollection.findById(id)
        res.json({success:true, Orders:singleOrders})

    }
    catch(err){
      next(err) 
    }
}

export const createOrders= async (req,res, next)=>{
    //POST request to create Orders
    try{
        const Orders = new OrdersCollection(req.body)
        await Orders.save()
        res.json({success:true, Orders})
    }
    catch(err){
      next(err)  
    }

}


export const updateOrders = async (req,res, next)=>{
    // Patch request /Orders/:id
    try{
        const id = req.params.id ;
        const updatedOrders = await OrdersCollection.findByIdAndUpdate(id, req.body,{new:true} )
        res.json({success:true, Orders:updatedOrders})
    }
    catch(err){
      next(err) 
    }
}



export const deleteOrders = async (req,res, next)=>{
    //Delete request /Orders/:id
    try{
        const {id}= req.params 
        //findByIdAndDelete
/*         const deletedItem = await OrdersCollection.findByIdAndRemove(id) */

        const existingOrders = await OrdersCollection.findById(id)

        if(existingOrders){
            const deleteStatus = await OrdersCollection.deleteOne({_id:existingOrders._id})
            res.json({success:true, status: deleteStatus})
        }else{
            throw new Error("Orders id doesn't exist ! ")
        }
        
    }
    catch(err){
      next(err) 
    }
}