
const connection =require('../config/database')


const getHomepage= (req,res)=>{
    
    return res.render('home.ejs');
}
const getABC=(req,res)=>{
    res.send('sample.ejs')
}
const getCreateHompage=(req,res)=>
{
    res.render('create.ejs')
}
const postCreateUser = async(req,res) =>{
   
    let email=req.body.email;
    let name=req.body.name;
    let city=req.body.city;
    console.log("request.body:",email, name, city);
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

  console.log(results); // results contains rows returned by server
  //console.log(fields); // fields contains extra meta data about results, if available
     }
const getUsers= async(req,res)=>{
    const [results,fields]=await connection.execute('SELECT * FROM Users')
    console.log(results);
}
module.exports={
    getHomepage,getABC,postCreateUser,getCreateHompage
}