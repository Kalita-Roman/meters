import request from './request';

export const saveReading = () => {
    return request.put('save', {
        records: []
    });
};