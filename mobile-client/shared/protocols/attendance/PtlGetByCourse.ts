import { ObjectId } from "mongodb";
import { CourseAttendance } from "../../models/CourseAttendance";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGetByCourse extends BaseRequest {
    course_id: ObjectId;
}

export interface ResGetByCourse extends BaseResponse {
    course_name: string;
    class_name: string;
    attendance: Array<any>;
}

export const conf: BaseConf = {
    
}