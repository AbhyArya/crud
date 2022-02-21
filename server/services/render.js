const axios = require('axios')

exports.homeRoutes=(req,res)=>{
    axios.get('https://crud-app-arya.herokuapp.com/api/users').then((result) => {
        res.render('index',{users:result.data,title: "All Users"})
    }).catch((err) => {
        res.send(err)
    });
}
 
exports.add_user=(req,res)=>{
    res.render('add-user',{title: "Add New User"})
}

exports.update_user=(req,res)=>{
    axios.get('https://crud-app-arya.herokuapp.com/api/users',{params : {id:req.query.id}}).then((result) => {
        res.render('update-user',{user:result.data,title: "Update user"})
    }).catch((err) => {
        res.send(err) 
    });
} 