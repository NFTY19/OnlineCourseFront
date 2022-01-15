import request from '@/utils/request'
export default {
    //1. 讲师列表
    getTeacherListPage(current, limit, teacherQuery) {
        return request({
            url: `/eduservice/teacher/pageQuery/${current}/${limit}`,
            method: 'post',
            data: teacherQuery
        })
    },
    //2. 讲师删除
    deleteTeacherId(id) {
        return request({
            url: `/eduservice/teacher/${id}`,
            method: 'delete',
        })
    }, 
    //3. 讲师添加
    addTeacher(teaher_add) {
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teaher_add
        })
    },
    //4. 讲师通过id查询
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacher/getTeacher/${id}`,
            method: 'get'
        })
    },

    //修改讲师
    updateTeacherInfo(teacher) {
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
          })
    }
}