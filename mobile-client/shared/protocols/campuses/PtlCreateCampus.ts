import { DbCampus } from '../../db/DbCampus'
import { BaseConf, BaseRequest, BaseResponse } from '../base'

export interface ReqCreateCampus extends BaseRequest {
    address: string;
    name: string;
    radius: number;
}

export interface ResCreateCampus extends BaseResponse {
    campus: DbCampus;
}

export const conf: BaseConf = {
    
}
