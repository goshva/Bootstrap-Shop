DeliorManu = $("<select/>", {id:"DeliOpti",class:"form-control"}).append($("<option/>", {"value":"Del",text:"Доставка"})).append($("<option/>", {"value":"Man",text:"Заберу из магазина"}))

var Picup= "Пиццерия Melody Pizza";
Picup= "маг. "+Partners[($.cookie('ShopName'))]
$(document).on('change','#DeliOpti', function(){$("#Adderss").val(Picup)})

var Time;
$(document).on('change','#Time', function(){Time=$("option:selected", this).val()})
DeliTime = TimeWork ()
GetAdress = $("<a/>", {class:"btn btn-info", id:"chek",html:"Оформить заказ","onClick":"Showmodal() "})
function pnotifyit(MesStr){
new PNotify({
                    text: MesStr+" в корзине" ,
                    addclass: "stack-topleft",
                    type: 'success'
                    })
}
function Showmodal() {
    if(!Time){alert("Вы не выбрали время доставки "+"\u231A" );$('.bs-example-modal-sm').modal('hide') }
    else {
        var Volume =0;
        $('.bs-example-modal-sm').modal('show');
        $( ".confirm" ).remove();
        Object.keys(Vitr).forEach(function(entry) { 
            if (Vitr[entry][6]) {
                key =Vitr[entry][5]
                Order[key]=Vitr[entry][6]
                Volume +=(Vitr[entry][1]*Vitr[entry][6])
                Line=  $("<a/>", {class:"confirm product new list-group-item"}).append(String(Vitr[entry][0])+" "+String(Vitr[entry][6])+"шт "+String(Vitr[entry][1]*Vitr[entry][6])+"руб")
             $("#Confirm").prepend(Line)}
        })
    }
$("#SendOrder").append(Volume+"руб")
initWS(Volume,Time)//openPort to send
};
  
    var Order ={}
function DraWBasket(){
        var Volume = 0
    $( ".choice" ).remove();
    Object.keys(Vitr).forEach(function(entry) {
        
    if (Vitr[entry][6]) {
        Line=  $("<a/>", {class:"choice product list-group-item"}).append(String(Vitr[entry][0])+" "+String(Vitr[entry][6])+"шт "+String(Vitr[entry][1]*Vitr[entry][6])+"руб")
    $(".baskets").append(Line)
    Volume +=(Vitr[entry][1]*Vitr[entry][6])
    Total = $("<a/>", {class:"total product list-group-item active btn"}).append("Итого: "+Volume+"руб").append(DeliorManu).append(DeliTime).append(GetAdress)
    $( ".total" ).remove();
    $(".baskets").append(Total)

    }
         })
    }
function AddBasket() {
    if ((Vitr[choice][6])){Vitr[choice][6]+=1}
    if (!(Vitr[choice][6])){Vitr[choice][6]=1}
    pnotifyit(Vitr[choice][0])
    DraWBasket()
    }
function ClearBasket(){
    console.log("cleaning...")
    }  
function MarketReady(){
    $('#vitrina').off('click');//doble off - HACK
   $('#vitrina ').on('click', '.product',function(){
        choice=($(this).attr("id"));
        AddBasket(choice);
        $(this).prepend("<span class=\"glyphicon glyphicon-shopping-cart\"></span>") } )
}    
