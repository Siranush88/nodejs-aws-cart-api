import { AppRequest } from '../models';

/**
 * @param {AppRequest} request
 * @returns {string}
 */
export function getUserIdFromRequest(request: AppRequest): string {
  // :AppRequest
  //console.log('request >>>>>', request);

  return request.user && request.user.id;
  // return request.user && request.user.id; // request.body && request.body.id;
}
