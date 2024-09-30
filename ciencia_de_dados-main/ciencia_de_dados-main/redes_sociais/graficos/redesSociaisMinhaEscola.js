async function redesSociaisFavoritasMinhaEscola() {
    const url = 'https://script.google.com/macros/s/AKfycbxJ5GW6L0pa94Roa7M43hTtKF-U_IK8tAXNqyfwY67pT-DvicbZcZjKD66g6C90LD_W9w/exec'
    const res = await fetch(url) 
    const dados = await res.json()

    const redesSociais = dados.slice(1).map(redes = redes[1])
    console.table(dados)
}

redesSociaisFavoritasMinhaEscola()