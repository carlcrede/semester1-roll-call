import { ApiCall } from 'tsrpc'

import { getCoursesByTeacherId } from '../../db/Course'
import { ReqGetClasses, ResGetClasses } from '../../shared/protocols/classes/PtlGetClasses'

export async function ApiGetClasses(call: ApiCall<ReqGetClasses, ResGetClasses>) {
    // query db for this teacher's classes
    const courses = await getCoursesByTeacherId(call.currentUserId, call.error)

    // get class info from Course objects
    const classInfo = courses.map((course) => {
        return {
            name: course.class_name,
            _id: course.class_id
        }
    })

    call.succ({
        classes: classInfo,
    })
}
