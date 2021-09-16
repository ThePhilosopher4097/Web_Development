let sr = 0
let table= null
let data = {
    'pankaj@gmail.com': {
        fullname:   'Virat Kohli',
        email:      'vk@gmail.com',
        category:   'Health',
        gender:     'M',
        hobby:      ['Cricket'],
        address:    'Pune'
    },
    'amit@gmail.com': {
        fullname:   'Vidit Gujrathi',
        email:      'vdg@gmail.com',
        category:   'Education',
        gender:     'M',
        hobby:      ['Cricket','Chess'],
        address:    'Nashik'
    }
}

email = null
update = false
rowid = null

init()

function init() {
    document.querySelector("#homebtn").addEventListener('click',showhide)
    document.querySelector("#regbtn").addEventListener('click',showhide)
    document.querySelector("#showbtn").addEventListener('click',showhide)
    document.querySelector("#regForm").addEventListener('submit', formsubmit)

    createTable()
}

function showhide(e) {
    var id = e.target.id
    var pageIds = ['home','reg','show']

    for (const pid of pageIds) {
        document.getElementById(pid).style.display = 'none'
    }
    
    id = id.substr(0,id.length-3)
    document.getElementById(id).style.display = 'block'
}

function formsubmit(e) {
    e.preventDefault()
    
    var form = document.getElementById(e.target.id)

    var hobbyList = document.getElementsByName("hobby")
    var hobby = []

    for (const node of hobbyList) {
        if(node.checked)    hobby.push(node.value)
    }

    var obj = {
        fullname:   form.elements['fullname'].value,
        email:      form.elements['email'].value,
        category:   form.elements['category'].value,
        gender:     form.elements['gender'].value,
        hobby:      hobby,
        address:    form.elements['address'].value
    }

    data[obj['email']] = obj

    if (update) {
        delete data[email]
        updateRowData(rowid, obj)
        update = false
    } else {
        addTableRow(obj)
    }

    form.reset()
}

function updateRowData(rowid, obj) {
    console.log(rowid)
    var tr = document.getElementById(rowid)

    tr.childNodes[0].innerText = obj.fullname
    tr.childNodes[1].innerText = obj.email
    tr.childNodes[2].innerText = obj.category
    tr.childNodes[3].innerText = obj.gender
    tr.childNodes[4].innerText = obj.hobby
    tr.childNodes[5].innerText = obj.address
}

function fillFormData(obj) {
       
    var form = document.getElementById("regform")
    form.reset()
    console.log(form)   

    form.elements['fullname'].value = obj.fullname
    form.elements['email'].value    = obj.email
    form.elements['category'].value = obj.category
    form.elements['gender'].value   = obj.gender
    form.elements['address'].value  = obj.address
    
    var hobbyList = document.getElementsByName("hobby")
  
    for (const hb of obj.hobby) {
        for (const node of hobbyList) {
            if (hb == node.value) {
                node.checked = true
                break
            } 
        }
    }
}

function createTable() {
    table = document.createElement('table')
    table.setAttribute("border",'1')
    table.setAttribute("width",'70%')
    document.querySelector("#show").appendChild(table)
    addTableHead()

    for (const key in data) {
        addTableRow(data[key])
    }
}

function addTableRow(items) {
    sr++
    var tr = document.createElement("tr")
    tr.setAttribute("id","row_" + sr)
    for (const key in items) {
        var td = document.createElement("td")
        td.innerText = items[key]
        tr.appendChild(td)
    }

    createButton(tr, 'Update', updateRow)
    createButton(tr, 'Delete', deleteRow)


    table.appendChild(tr)
}

function updateRow(e) {
    id = e.target.id
    id = id.replace("_Update","")
    rowid = id
    var tr = document.getElementById(id)
    
    email = tr.childNodes[1].innerText
    
    fillFormData(data[email])
    showhide({target:{id:'regBtn'}})
    update = true
}

function deleteRow(e) {
    id = e.target.id
    id = id.replace("_Delete","")

    var tr = document.getElementById(id)
    var email = tr.childNodes[1].innerText
    console.log(email)
    delete data[email]
    table.removeChild(tr)
}

function createButton(tr, label, handler) {
    var btn = document.createElement("button")
    var td = document.createElement("td")
    td.appendChild(btn)
    tr.appendChild(td)
    btn.innerText = label
    btn.setAttribute("id","row_" + label + "_" + sr)
    btn.addEventListener('click', handler)
}

function addTableHead() {
    var colname = ['Full Name', 'Email', 'Category', 'Gender', 'Hobby', 'Address','Update','Delete']
    var tr = document.createElement("tr")
    for (const name of colname) {
        var th = document.createElement("th")
        th.innerText = name
        tr.appendChild(th)
    }

    table.appendChild(tr)
}