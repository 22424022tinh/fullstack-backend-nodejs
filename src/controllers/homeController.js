
const connection =require('../config/database')
const {getAllUsers,getUsersById}=require('../services/CRUDService')

const getHomepage= (req,res)=>{
    
    return res.render('home.ejs');
}
const getABC=(req,res)=>{
    res.send('sample.ejs')
}
const getCreateHomepage= async(req,res)=>
{
    let results= await getAllUsers();
    return res.render('create.ejs',{listUsers:results});
}
const postCreateUser = async(req,res) =>{
   
    let email=req.body.email;
    let name=req.body.name;
    let city=req.body.city;
    // connection.execute(
    //    `insert into Users(email,name,city) values(?,?,?)`,
    //     [email,name,city],
    //     function(err,results)
    //     {
    //         console.log(results);
    //         res.send('Create new user success'); 
    //     }
    //   );
    // //insert into Users(email,name,city) values('kiet@gmail.com','hoidanit','saigon');
    // execute will internally call prepare and query
    let [results, fields] = await connection.execute(
    'INSERT INTO Users(email,name,city) value (?,?,?)',[email,name,city]);

   return res.send('Create new user succeed') 
  //console.log(fields); // fields contains extra meta data about results, if available
     }
const getPageUpdate=async(req,res)=>{
    const UserId=req.params.id;
    let user=await getUsersById(UserId);
    return res.render('update.ejs',{userEdit:user}); // x <- y
}
const getUpdateUser=async(req,res)=>{
    let id=req.body.id;
    let email=req.body.email;
    let name=req.body.name;
    let city=req.body.city;
    let [results, fields] = await connection.execute(
        `UPDATE Users SET email = ?, name = ?, city= ?  WHERE id= ?; `,[email,name,city,id]);
       return res.send('Update user succeed') 
}
module.exports={
    getHomepage,getABC,postCreateUser,getCreateHomepage,getPageUpdate,getUpdateUser
}