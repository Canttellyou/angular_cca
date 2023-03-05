import ResponseModel, { ResponseModelFactory } from './response.model';

export default class CustomerCategoryModel {
  constructor(
    public details: { cat_id: string; cat_desc: string }[],
    public response: ResponseModel
  ) {}

  toJson() {
    const payload = {
      details: this.details,
    };

    return JSON.stringify(payload);
  }
}

// factory method
export class CustomerCategoryFactory {
  static fromJson(json: any): CustomerCategoryModel {
    const details = json.details.map((detail: any) => ({
      cat_id: detail.cat_id,
      cat_desc: detail.cat_desc,
    }));

    return new CustomerCategoryModel(
      details,
      ResponseModelFactory.fromJson(json)
    );
  }
}
