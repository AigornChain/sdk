export async function crossChainOperation(data){

    const { from, to, action } = data

    return {
        message: `Executing ${action} from ${from} to ${to}`
    }

}
