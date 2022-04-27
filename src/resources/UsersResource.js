import User from '../models/user'

export default {
    resource: User,
    properties: {
        id: {
            position: 1,
        },
        initials: {
            position: 2,
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        name: {
            position: 3,
            isRequired: true,
        },
        email: {
            position: 4,
            isRequired: true,
        },
    },
}
