// module.exports.basic = function(req,res){

//     return res.render('mapBasic', {
//         title: "Basic Map Page"
//     });
// }
module.exports.demo = function(req,res){
    
    return res.render('demoMap', {
        title: "Google-Map api"
    });
}
module.exports.myMap = function(req,res){

    return res.render('myMap', {
        title: "Featured-Map"
    });
}