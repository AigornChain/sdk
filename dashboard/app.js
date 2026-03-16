async function run(){

    const res = await fetch("http://localhost:3000/execute",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            from:"Ethereum",
            to:"Solana",
            action:"swap"
        })
    })

    const data = await res.json()

    document.getElementById("result").innerText = data.message

}
