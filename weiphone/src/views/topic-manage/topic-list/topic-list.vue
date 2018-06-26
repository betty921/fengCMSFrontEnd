<style lang="less" scoped>
    @import "./topic-list.less";
    @import "../../../styles/common.less";
</style>
<template>
    <div class="topic-list">
        <Row>
            <div class="topicsearch wrapper">
                <Form :model="topicsearch" :label-width="80" inline style="height:32px;">
                    <Form-item label="话题分类">
                        <Select v-model="topicsearch.classify" style="width:120px;">
                            <Option v-for="(item, index) in classitem" :value="item.value" :key="index">{{ item.label }}</Option>
                        </Select>
                    </Form-item>
                    <Form-item label="话题名称">
                        <Input v-model="topicsearch.name" placeholder="输入名称或部分关键字" style="width:250px;"></Input>
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
                            <th>话题名称</th>
                            <th>话题图片</th>
                            <th>话题分类</th>
                            <th>帖子数量</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>  
                        <tr v-for="(item,index) in list" :key="index">
                            <td>{{item.name}}</td>
                            <td><img :src="item.src" width="75px" height="49px"></td>
                            <td>{{item.class}}</td>
                            <td>{{item.num}}</td>
                            <td><span @click="adit">编辑</span></td>
                        </tr>  
                    </tbody>
                </table>
            </div>
        </Row>
        <div class="page wrapper">
                <Page style="float:right;" :total="1000" show-total show-elevator show-sizer :page-size="20"></Page>
            </div>
    </div>
</template>
<script>

export default {
    name: 'topic-list',
    data () {
            return {
                topicsearch: {
                    classify: 'all',
                    name:'',
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
                list:[{name:'Mac使用技巧',src:'src/images/contentManage/u403.png',class:'iPhone',num:1000},{name:'Mac使用技巧',src:'',class:'iPhone',num:1000}]
            }
    },
    methods: {
        adit() {
            this.$router.push('/topic-add');
        }
    }
};
</script>