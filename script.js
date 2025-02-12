var appendCat=document.getElementById('appendCat')
var reloadCat=document.getElementById("reloadCat")
var apiUrl='http://thecatapi.com/api/images/get?format=src&amp;type=gif'

$(appendCat).click(function() {
    $(appendCat).before('<img src='+apiUrl+'>')
})

$(reloadCat).click(function() {
    window.location.reload()
})