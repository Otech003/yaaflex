

var func = {}

const RotesUser = require('./../models/routes_access_user.model')
const RotesAdmin = require('./../models/routes_access_admin.model')

var Menu = {
    CP: [
        {
            path: '/lx_admin/dashboard',
            icon: ' fas fa-tachometer-alt fa-fw',
            name: 'admin_menu_dashboard'
        },
        {
            path: '/lx_admin/roles_admin',
            icon: ' fas fa-key fa-fw',
            name: 'admin_menu_admin_roles'
        },
        {
            path: '/lx_admin/administradores',
            icon: ' fas fa-user-cog fa-fw',
            name: 'admin_menu_admins'
        },
        {
            path: '/lx_admin/roles_user',
            icon: ' fas fa-users-cog fa-fw',
            name: 'admin_menu_user_roles'
        },
        {
            path: '/lx_admin/users',
            icon: ' fa fa-user fa-fw',
            name: 'admin_menu_users'
        },
        {
            path: '/lx_admin/routes_access',
            icon: 'fas fa-route fa-fw',
            name: 'admin_menu_routes_access_admin'
        },
        {
            path: '/lx_admin/routes_access_user',
            icon: 'fas fa-route fa-fw',
            name: 'admin_menu_routes_access_users'
        },
        {
            path: '/lx_admin/file_manager',
            icon: 'fas fa-folder-open fa-fw',
            name: 'admin_menu_file_manager'
        },
        {
            path: '/lx_admin/articles',
            icon: 'fas fa-blog fa-fw',
            name: 'admin_menu_articles'
        },
        {
            path: '/lx_admin/dinamic_pages',
            icon: 'fas fa-globe-americas fa-fw',
            name: 'admin_menu_dinamic_pages'
        },
        {
            path: '/logout',
            icon: 'fas fa-sign-out-alt fa-fw',
            name: 'admin_menu_logout'
        },

    ],
    Site: [{

    }]
}





func.CP = function (role, i18n) {
    return RotesAdmin.find({ roles: role }).exec().then(data => {
        var arr = [];
        data.map((item) => {
            arr.push(item.path)
        })
        return arr;
    }).then((dta) => {
        var miarr = []
        Menu.CP.map(function (item) {
            if (dta.includes(item.path)) {
                item.txt = i18n[item.name.toLowerCase()]
                miarr.push(item);
            }
        });
        return miarr;
    });
}
func.Site = async function (role, arrlinks) {

}

module.exports = func;