console.log("jeje")
const doc = Array.from(document.querySelectorAll(" .mw-category-group li"))


console.log(doc)

doc.forEach((d)=>{
    let txt = d.textContent
    let sr = txt.search("de")
    console.log(d.textContent)


    }
)

let v = "Boulevard Malesherbes"

let s = v.search("de")
console.log(s)
