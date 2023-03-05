export default class ResponseModel {
    constructor(public resp_code: string, public resp_desc: string) { }

    // deserialize to json
    toJson() {
        const payload = { resp_code: this.resp_code, resp_desc: this.resp_desc }
        return JSON.stringify(payload)
    }

}

// converting to Response Model
export class ResponseModelFactory {
    static fromJson(json: any) {
        return new ResponseModel(
            json["resp_code"],
            json["resp_desc"]
        )
    }
}