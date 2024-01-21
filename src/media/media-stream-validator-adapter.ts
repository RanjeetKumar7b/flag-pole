import { HttpResponse, parseResponsefromJsonData } from "../http/http-response";
import {
  mediaStreamValidator,
  MediaStreamValidatorOpts,
} from "media-stream-validator";
import { HttpAdapter, iHttpRequest } from "../interfaces/http";

export const fetchWithMediaStreamValidator: HttpAdapter = (
  request: iHttpRequest,
  opts?: MediaStreamValidatorOpts
): Promise<HttpResponse> => {
  return new Promise((resolve, reject) => {
    if (!request.uri) {
      return reject("No uri");
    }
    try {
      mediaStreamValidator(request.uri, opts).then((data) => {
        resolve(parseResponsefromJsonData(data));
      });
    } catch (err) {
      reject(err);
    }
  });
};
