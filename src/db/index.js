const mongo = require("./connect");
const { DB_NAME } = require("./config");

module.exports = {
   getArtList: function() {
      const db = mongo.instance().db(DB_NAME);
      const response = db.collection("artList").find({}).toArray();
      return response;
   },
   getArtListById: function(id) {
      const db = mongo.instance().db(DB_NAME);
      const response = db.collection("artList").find({
         artList_id: Number(id)
      }).toArray();
      return response;
   }
}
