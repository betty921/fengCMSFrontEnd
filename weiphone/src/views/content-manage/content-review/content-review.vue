<style lang="less" scoped>
    @import "./content-review.less";
    @import "../../../styles/common.less";
</style>
<template>
    <div class="content-manage">
        <div class="screen" v-show="screen"><!--筛选弹框-->
            <Form :model="conditions" :label-width="80">
                <Form-item label="选择时间">
                    <Date-picker type="date" placeholder="选择日期" v-model="conditions.datestart" style="width:105px;"></Date-picker>
                    -
                    <Date-picker type="date" placeholder="选择日期" v-model="conditions.dateend" style="width:105px;"></Date-picker>
                </Form-item>
                <Form-item label="帖子标题">
                    <Input v-model="conditions.texttitle" placeholder="输入标题或部分关键词" style="width:250px;"></Input>
                </Form-item>
                <Form-item label="用户昵称">
                    <Input v-model="conditions.username" placeholder="输入发布者昵称" style="width:250px;"></Input>
                </Form-item>
                <Form-item label="所属话题" placeholder="--选择“复选内容”--">
                    <Select v-model="conditions.topic" style="width:100px;">
                        <Option value="nocheck">未审核</Option>
                        <Option value="checked">已审核</Option>
                    </Select>
                </Form-item>               
                <Form-item :label-width="15" style="text-align:center;">
                    <Button type="ghost" style="margin:20px;" @click="reset">重置</Button>
                    <Button type="ghost" style="margin:20px;" @click="toquery">确定</Button>
                </Form-item>
            </Form>
        </div>
        <Modal v-model="modal1" @on-ok="ok" @on-cancel="cancel" width="400" :closable="false"><!--删除帖子确认-->
            <p slot="header" style="text-align:center;font-size:18px;border-bottom:none;color:#1FA4F0;padding:20px;font-weight:none;">您确定要删除这篇内容吗</p>
            <Radio-group v-model="vertical" vertical style="border:none;">
                <ul class="model-list">
                    <li @click="hideinput">
                        <Radio label="adv-content">
                            <span style="float:right">广告内容</span>
                        </Radio>
                    </li>
                    <li @click="hideinput">
                        <Radio label="resion">
                            <span style="float:right">删除帖子理由</span>
                        </Radio>
                    </li> 
                    <li @click="hideinput">
                        <Radio label="end">
                            <span style="float:right">后台可以配置</span>
                        </Radio>
                    </li>
                    <li @click="hideinput">
                        <Radio label="content">
                            <span style="float:right">广告内容</span>
                        </Radio>
                    </li>
                    <li @click="elseinput">
                        <Radio label="windows">
                            <span style="float:right">其他</span>
                        </Radio>
                    </li>
                    <li v-show="inputvisible">
                        <textarea style="width:345px;height:130px;resize:none;padding:8px;" placeholder="输入理由"></textarea>
                    </li>
                </ul>
            </Radio-group>
        </Modal>
        <Row>
            <div class="filtrate wrapper">
                <div style="display:inline;cursor:pointer;" @click="filter">
                    <img src="../../../images/contentManage/u403.png" width="20px" height="20px">
                    <span>筛选</span>
                </div>
                <div class="reviewwrapper">
                <div :class="{nav:nav==true,active:theme==true}" @click="themereview">
                    <span>审核主题</span>
                </div>
                <div :class="{nav:nav==true,active:replay==true}" @click="replayreview">
                    <span>审核回复</span>
                </div>
                </div>
            </div>
        </Row>
        <Row>
            <div class="table wrapper">
                <table class="table1">         
                <thead>
                    <tr>
                        <th style="background:white;"></th>
                        <th>帖子标题</th>
                        <th>话题</th>
                        <th>作者</th>
                        <th>发布时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody v-for="(item,index) in list" :key="index" :class="{pass:item.whetherpass=='pass',fail:item.whetherpass=='fail'}">  
                    <tr>
                        <td style="background:white;width:100px;"><span @click="change"><input v-model="item.whetherpass" type="radio" :name="index" value="pass" style="vertical-align:-2px;margin-bottom:15px;"></span><span>通过</span><br>
                        <span @click="changed"><input v-model="item.whetherpass" type="radio" :name="index" value="fail" style="vertical-align:-2px;"></span><span>删除</span></td>
                        <td style="color:#3399CC;cursor:pointer;">{{item.title}}</td>
                        <td>{{item.topic}}</td>
                        <td>{{item.autor}}</td>
                        <td>{{item.time}}</td>
                        <td><span @click="pass" style="color:#3377AA;">通过</span><span style="color:#3377AA;" @click="remove">删除</span></td>
                    </tr>
                    <tr style="text-align:center;">
                        <td style="background:white;"></td>
                        <td style="border-top:1px solid #eee;border-bottom:1px solid black;" colspan="5">
                            <p style="margin:10px;">{{item.fold?maxSlice(item.content):item.content}}</p>
                            <div v-show="item.content.length>maxLength" style="margin:20px;">
                                <span class="show" @click="item.fold=false" v-show="item.fold" style="cursor:pointer">展开</span>
                                <span class="show" @click="item.fold=true" v-show="!item.fold" style="cursor:pointer">收起</span>
                            </div>
                        </td>
                    </tr>   
                </tbody>
            </table>
            </div>
        </Row>

            <div class="page wrapper">
                <span><Button type="ghost">提交</Button><span @click="allpass"><Checkbox style="margin:0 25px;" v-model="allpassed">全部通过</Checkbox></span><span @click="allfail"><Checkbox v-model="allfailed">全部删除</Checkbox></span></span>
                <Page style="float:right;" :total="1000" show-total show-elevator show-sizer :page-size="20"></Page>
            </div>

    </div>
