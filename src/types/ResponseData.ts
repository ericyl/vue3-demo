export default interface ResponseData<T = any> {
  code: number;
  msg: string;
  data: T;
}
