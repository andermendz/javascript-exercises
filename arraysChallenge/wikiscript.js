const doc = Array.from(document.querySelectorAll(" .mw-category-group li"))

console.log(doc)

const wiki = doc.filter((d)=>{
    let txt = d.textContent
    let sr = txt.search("de")
    if (sr > 0) {
        return(d.textContent)
    }
    }
)

console.log(wiki)