</template>
<script>

export default {
    name: 'content-review',
    data () {
            return {
                screen:false,
                modal1:false,
                vertical: 'adv-content',
                inputvisible: false,
                nav:true,
                theme:true,
                replay:false,
                maxLength:5,
                conditions: {
                    datestart: '',
                    dateend: '',
                    texttitle: '',
                    username: '',
                    topic: '',
                },
                list:[{title:'帖子标题',topic:'话题',autor:'作者',time:'2019-09-21',operate:'擦搜做',content:'哈哈哈哈或hh或hhhh或或或',whetherpass:'',fold:true},{title:'帖子标题',topic:'话题',autor:'作者',time:'2019-09-21',operate:'擦搜做',content:'哈哈哈哈lalal或或',whetherpass:'',fold:true}],
                allpassed:false,
                allfailed:false
            }
        },
        methods: {
            handleAdd () {
                this.formDynamic.items.push({
                    value: ''
                });
            },
            handleRemove (index) {
                this.formDynamic.items.splice(index, 1);
            },
            ok () {
                this.modal1=false;
            },
            cancel () {
                this.modal1=false;
            },
            elseinput() {
                this.inputvisible=true;
            },
            hideinput() {
                this.inputvisible=false;
            },
            reset() {
                this.query.datestart='';
                this.query.dateend='';
                this.query.texttitle='';
                this.query.username='';
                this.query.topic='';
            },
            toquery() {

            },
            pass(){
                
            },
            maxSlice(v){
                return v.length>this.maxLength?v.slice(0,this.maxLength)+'...':v;
            },
            allpass(){
                if(this.allpassed==false){
                    for(let i=0;i<2;i++){
                        this.list[i].whetherpass='pass';
                    }
                    this.allfailed=false;
                }
                else{
                    for(let i=0;i<2;i++){
                        this.list[i].whetherpass='';
                    }
                }
            },
            allfail(){
                if(this.allfailed==false){
                    this.list.forEach((item,index)=>{
                        item.whetherpass='fail';
                    })
                    this.allpassed=false;
                }
                else{
                    this.list.forEach((item,index)=>{
                        item.whetherpass='';
                    })
                }
            },
            change(){
                this.allpassed=false;
                this.allfailed=false;
                this.list.forEach((item,index)=>{
                    if(item.whetherpass=='pass'){
                        this.allpassed=true;
                        this.allfailed=false;
                    }})
            },
            changed(){
                this.allpassed=false;
                this.allfailed=false;
                this.list.forEach((item,index)=>{
                    if(item.whetherpass=='fail'){
                        this.allpassed=false;
                        this.allfailed=true;
                    }})
            },
            filter() {
                this.screen=true;
            },
            themereview() {
                this.theme=true;
                this.replay=false;
            },
            replayreview() {
                this.theme=false;
                this.replay=true;
            },
            remove() {
                this.modal1=true;
            }
        }
};
</script>