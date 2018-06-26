<style lang="less" scoped>
    @import "./topic-add.less";
    @import "../../../styles/common.less";
</style>
<template>
    <div class="topic-add">

            <div class="addtopic wrapper">

                    <h1>1.选择话题分类</h1>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label><span>*</span>添加分类</label></div>
                            <Select v-model="topicadd.classify" style="width:120px;">
                                <Option v-for="(item, index) in classitem" :value="item.value" :key="index">{{ item.label }}</Option>
                            </Select>
                        </div>
                        <span>添加分类</span>
                    </div>
                    <h1>2.填写基本信息</h1>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label><span>*</span>话题名称</label></div>
                            <Input v-model="topicadd.name" placeholder="0/20" style="width:255px;"></Input>
                        </div>
                        <div class="warn">请输入话题名称</div>
                    </div>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label><span>*</span>话题简介</label></div>
                            <textarea v-model="topicadd.brief" placeholder="0/200" style="width:346px;height:75px;"></textarea>
                        </div>
                        <span>对话框可拖动调整大小</span>
                    </div>
                    <div class="formitem" style="width:512px;">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label><span>*</span>话题列表缩略图</label></div>
                            <span style="float:right;">图片大小为：50*50px</span>
                            <Upload action="//jsonplaceholder.typicode.com/posts/" style="display:inline-block;">
                                <Button type="ghost" icon="ios-cloud-upload-outline" style="width:240px;height:45px;display:inline;">选择上传文件</Button>
                            </Upload>
                        </div>   
                    </div>
                    <div class="formitem" style="width:526px;">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label><span>*</span>客户端话题详情顶部图</label></div>
                            <span style="float:right;">图片大小为：414*240px</span>
                            <Upload action="//jsonplaceholder.typicode.com/posts/" style="display:inline-block;">
                                <Button type="ghost" icon="ios-cloud-upload-outline" style="width:240px;height:45px;display:inline;">选择上传文件</Button>
                            </Upload>
                        </div>   
                    </div>
                    <h1>3.填写推荐信息</h1>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label>关联版块</label></div>
                            <Select v-model="topicadd.relatedsection" style="width:150px;" placeholder="--选择“下拉内容”--">
                                <Option v-for="(item, index) in sectionitem" :value="item.value" :key="index">{{ item.label }}</Option>
                            </Select>
                        </div>
                        <span>此话题的帖子会发布到已关联的版块</span>
                    </div>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label>关联话题</label></div>
                            <Select v-model="topicadd.relatedtopic" style="width:150px;" placeholder="--选择“下拉内容”--">
                                <Option v-for="(item, index) in topicitem" :value="item.value" :key="index">{{ item.label }}</Option>
                            </Select>
                        </div>
                        <span>此话题的帖子会发布到已关联的版块</span>
                    </div>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label>关联设备</label></div>
                            <Select v-model="topicadd.relatedequip" style="width:150px;" placeholder="--选择“下拉内容”--">
                                <Option v-for="(item, index) in equipitem" :value="item.value" :key="index">{{ item.label }}</Option>
                            </Select>
                        </div>
                        <span>关联设备时，此话题会出现在该设备登录的用户的推荐列表中</span>
                    </div>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label>是否在首页显示</label></div>
                            <Select v-model="topicadd.ifshow" style="width:150px;">
                                <Option value="yes">是</Option>
                                <Option value="no">否</Option>
                            </Select>
                        </div>
                        <span>此话题是否在首页热门列表中显示</span>
                    </div>
                    <h1>4.权限设置</h1>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label>发表限制</label></div>
                            <Select v-model="topicadd.publishlimit" style="width:150px;" placeholder="--选择“下拉内容”--">
                                <Option v-for="(item, index) in publishitem" :value="item.value" :key="index">{{ item.label }}</Option>
                            </Select>
                        </div>
                        <span>哪些用户组在发帖时可以使用此话题</span>
                    </div>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label>浏览限制</label></div>
                            <Select v-model="topicadd.viewlimit" style="width:150px;" placeholder="--选择“下拉内容”--">
                                <Option v-for="(item, index) in viewitem" :value="item.value" :key="index">{{ item.label }}</Option>
                            </Select>
                        </div>
                        <span>哪些用户可以使用此话题</span>
                    </div>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label>话题管理员</label></div>
                            <Select v-model="topicadd.topicmanager" style="width:150px;" placeholder="--选择“下拉内容”--">
                                <Option v-for="(item, index) in topicmitem" :value="item.value" :key="index">{{ item.label }}</Option>
                            </Select>
                        </div>
                        <span>哪些用户有权限管理该话题下的帖子</span>
                    </div>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label>话题优质内容贡献者</label></div>
                            <Select v-model="topicadd.superior" style="width:150px;" placeholder="--选择“下拉内容”--">
                                <Option v-for="(item, index) in superioritem" :value="item.value" :key="index">{{ item.label }}</Option>
                            </Select>
                        </div>
                        <span>哪些用户可以出现在话题优质内容贡献者栏</span>
                    </div>
                    <div class="formitem">
                        <div class="formwrapper">
                            <div class="labelwrapper"><label><span>*</span>是否启用</label></div>
                            <Select v-model="topicadd.ifopen" style="width:150px;">
                                <Option value="yes">启用</Option>
                                <Option value="no">不启用</Option>
                            </Select>
                        </div>
                        <span>不启用状态下用户不能搜索和选择此话题</span>
                    </div>
                    <div style="text-align:center;margin:50px;">
                    <Button type="default" @click="cancel" style="margin:30px;">取消</Button>
                    <Button type="success" @click="save" style="margin:30px;">保存</Button></div>
            </div>
    </div>
</template>
<script>

export default {
    name: 'topic-add',
    data () {
            return {
                topicadd: {
                    classify: 'all',
                    name:'',
                    brief:'',
                    relatedsection:'',
                    relatedtopic:'',
                    relatedequip:'',
                    ifshow:'yes',
                    publishlimit:'',
                    viewlimit:'',
                    topicmanager:'',
                    superior:'',
                    ifopen:'yes',
                },
                classitem: [
                    {
                        value: 'all',
                        label: '全部'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                sectionitem: [
                    {
                        value: 'all',
                        label: '全部'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                topicitem: [
                    {
                        value: 'all',
                        label: '全部'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                equipitem: [
                    {
                        value: 'all',
                        label: '全部'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    }
                ],
                publishitem: [
                    {
                        value: 'all',
                        label: '全部'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    }
                ],
                viewitem: [
                    {
                        value: 'all',
                        label: '全部'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    }
                ],
                topicmitem: [
                    {
                        value: 'all',
                        label: '全部'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    }
                ],
                superioritem: [
                    {
                        value: 'all',
                        label: '全部'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    }
                ],
                list:[{name:'Mac使用技巧',src:'src/images/contentManage/u403.png',class:'iPhone',num:1000},{name:'Mac使用技巧',src:'',class:'iPhone',num:1000}]
            }
    },
    methods: {
        cancel() {

        },
        save() {

        }
    }
};
</script>