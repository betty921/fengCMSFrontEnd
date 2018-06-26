<style lang="less" scoped>
    @import "./banner-intervene.less";
    @import "../../../styles/common.less";
</style>
<template>
    <div class="banner-intervene">
        <Row>
            <div class="placeselect wrapper">
                <Form :model="placeselect" :label-width="80" inline style="height:32px;">
                    <Form-item label="选择位置">
                        <Select v-model="placeselect.place" style="width:120px;">
                            <Option v-for="(item, index) in placeitem" :value="item.value" :key="index">{{ item.label }}</Option>
                        </Select>
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
                        <h3>{{item.name}}</h3>
                        <span>{{item.start}}</span><span>{{item.end}}结束</span><span>{{item.watched}}查看</span>
                        <p>{{item.content}}</p>
                        <span style="color:#333333;" v-if="item.show">
                            <img width="12px" heigth="12px" style="vertical-align:-1px;margin-right:5px;" src="../../../images/runManage/u2437.png">展示中
                        </span>
                        <span style="color:#333333;" v-else>
                            <img width="12px" heigth="12px" style="vertical-align:-1px;margin-right:5px;" src="../../../images/runManage/u2446.png">已过期
                        </span>
                        <span style="color:#333333;">编辑</span>
                        <span>
                            <Poptip placement="right" width="60">
                                <img width="25px" heigth="25px" style="vertical-align:-7px;margin-right:5px;cursor:pointer;" src="../../../images/runManage/u2447.png">
                                <div class="api" slot="content">
                                    <p>查看排期计划</p>
                                    <p>撤下</p>
                                    <p>删除</p>
                                </div>
                            </Poptip>
                        </span>
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
    name: 'equip-manage',
    data () {
            return {
                placeselect: {
                    place:'home',
                },
                list:[{name:'iPhone十周年纪念版',img:'src/images/contentManage/u403.png',start:'2018-06-13 10:39:01',end:'2018-06-13 10:39:01',watched:'1000',content:'威锋小编精选一周内来自站内所有值得关注话题，及时发现小组热点和精华',show:true},
                      {name:'iPhone十周年纪念版',start:'2018-06-13 10:39:01',end:'2018-06-13 10:39:01',watched:'1000',content:'威锋小编精选一周内来自站内所有值得关注话题，及时发现小组热点和精华',show:true}],
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