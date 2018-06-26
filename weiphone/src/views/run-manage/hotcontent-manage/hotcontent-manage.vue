<style lang="less" scoped>
    @import "./hotcontent-manage.less";
    @import "../../../styles/common.less";
</style>
<template>
    <div class="hotcontent-manage">
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
                <Form-item label="所属话题" placeholder="--选择“复选内容”--">
                    <Select v-model="conditions.topic" style="width:100px;">
                        <Option value="nocheck">未审核</Option>
                        <Option value="checked">已审核</Option>
                    </Select>
                </Form-item>
                <Form-item :label-width="115" label="被浏览次数介于">
                    <Input v-model="conditions.viewstart" style="width:80px;"></Input> -
                    <Input v-model="conditions.viewend" style="width:80px;"></Input>
                </Form-item>     
                <Form-item :label-width="115" label="被回复次数介于">
                    <Input v-model="conditions.replaystart" style="width:80px;"></Input> -
                    <Input v-model="conditions.replayend" style="width:80px;"></Input>
                </Form-item>  
                <Form-item :label-width="115" label="被点赞次数介于">
                    <Input v-model="conditions.likestart" style="width:80px;"></Input> -
                    <Input v-model="conditions.likeend" style="width:80px;"></Input>
                </Form-item>                 
                <Form-item :label-width="15" style="text-align:center;">
                    <Button type="ghost" style="margin:20px;" @click="reset">重置</Button>
                    <Button type="ghost" style="margin:20px;" @click="toquery">确定</Button>
                </Form-item>
            </Form>
        </div>
        <Row>
            <div class="filtrate wrapper">
                <div style="display:inline;cursor:pointer;" @click="filter">
                    <img src="../../../images/contentManage/u403.png" width="20px" height="20px">
                    <span>筛选</span>
                </div>
                <div class="reviewwrapper">
                <div :class="{nav:nav==true,active:theme==true}" @click="themereview">
                    <span>最新列表</span>
                </div>
                <div :class="{nav:nav==true,active:replay==true}" @click="replayreview">
                    <span>已推荐内容</span>
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
                        <th>浏览量</th>
                        <th>回复量</th>
                        <th>点赞量</th>
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
                        <td>{{item.view}}</td>
                        <td>{{item.replay}}</td>
                        <td>{{item.like}}</td>
                        <td><span @click="recommend" style="color:#3377AA;">推荐</span><span style="color:#3377AA;" @click="adddigest">加精</span></td>
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
                nav:true,
                theme:true,
                replay:false,
                maxLength:5,
                conditions: {
                    datestart: '',
                    dateend: '',
                    texttitle: '',
                    topic: '',
                    viewstart:'',
                    viewend:'',
                    replaystart:'',
                    replayend:'',
                    likestart:'',
                    likeend:'',
                },
                list:[{title:'二片装系列钢化膜',topic:'话题',autor:'作者',time:'2019-09-21 22:23',view:'30',replay:'30',like:'30'},{title:'二片装系列钢化膜',topic:'话题',autor:'作者',time:'2019-09-21 22:23',view:'30',replay:'30',like:'30'}],
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
            recommend() {

            },
            adddigest() {

            }
        }
};
</script>