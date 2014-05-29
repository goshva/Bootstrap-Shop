function initWS (Volume,Time){
    //Open a WebSocket connection.
    var wsUri = "ws://gonec.biz:8000/";   
    websocket = new WebSocket(wsUri); 
    
    //Connected to server
    websocket.onopen = function(ev) {
        sendingf ()
    }
    
    //Connection close
    websocket.onclose = function(ev) { 
//$('#status').text("Offline").css("color","red")
//initWS()    
};
    //Message Receved
    websocket.onmessage = function(ev) { 
try {
            var json = JSON.parse(ev.data);
        } catch (e) {
         //   console.log('This doesn\'t look like a valid JSON: ', ev.data);
            return;
        }

    };
    
    //Error
    websocket.onerror = function(ev) { 
        alert('Error '+ev.data);
    };
    
     //Send a Message
/*$('#putIn').keypress(function(event){
           var keycode = (event.keyCode ? event.keyCode : event.which);
           if(keycode == '13'){
var mymessage = [$.cookie('User'),$('#putIn').val()]
    websocket.send(JSON.stringify(mymessage));
    $('#putIn').val(null).focus()

         }
    })
*/
function sendingf (){

$("#SendOrder").click(function(){
Order["Adr"]=$('#Adderss').val()
Order["Tel"]=$('#Telephone').val()
Order["Time"]=Time;
Order["sum"]= Volume;
if ($.cookie('ShopName')){Order["PSh"]=$.cookie('ShopName')}
else {Order["PSh"]=$('#PartnerShopHiden').val()}
websocket.send(JSON.stringify(Order));
websocket.close()
alert("Спасибо за заказ")
location.reload();
});
}
//
};
//$(document).ready( initWS());
