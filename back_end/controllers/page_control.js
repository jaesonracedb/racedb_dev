const mysql = require('mysql');
const Promise = require('bluebird');

app.get('/paginaton-results', function(req,res) {
  var query = "select count(*) as TotalCount from ??";
  var table = ["event"];
  var query = mysql.format(query,table);
  connection.query(query,function(err,rows){
    if(err){
      return err;
    }else{
      let totalCount = rows[0].TotalCount
      if(req.body.start == ''|| req.body.limit == ''){
        let startNum =0;
        let limitNum = 10;
      }else{
        let startNum=parseInt(req.body.start);
        let limitNum=parseInt(req.body.limit);
      }
    }
    var query = "select * from ?? ORDER BY id DESC LIMIT ? OFFSET ?";
    var table =["event",limitNum,startNum];

    query = mysql.format(query,table);
    connection.query(query,function(err, rest){
      if(err){
        res.json(err);
      }else{
        res.json("Total Count": totalCount,"data":rest)
      }
    });
  });
})
