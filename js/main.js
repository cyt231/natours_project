$( "#navi-toggle" ).prop( "checked", true );
$(document).ready(function(){
   $( "#navi-toggle" ).prop( "checked", false );
   setTimeout(() => {
      console.log("Documento está pronto");
      // $("#navi-toggle").toggle(this.checked);
      $(".navigation__nav").removeClass("loading");
      $( "div" ).remove("#loading");
   }, 1000);
});