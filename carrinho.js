let cachorro_vlr = 7.90
let misto_vlr  = 5.75
let bauru_vlr  = 11.35
let cheese_vlr  = 14.60
let egg_vlr  = 15.60
let frango_vlr = 12.90
let refri_vlr = 4.90
let sucos_vlr = 4.30
let cafe_vlr = 3.50
let cafe_leite_vlr = 4.20

let valor_compra = document.getElementById('valor_compra') 
let = total = document.getElementById('total')



total.addEventListener('click', ()=>{

let qtde_cachorro = Number (document.getElementById('qtde_cachorro').value) 
let valor_cachorro = qtde_cachorro*cachorro_vlr

let qtde_misto = Number (document.getElementById('qtde_misto').value) 
let valor_misto = qtde_misto*misto_vlr

let qtde_bauru = Number (document.getElementById('qtde_bauru').value) 
let valor_bauru = qtde_bauru*bauru_vlr

let qtde_cheese = Number (document.getElementById('qtde_cheese').value) 
let valor_cheese = qtde_cheese*cheese_vlr

let qtde_egg = Number (document.getElementById('qtde_egg').value) 
let valor_egg = qtde_egg*egg_vlr

let qtde_frango = Number (document.getElementById('qtde_frango').value) 
let valor_frango = qtde_frango*frango_vlr

let qtde_refri = Number (document.getElementById('qtde_refri').value) 
let valor_refri = qtde_refri*refri_vlr

let qtde_sucos = Number (document.getElementById('qtde_sucos').value) 
let valor_sucos = qtde_sucos*sucos_vlr

let qtde_cafe = Number (document.getElementById('qtde_cafe').value) 
let valor_cafe = qtde_cafe*cafe_vlr

let qtde_cafe_leite = Number (document.getElementById('qtde_cafe_leite').value) 
let valor_cafe_leite = qtde_cafe_leite*cafe_leite_vlr

valor_total = valor_cachorro+valor_misto+valor_bauru+valor_cheese+valor_egg+valor_frango+valor_refri+valor_sucos+valor_cafe+valor_cafe_leite

valor_compra.innerHTML = 'O valor da compra R$ é R$ ' + valor_total.toFixed(2)


})