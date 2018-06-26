<style lang="less" scoped>
    @import "./topic-classify.less";
    @import "../../../styles/common.less";
</style>
<template>
    <div class="topic-classify">
        <Row>
            <div class="classsearch wrapper">
                <Form :model="classsearch" :label-width="80" inline style="height:32px;">
                    <Form-item label="分类名称">
                        <Input v-model="classsearch.name" placeholder="输入名称或部分关键字" style="width:250px;"></Input>
                    </Form-item>
                    <Form-item :label-width="10">
                        <Button>搜索</Button>
                    </Form-item>
                    <Form-item style="float:right;">
                        <Button type="success">新增</Button>
                    </Form-item>
                </Form>
            </div>
        </Row>
        <Row>
            <div class="topictable wrapper">
                <table class="table1">         
                    <thead>
                        <tr>
                            <th>分类名称</th>
                            <th>话题数量</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>  
                        <tr v-for="(item,index) in list" :key="index">
                            <td>{{item.name}}</td>
                            <td>{{item.num}}</td>
                            <td><span @click="adit">编辑</span></td>
                        </tr>  
                    </tbody>
                </table>
            </div>
        </Row>
        <div class="page wrapper">
            <Button>提交</Button>
            <Page style="float:right;" :total="1000" show-total show-elevator show-sizer :page-size="20"></Page>
        </div>
    </div>
</template>
<script>

export default {
    name: 'topic-classify',
    data () {
            return {
                classsearch: {
                    name:'',
                },
                list:[{name:'iPhone',num:1000},{name:'MAC',num:1000}]
            }
    },
    methods: {
        adit() {
            this.$router.push('/topic-add');
        }
    }
};
</script>