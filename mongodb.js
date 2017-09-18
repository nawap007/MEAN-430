db.users.find()
db.users.find().sort({firstname:-1}).limit(2)
db.users.find().sort({firstname:-1}).skip(2).limit(2)
db.users.find({},{firstname:1,salary:1,_id:0})
db.users.find({lastname:'kumar'},{firstname:1,lastname:1,salary:1,_id:0})

db.users.find({$or:[{lastname:'kumar'},{firstname:'shailendra'}]},{})
db.users.find({$and:[{lastname:'kumar'},{firstname:'deepak'}]},{})
db.users.find({salary:{$gte:10000}},{})
db.users.find({salary:{$lte:10000}},{})

db.employees.insert({_id:1,name:'Deepak',salary:12000})
db.employees.find()

db.employees.update({_id:1},{$set:{name:'Deepak Kumar'}})
db.employees.remove({_id:1})
db.employees.drop()

db.orders.find()

db.orders.aggregate({
  $project:{_id:1,name:1,itemName:'$items.name',itemPrice:'$items.unitprice'}
  })

db.orders.aggregate(
 {$unwind:'$items'},
 {
  $project:{_id:1,name:1,itemName:'$items.name',itemPrice:'$items.unitprice'}
  })

db.orders.aggregate(
 {$unwind:'$items'},
 {$match:{'items.unitprice':{$gt:10}}},
 {
  $project:{_id:1,name:1,itemName:'$items.name',itemPrice:'$items.unitprice'}
  },
  { $sort: { itemName: 1 } })

use myimdb
db.books.createIndex({title:1})
db.books.getIndexes()
db.books.dropIndex('title_1')
