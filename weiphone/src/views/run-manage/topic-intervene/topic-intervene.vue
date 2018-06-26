<style lang="less" scoped>
    @import "./topic-intervene.less";
    @import "../../../styles/common.less";
</style>
<template>
    <div class="topic-intervene">
        <Row>
            <div class="topicsearch wrapper">
                <Form :model="topicsearch" :label-width="80" inline style="height:32px;">
                    <Form-item label="话题名称">
                        <Input v-model="topicsearch.name" placeholder="输入名称或部分关键字" style="width:250px;"></Input>
                    </Form-item>
                    <Form-item :label-width="10">
                        <Button>搜索</Button>
                    </Form-item>
                </Form>
            </div>
        </Row>
        <Row>
            <div class="topictable wrapper">
                <table class="table1">         
                    <thead>
                        <tr>
                            <th>排序</th>
                            <th>名称</th>
                            <th>图片</th>
                            <th>发帖量</th>
                            <th>是否已干预</th>
                            <th>开始/结束时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>  
                        <tr v-for="(item,index) in list" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{item.name}}</td>
                            <td><img :src="item.src" width="75px" height="49px"></td>
                            <td>{{item.num}}</td>
                            <td>{{item.intervene}}</td>
                            <td>{{item.start}}<br>-<br>{{item.end}}</td>
                            <td><span @click="adit">编辑</span></td>
                        </tr>  
                    </tbody>
                </table>
            </div>
        </Row>
        <div class="page wrapper">
            <Button>提交</Button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'topic-intervene',
    data () {
            return {
                topicsearch: {
                    name:'',
                },
                list:[{name:'Mac使用技巧',src:'src/images/contentManage/u403.png',num:'3136',intervene:'是',start:'2018年03月27日18:38',end:'2018年03月27日18:38'},
                      {name:'Mac使用技巧',src:'src/images/contentManage/u403.png',num:'3136',intervene:'是',start:'2018年03月27日18:38',end:'2018年03月27日18:38'}]
            }
    },
    methods: {
        adit() {
            this.$router.push('/topic-add');
        }
    }
};
</script>