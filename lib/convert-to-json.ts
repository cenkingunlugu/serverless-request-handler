import { BAD_REQUEST } from 'http-status-codes';
import { HttpError, Logger } from './models';

export function convertToJson(value?: string | null, logger?: Logger): any {
    try {
        return JSON.parse(value || '');
    } catch (error) {

        if (logger) {
            logger.error(error);
        }

        throw new HttpError(BAD_REQUEST, 'Invalid json');
    }
}