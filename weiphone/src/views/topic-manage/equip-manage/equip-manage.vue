<style lang="less" scoped>
    @import "./equip-manage.less";
    @import "../../../styles/common.less";
</style>
<template>
    <div class="equip-manage">
        <Row>
            <div class="equipsearch wrapper">
                <Form :model="equipsearch" :label-width="80" inline style="height:32px;">
                    <Form-item label="搜索设备">
                        <Input v-model="equipsearch.name" placeholder="输入名称或部分关键字" style="width:250px;"></Input>
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
                            <th>名称</th>
                            <th>型号</th>
                            <th>关联话题</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>  
                        <tr v-for="(item,index) in list" :key="index">
                            <td>{{item.name}}</td>
                            <td>{{item.version}}</td>
                            <td>{{item.relatedtopic}}</td>
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
    name: 'equip-manage',
    data () {
            return {
                equipsearch: {
                    name:'',
                },
                list:[{name:'iPhone 7Plus',version:'A1661',relatedtopic:'iPhone'},{name:'iPhone X',version:'A1661',relatedtopic:'iPhone'}]
            }
    },
    methods: {
        adit() {
            this.$router.push('/topic-add');
        }
    }
};
</script>