function AddSection(NumSection,GrosEntry){
    var TabLink = ($('<li/>',{class: "subSection","data-toggle":"tab"})).append($('<a/>',{class:"LinktoAnchor", "href":"#Sect"+NumSection,"data-toggle":"tab",text:GrosEntry}))
  //  var SectionBody = $('<div/>',{id: 'One',class:'tab-pane',html:"<h2>@</h2>"})
    $("#tabs").append(TabLink)
 //   $("#my-tab-content").append(SectionBody)
    }
var Vitr= [];
function Vitrine (jsonKid,SectionNum){
Vitr.push(jsonKid)
IDEnt=Vitr.length-1

var IT =  {"Name":jsonKid[0],'Price':jsonKid[1],"Link":jsonKid[2],"About":jsonKid[3],"Weigth":jsonKid[4] }
Image = $('<img>',{src:IT.Link, class:"img-thumbnail"})
lot =$("<div/>",{id:IDEnt, class:"product col-6 col-sm-6 col-lg-4"}).prepend(Image).append("<h4>"+IT.Name+" <small>"+IT.Price+"руб</small></h4><p>"+IT.About+" <i>"+IT.Weigth+"гр</i></p>")
$("#"+SectionNum).append(lot)
}
var ShopName = "DH"
if ($.cookie('ShopName')){ShopName=$.cookie('ShopName')}
$.cookie('ShopName',ShopName)
$('#PartnerShopHiden').val(ShopName)

function GetCatalog() {
    var Section = "Sect"
    var NumSection=0
    $.getJSON("./catalog"+ShopName+".json", function(json){
        Object.keys(json).forEach(function(GrosEntry) {
           NumSection+=1
            AddSection(NumSection,GrosEntry)
           var SectionNum = Section+NumSection
           $("#vitrina").append($("<div/>",{id:SectionNum,class:Section}))
           json[GrosEntry].forEach(function(entry) {
            var jsonKid=entry
            Vitrine(jsonKid,SectionNum)
         });
       });
  //  $(".Sect:even div").css("font-family","serif");   
//  $('.product').height(222) 
  //  MarketReady()    
    });
    MarketReady()
}
$(document).ready(function () {
    GetCatalog()
})
