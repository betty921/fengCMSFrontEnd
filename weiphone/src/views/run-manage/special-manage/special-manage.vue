<style lang="less" scoped>
    @import "./special-manage.less";
    @import "../../../styles/common.less";
</style>
<template>
    <div class="special-manage">
        <Row>
            <div class="specialsearch wrapper">
                <Form :model="specialsearch" :label-width="80" inline style="height:32px;">
                    <Form-item label="专题名称">
                        <Input v-model="specialsearch.name" placeholder="输入名称或部分关键字" style="width:250px;"></Input>
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
            <div class="bannerul wrapper">
                <ul>
                    <li v-for="(item,index) in list" :key="index">
                        <div class="imgwrapper"><img :src="item.img"></div>
                        <h3>ID:{{item.id}}&nbsp;{{item.name}}</h3>
                        <span>{{item.time}}</span>
                        <p>{{item.content}}</p>
                        <span style="color:#333333;">{{item.state}}</span>
                        <span style="color:#333333;cursor:pointer;">编辑</span>
                        <span style="color:#333333;cursor:pointer;">删除</span>
                    </li>
                </ul>
            </div>
        </Row>
        <div class="page wrapper">
            <Page style="float:right;" :total="1000" show-total show-elevator show-sizer :page-size="20"></Page>
        </div>
    </div>
</template>
<script>

export default {
    name: 'special-manage',
    data () {
            return {
                specialsearch: {
                    name:'',
                },
                list:[{id:'10001',name:'iPhone十周年纪念版',state:'草稿',img:'src/images/contentManage/u403.png',time:'2018-06-13 10:39:01',content:'威锋小编精选一周内来自站内所有值得关注话题，及时发现小组热点和精华',show:true},
                      {id:'10001',name:'iPhone十周年纪念版',state:'已发布',time:'2018-06-13 10:39:01',content:'威锋小编精选一周内来自站内所有值得关注话题，及时发现小组热点和精华',show:true}],
                placeitem: [
                    {
                        value: 'home',
                        label: '威锋社区首页'
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
            }
    },
    methods: {
        adit() {
            this.$router.push('/topic-add');
        }
    }
};
</script>