 const express= require('express')
 const {getHomepage,getABC,postCreateUser,getCreateHomepage,getUpdateUser,getPageUpdate}=require('../controllers/homeController')
 const router=express.Router()
 
router.get('/', getHomepage)

router.get('/abc', getABC)
router.get('/create', getCreateHomepage)
router.post('/create-user',postCreateUser);
router.get('/update/:id',getPageUpdate);
router.post('/update-user',getUpdateUser);

module.exports=router // export default