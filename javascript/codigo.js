window.onload=DocumentoCargado;

function DocumentoCargado(){
    let boton_Remera_Denim = document.getElementById("Remera_Denim");
    let boton_Remera_Polo = document.getElementById("Remera_Polo");
    let boton_Remera_Quick = document.getElementById("Remera_Quick");
    let boton_Remera_Adidas = document.getElementById("Remera_Adidas");
    let boton_Jean1 = document.getElementById("Jean1");
    let boton_Jean2 = document.getElementById("Jean2");
    let boton_Jean3 = document.getElementById("Jean3");
    let boton_Gorro_Negro = document.getElementById("Gorro_Negro");
    let boton_Gorro_Rosa = document.getElementById("Gorro_Rosa");
    let boton_Campera_Rosa = document.getElementById("Campera_Rosa");
    let boton_Buzo_Vans = document.getElementById("Buzo_Vans");
    let boton_Buzo_Nb = document.getElementById("Buzo_Nb");

    let cantpersonasRemera_Denim = document.getElementById("cantRemera_Denim");
    let cantpersonasRemera_Polo = document.getElementById("cantRemera_Polo");
    let cantpersonasRemera_Quick = document.getElementById("cantRemera_Quick");
    let cantpersonasRemera_Adidas = document.getElementById("cantRemera_Adidas");
    let cantpersonasJean1 = document.getElementById("cantJean1");
    let cantpersonasJean2 = document.getElementById("cantJean2");
    let cantpersonasJean3 = document.getElementById("cantJean3");
    let cantpersonasGorro_Negro = document.getElementById("cantGorro_Negro");
    let cantpersonasGorro_Rosa = document.getElementById("cantGorro_Rosa");
    let cantpersonasCampera_Rosa = document.getElementById("cantCampera_Rosa");
    let cantpersonasBuzo_Vans = document.getElementById("cantBuzo_Vans");
    let cantpersonasBuzo_Nb = document.getElementById("cantBuzo_Nb");

    // cantpersonasP1.onchange = selectp1personas;
    // cantpersonasP2.onchange = selectp2personas;
    // cantpersonasP3.onchange = selectp3personas;

    cantpersonasRemera_Denim.onchange = selectRemera_Denimpersonas;
    cantpersonasRemera_Polo.onchange = selectRemera_Polopersonas;
    cantpersonasRemera_Quick.onchange = selectRemera_Quickpersonas;
    cantpersonasRemera_Adidas.onchange = selectRemera_Adidaspersonas;
    cantpersonasJean1.onchange = selectJean1personas;
    cantpersonasJean2.onchange = selectJean2personas;
    cantpersonasJean3.onchange = selectJean3personas;
    cantpersonasGorro_Negro.onchange = selectGorro_Negropersonas;
    cantpersonasGorro_Rosa.onchange = selectGorro_Rosapersonas;
    cantpersonasCampera_Rosa.onchange = selectCampera_Rosapersonas;
    cantpersonasBuzo_Vans.onchange = selectBuzo_Vanspersonas;
    cantpersonasBuzo_Nb.onchange = selectBuzo_Nbpersonas;

    // checkboxP1.onclick = checkboxP1Apretado;
    // checkboxP2.onclick = checkboxP2Apretado;
    // checkboxP3.onclick = checkboxP3Apretado;

    boton_Remera_Denim.onclick = checkboxP1Apretado;
    boton_Remera_Polo.onclick = checkboxP2Apretado;
    boton_Remera_Quick.onclick = checkboxP3Apretado;
    boton_Remera_Adidas.onclick = checkboxP1Apretado;
    boton_Jean1.onclick = checkboxP2Apretado;
    boton_Jean2.onclick = checkboxP3Apretado;
    boton_Jean3.onclick = checkboxP1Apretado;
    boton_Gorro_Negro.onclick = checkboxP2Apretado;
    boton_Gorro_Rosa.onclick = checkboxP3Apretado;
    boton_Campera_Rosa.onclick = checkboxP1Apretado;
    boton_Buzo_Vans.onclick = checkboxP2Apretado;
    boton_Buzo_Nb.onclick = checkboxP3Apretado;

    MostrarPrecioTotal();
    }