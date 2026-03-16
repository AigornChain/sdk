export class Aigorn {

    constructor(config){
        this.network = config.network
    }

    async execute(data){

        return {
            network: this.network,
            action: data.action,
            from: data.chainFrom,
            to: data.chainTo
        }

    }

}
