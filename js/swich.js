var ShopName;
var Partners = {"DH":"Долхлеб","MP": "Mелоди Пицца","CP":"Чайная пара" }
//var Partners = {"MP": "Mелоди Пицца","CP":"Чайная пара" }
function Swicher (){
    Object.keys(Partners).forEach(function(key) {
        $('.jumbotron i').append($("<a/>",{id:key, class:"Partners btn btn-default", text:Partners[key]}))
        })
}
$('.jumbotron').on('click', 'a',function(){
    ShopName =$(this).attr("id")
    $.cookie('ShopName',ShopName)
    $('#PartnerShopHiden').val(ShopName) //hidden input
    $('.product').remove();
    $('.subSection').remove();
    Vitr= [];
    GetCatalog() 
    })
function VitrSwicher(){
    $("#tabs").on('click','.LinktoAnchor',function(e) {
        $(".Sect").hide()
        $($(this).attr('href')).show()
        })
$( "#Main" ).click(function() {
            $(".Sect").show()
});
//    $("#Main").click(function() { alert( "Handler for .click() called." );
//nction(){$(".Sect").show() }
    }

$(document).ready(function () {
        Swicher()
        VitrSwicher()
})

