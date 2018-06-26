<style lang="less">
    @import "./home.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="home-main wrapper">
        <Row>
            <div class="menu-item" style="margin-left:0px;">
                <img src="../../images/home/u86.png">
                <div class="item-title">今日帖子数量</div>
                <span>{{numbers.posts}}</span>
            </div>
            <div class="menu-item">
                <img src="../../images/home/u102.png">
                <div class="item-title">今日活跃会员</div>
                <span>{{numbers.vip}}</span>
            </div> 
            <div class="menu-item">
                <img src="../../images/home/u81.png">
                <div class="item-title">今日新增数量</div>
                <span>{{numbers.increase}}</span>
            </div> 
            <div class="menu-item" style="margin-right:0px;">
                <img src="../../images/home/u102.png">
                <div class="item-title">7日新增数量</div>
                <span>{{numbers.sevenday}}</span>
            </div> 
        </Row>
        <Row>
            <div class="card card-wait">
                <div class="card-head">待处理事项</div>
                <div class="card-main">
                    <div class="card-item" @click="pendingPost">
                        <div class="num">{{pending.posts}}</div>
                        <div class="label">待审核帖子</div>
                    </div>
                    <div class="card-item" @click="pendingReplay">
                        <div class="num">{{pending.replay}}</div>
                        <div class="label">待审核回复</div>
                    </div>
                    <div class="card-item" @click="pendingReport">
                        <div class="num">{{pending.report}}</div>
                        <div class="label">用户举报</div>
                    </div>
                    <div class="card-item" @click="pendingMessage">
                        <div class="num">{{pending.message}}</div>
                        <div class="label">待处理客服消息</div>
                    </div>
                </div>
            </div>
        </Row>
        <Row>
            <div class="card card-shortcut">
                <div class="card-head">快捷入口</div>
                <div class="card-main">
                    <div class="card-item" @click="findPost">
                        <div class="img"><img src="../../images/home/u151.png" width="25px" height="25px"></div>
                        <div class="label">帖子查找</div>
                    </div>
                    <div class="card-item" @click="themePostManage">
                        <div class="img"><img src="../../images/home/u159.png" width="25px" height="25px"></div>
                        <div class="label">主题帖管理</div>
                    </div>
                    <div class="card-item" @click="specialInterven">
                        <div class="img"><img src="../../images/home/u165.png" width="25px" height="25px"></div>
                        <div class="label">客户端专题干预</div>
                    </div>
                    <div class="card-item" @click="topicInterven">
                        <div class="img"><img src="../../images/home/u171.png" width="25px" height="25px"></div>
                        <div class="label">客户端话题干预</div>
                    </div>
                    <div class="card-item" @click="hotContent">
                        <div class="img"><img src="../../images/home/u177.png" width="25px" height="25px"></div>
                        <div class="label">热门内容审核</div>
                    </div>
                </div>
            </div>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'home',
     data () {
        return {
            pending:{
                posts:20,
                replay:10,
                report:10,
                message:10
            },
            numbers:{
                posts:2000,
                vip:1000,
                increase:1000,
                sevenday:1000
            }   
        }
    },
    methods: {
        findPost() {
            alert("帖子查找");
        },
        themePostManage() {
            alert("主题帖管理");
        },
        specialInterven() {
            alert("客户端专题干预");
        },
        topicInterven() {
            alert("客户端话题干预");
        },
        hotContent() {
            alert("热门内容审核");
        },
        pendingPost() {
            alert("待审核帖子");
        },
        pendingReplay() {
            alert("待审核回复");
        },
        pendingReport() {
            alert("用户举报");
        },
        pendingMessage() {
            alert("待处理客服消息");
        }
    }
};
</script>
