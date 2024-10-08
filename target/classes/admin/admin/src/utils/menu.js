const menu = {
    list() {
        return [
    {
        "backMenu":[
           {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"操作日志管理",
                        "menuJump":"列表",
                        "tableName":"caozuorizhi"
                    }
                ],
                "menu":"操作日志管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"项目等级管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryDengji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"反馈类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryFankui"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"成果类别管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKeyanchengguo"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"成果类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKeyanchengguoLeixing"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"通知类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryTongzhi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"学科管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryXueke"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"学历管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryXueli"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"学术活动类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryXueshuhuodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"职称管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhicheng"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"职务管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhiwu"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"反馈管理",
                        "menuJump":"列表",
                        "tableName":"fankui"
                    }
                ],
                "menu":"反馈管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核",
                            "报表",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"科研项目管理",
                        "menuJump":"列表",
                        "tableName":"keyanxiangmu"
                    }
                ],
                "menu":"科研项目管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"科研成果管理",
                        "menuJump":"列表",
                        "tableName":"keyanchengguo"
                    }
                ],
                "menu":"科研成果管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"学术活动管理",
                        "menuJump":"列表",
                        "tableName":"xueshuhuodong"
                    }
                ],
                "menu":"学术活动管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"通知管理",
                        "menuJump":"列表",
                        "tableName":"tongzhi"
                    }
                ],
                "menu":"通知管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"学校管理员管理",
                        "menuJump":"列表",
                        "tableName":"xuexiaoguanliyuan"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"科研人员管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"学院部门管理",
                        "menuJump":"列表",
                        "tableName":"xueyuanbumen"
                    }
                ],
                "menu":"学院部门管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
           {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"反馈管理",
                        "menuJump":"列表",
                        "tableName":"fankui"
                    }
                ],
                "menu":"反馈管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核"
                        ],
                        "menu":"科研项目管理",
                        "menuJump":"列表",
                        "tableName":"keyanxiangmu"
                    }
                ],
                "menu":"科研项目管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核"
                        ],
                        "menu":"科研成果管理",
                        "menuJump":"列表",
                        "tableName":"keyanchengguo"
                    }
                ],
                "menu":"科研成果管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核"
                        ],
                        "menu":"学术活动管理",
                        "menuJump":"列表",
                        "tableName":"xueshuhuodong"
                    }
                ],
                "menu":"学术活动管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"通知管理",
                        "menuJump":"列表",
                        "tableName":"tongzhi"
                    }
                ],
                "menu":"通知管理"
            }
            ,{
                "child":[
					{
                        "buttons":[
                            "查看"
                        ],
                        "menu":"科研人员管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"学校管理员",
        "tableName":"xuexiaoguanliyuan"
    }
	,
	{
        "backMenu":[
           {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"反馈管理",
                        "menuJump":"列表",
                        "tableName":"fankui"
                    }
                ],
                "menu":"反馈管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"科研项目管理",
                        "menuJump":"列表",
                        "tableName":"keyanxiangmu"
                    }
                ],
                "menu":"科研项目管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"科研成果管理",
                        "menuJump":"列表",
                        "tableName":"keyanchengguo"
                    }
                ],
                "menu":"科研成果管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"学术活动管理",
                        "menuJump":"列表",
                        "tableName":"xueshuhuodong"
                    }
                ],
                "menu":"学术活动管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"通知管理",
                        "menuJump":"列表",
                        "tableName":"tongzhi"
                    }
                ],
                "menu":"通知管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"学院部门管理",
                        "menuJump":"列表",
                        "tableName":"xueyuanbumen"
                    }
                ],
                "menu":"学院部门管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"科研人员",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;
