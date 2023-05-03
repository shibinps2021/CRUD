var db=require('../config/connection')
var objectId=require('mongodb').ObjectId
module.exports={
    addProduct:(product)=>{
        return new Promise(async(resolve,reject)=>{
            await db.get().collection('products').insertOne(product).then((data)=>{
             resolve(data)
            })
        })
    
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products= await db.get().collection('products').find().toArray()
            resolve(products)
        })
    },
    deleteProduct:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('products').deleteOne({_id:objectId(prodId)}).then((response)=>{
                resolve(response)
            })
        })
    },
    getProductDetails:(prodId)=>{
        return new Promise((resolve,reject)=>{
          db.get().collection('products').findOne({_id:objectId(prodId)}).then((product)=>{
            resolve(product)
          })
        })
      },
    updateProduct:(proId,proDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('products').updateOne({_id:objectId(proId)},{
                $set:{
                    name:proDetails.name,
                    description:proDetails.description,
                    price:proDetails.price
                }
            }).then((response)=>{
                resolve()
            })
        })
    }
}