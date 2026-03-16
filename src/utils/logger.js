export function logger(message){

    const time = new Date().toISOString()

    console.log(`[AIGORN] ${time} - ${message}`)

}
