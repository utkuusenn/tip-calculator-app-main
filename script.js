const ozelTip = document.getElementById('ozelTip')
const sec = document.getElementById('sec')
const fatura = document.getElementById('fatura')
const yuzde = document.querySelectorAll("input[name=tip]")
const insan = document.getElementById('insan')
const btn = document.querySelector('.btn-yesil')
const kisi = document.getElementById('kisi')
const total = document.getElementById('total')

console.log(yuzde)
ozelTip.addEventListener('click',()=>{
    sec.checked=true
})


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let yuzdelik = null
    let odenenPara = fatura.value
    let kacKisi = insan.value

    for (i of yuzde){
        if (i.checked == true){
            if(i.value == 'on'){
                yuzdelik = ozelTip.value
            }else{
                yuzdelik = i.value
            }
        }
    }
    let totalTip = (odenenPara * yuzdelik)/100
    let kisiBasinaDusen = totalTip / kacKisi

    kisi.textContent = kisiBasinaDusen
    total.textContent = totalTip
})