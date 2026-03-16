import { logger } from "../utils/logger.js"

export async function startSwarm(){

    logger("Initializing decentralized swarm nodes...")

    const nodes = ["node-1","node-2","node-3"]

    nodes.forEach(node => {
        logger(`Node active: ${node}`)
    })

}
