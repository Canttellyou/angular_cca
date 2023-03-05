import ResponseModel, { ResponseModelFactory } from './response.model';

export default class AuthModel {
  constructor(
    public token: string,
    public cust_id: string,
    public username: string,
    public last_name: string,
    public other_names: string,
    public gender: string,
    public response: ResponseModel
  ) {}

  toJson() {
    const payload = {
      token: this.token,
      cust_id: this.cust_id,
      username: this.username,
      last_name: this.last_name,
      other_names: this.other_names,
      gender: this.gender,
    };

    return JSON.stringify(payload);
  }
}

// factory methods
export class AuthModelFactory {
  static fromJson(json: any) {
    return new AuthModel(
      json['token'],
      json['cust_id'],
      json['username'],
      json['last_name'],
      json['other_names'],
      json['gender'],
      ResponseModelFactory.fromJson(json)
    );
  }
}
