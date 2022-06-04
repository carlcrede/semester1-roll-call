import { ObjectId } from 'mongodb'

import { DbTeacher } from '../../src/shared/db/DbTeacher'

export const validTeacher: DbTeacher = {
    _id: new ObjectId(),
    uid: 'string',
    firstname: 'John',
    lastname: 'Doe',
    email: 'John@doe.dk'
}
