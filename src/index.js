import { startSwarm } from "./core/swarm.js"
import { logger } from "./utils/logger.js"

async function main() {

    logger("Starting Aigorn Network...")

    await startSwarm()

}

main()
