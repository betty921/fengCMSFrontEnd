<style lang="less">
    @import "./system-setting.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="system-setting wrapper">
        <Row>
            <table class="system">
                <tr><td>PHP版本</td><td>{{systemInformation.phpVersion}}</td></tr>
                <tr><td>MySQL</td><td>{{systemInformation.mysql}}</td></tr>
                <tr><td>数据库尺寸</td><td>{{systemInformation.databaseSize}}</td></tr>
            </table>
        </Row>
    </div>
</template>
<script>

export default {
    name: 'system-setting',
    data () {
        return {
            systemInformation:{
                phpVersion:'',
                mysql:'',
                databaseSize:''
            }
        }
    }
 
};
</script>