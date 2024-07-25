const connection = require ("../config/database");


const getAllUsers=async()=>{
    const [results,fields]=await connection.execute('SELECT * FROM Users');
    return results;
}
const getUsersById=async(UserId)=>{
    const [results,fields]=await connection.execute('SELECT * FROM Users WHERE id= ?',[UserId]);
    let user=results && results.length > 0 ? results[0] : {};
    return user;
}
const updateUserById=async(id,email,name,city)=>{
    let [results, fields] = await connection.execute(
        `UPDATE Users SET email = ?, name = ?, city= ?  WHERE id= ?`,[email,name,city,id]);
}
module.exports={
    getAllUsers,getUsersById,updateUserById
}