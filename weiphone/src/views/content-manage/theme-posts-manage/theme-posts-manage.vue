<style lang="less" scoped>
    @import "./theme-posts-manage.less";
    @import "../../../styles/common.less";
</style>
<template>
    <div class="theme-posts-manage">
        <div class="select" v-show="modal3"><!--筛选弹框-->
            <Form :model="query1" :label-width="80">
                <Form-item label="选择时间">
                    <Date-picker type="date" placeholder="选择日期" v-model="query1.datestart" style="width:105px;"></Date-picker>
                    -
                    <Date-picker type="date" placeholder="选择日期" v-model="query1.dateend" style="width:105px;"></Date-picker>
                </Form-item>
                <Form-item label="帖子标题">
                    <Input v-model="query1.texttitle" placeholder="输入标题或部分关键词" style="width:250px;"></Input>
                </Form-item>
                <Form-item label="用户昵称">
                    <Input v-model="query1.username" placeholder="输入发布者昵称" style="width:250px;"></Input>
                </Form-item>
                <Form-item label="所属话题" placeholder="--选择“复选内容”--">
                    <Select v-model="query1.topic" style="width:100px;">
                        <Option value="nocheck">未审核</Option>
                        <Option value="checked">已审核</Option>
                    </Select>
                </Form-item> 
                <Form-item :label-width="115" label="被浏览次数介于">
                    <Input v-model="query1.viewstart" style="width:80px;"></Input> -
                    <Input v-model="query1.viewend" style="width:80px;"></Input>
                </Form-item>     
                <Form-item :label-width="115" label="被回复次数介于">
                    <Input v-model="query1.replaystart" style="width:80px;"></Input> -
                    <Input v-model="query1.replayend" style="width:80px;"></Input>
                </Form-item>  
                <Form-item :label-width="115" label="被点赞次数介于">
                    <Input v-model="query1.likestart" style="width:80px;"></Input> -
                    <Input v-model="query1.likeend" style="width:80px;"></Input>
                </Form-item>     
                <Form-item :label-width="115" label="是否包含精华帖">
                    <Radio-group v-model="query1.include">
                        <Radio label="不限制"></Radio>
                        <Radio label="包含"></Radio>
                        <Radio label="仅包含"></Radio>
                    </Radio-group>
                </Form-item>
                <Form-item :label-width="15" style="text-align:center;">
                    <Button type="ghost" style="margin:20px;">重置</Button>
                    <Button type="ghost" style="margin:20px;">确定</Button>
                </Form-item>
            </Form>
        </div>
        <Row>
            <div class="filtrate wrapper">
                <div style="display:inline;cursor:pointer;" @click="filter">
                <img src="../../../images/contentManage/u403.png" width="20px" height="20px">
                <span>筛选</span></div>
                <div class="exportdata">
                    <a id="hrefToExportTable" style="postion: absolute;left: -10px;top: -10px;width: 0px;height: 0px;"></a>
                    <Button type="ghost" style="height:32px;">导出Excel</Button>
                </div>
                <div class="sort">
                <Select v-model="sortrule" style="width:120px;">
                    <Option v-for="(item, index) in sortList" :value="item.value" :key="index">{{ item.label }}</Option>
                </Select>
                </div>
            </div>
        </Row>
        <Row>
            <div class="table wrapper">
                <table class="table1">         
                    <thead>
                        <tr>
                            <th>帖子标题</th>
                            <th>话题</th>
                            <th>作者</th>
                            <th>回复/浏览</th>
                            <th>主题发表时间</th>
                            <th>最后回复时间</th>
                        </tr>
                    </thead>
                    <tbody>  
                        <tr v-for="(item,index) in list" :key="index">
                            <td><input type="checkbox" name="choose"><span>{{item.title}}</span></td>
                            <td>{{item.topic}}</td>
                            <td>{{item.autor}}</td>
                            <td>{{item.replay}}/{{item.view}}</td>
                            <td>{{item.createtime}}</td>
                            <td>{{item.replaytime}}</td>
                        </tr>  
                    </tbody>
                </table>
            </div>
        </Row>
    </div>
</template>
<script>

export default {
    name: 'theme-posts-manage',
    data () {
            return {
                modal3:false,
                query1: {
                    datestart: '',
                    dateend: '',
                    texttitle: '',
                    username: '',
                    topic: '',
                    include: '',
                    viewstart: '',
                    viewend:'',
                    replaystart:'',
                    replayend:'',
                    likestart:'',
                    likeend:'',
                },
                sortList: [
                    {
                        value: 'lastreplay',
                        label: '按最后回复时间'
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
                sortrule: 'lastreplay',
                list:[{title:'航华玻璃',topic:'话题',autor:'谁',replay:30,view:1000,createtime:'2011-09-23',replaytime:'2099-09-22'},{title:'航华玻璃',topic:'话题',autor:'谁',replay:30,view:1000,createtime:'2011-09-23',replaytime:'2099-09-22'}]
            }
    },
    methods: {
        filter(){
            this.modal3=true;
        }
    }
};
</script>