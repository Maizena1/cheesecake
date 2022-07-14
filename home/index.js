
const loadData = async () => (await fetch("../data-hero.json")).json()

async function init(){
    const data = loadData()
    console.log(data)
}

init()
