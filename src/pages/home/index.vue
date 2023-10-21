<script setup lang="ts">
import { reactive } from 'vue'

const workData = reactive([
  { id: 1, value: 5, label: '待我签署' },
  { id: 2, value: 4, label: '待他人签署' },
  { id: 3, value: 6, label: '待我审批' },
  { id: 4, value: 6, label: '待他人审批' },
])
</script>

<template>
  <view class="relative bg-[#F5F5F7]">
    <image class="absolute left-0 right-0 z-1 w-full" src="/static/images/10621@2x.png" style="width: 100%" />

    <view class="relative z-2 px-[32rpx] py-[42rpx]">
      <view class="header flex items-center justify-between">
        <view>
          <view class="header-title">
            武汉锦辰数科技术有限公司
          </view>
          <view class="header-desc">
            电子签剩余
            <text class="sign-count">
              2000
            </text>
            份
          </view>
        </view>
        <view class="header-logo">
          <image src="/static/vite.png" mode="scaleToFill" style="width: 108rpx; height: 108rpx" />
        </view>
      </view>

      <view class="section">
        <view class="section-title">
          工作台
        </view>
        <view class="section-content">
          <view class="work-data">
            <view v-for="item in workData" :key="item.id" class="work-data-item">
              <view class="work-data-val">
                {{ item.value }}
              </view>
              <view class="work-data-label">
                {{ item.label }}
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <view class="section-title">
          合同模板
        </view>
        <view class="section-content">
          <view class="template">
            <view class="template-left">
              <view class="company">
                <view class="template-info">
                  <view class="template-title flex-row">
                    <view>企业模板</view>
                    <u-icon name="arrow-right" size="14" color="#909399" />
                  </view>
                  <view class="template-desc">
                    企业发布的模板方案
                  </view>
                </view>
                <view class="image">
                  <image
                    src="/static/images/209@2x.png"
                    mode="scaleToFill"
                    style="width: 140rpx; height: 120rpx"
                  />
                </view>
              </view>
              <view class="system">
                <view class="template-info">
                  <view class="template-title flex-row">
                    <view>系统模板</view>
                    <u-icon name="arrow-right" size="14" color="#909399" />
                  </view>
                  <view class="template-desc">
                    系统预设多种模板方案
                  </view>
                </view>
                <view class="image">
                  <image
                    src="/static/images/210@2x.png"
                    mode="scaleToFill"
                    style="width: 140rpx; height: 120rpx"
                  />
                </view>
              </view>
            </view>
            <view class="template-right">
              <view class="template-info" style="margin-top: 24rpx">
                <view class="template-title flex-row">
                  <view>本地合同</view>
                  <u-icon name="arrow-right" size="14" color="#909399" />
                </view>
                <view class="template-desc">
                  创建合同
                </view>
              </view>
              <view class="local-image">
                <image
                  src="/static/images/212@2x.png"
                  mode="scaleToFill"
                  style="width: 160rpx; height: 176rpx"
                />
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <view class="section-title">
          最近文件
        </view>
        <view class="section-body">
          <view class="file-list">
            <view v-for="item in 10" :key="item" class="file-item">
              <view class="red file-state">
                审批驳回
              </view>

              <view class="file-name">
                《居间服务协议》
              </view>
              <view class="file-created">
                张力于2023年04月11日 12:21发起
              </view>
              <view class="file-divider" />
              <view class="file-info-item">
                <text class="file-info-label">
                  发起方
                </text>
                <text class="file-info-value">
                  武汉申贷网络有限公司
                </text>
              </view>
              <view class="file-info-item">
                <text class="file-info-label">
                  接收方
                </text>
                <text class="file-info-value">
                  张丽然
                </text>
              </view>
              <view class="file-info-item">
                <text class="file-info-label">
                  合同编号
                </text>
                <text class="file-info-value">
                  XY37738229001
                </text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped>
.file-item {
  position: relative;
  padding: 24rpx 32rpx;
  margin-bottom: 24rpx;
  background: #ffffff;
  border-radius: 12rpx 12rpx 12rpx 12rpx;
}
.file-item .file-state {
  position: absolute;
  top: 0;
  right: 0;
  width: 138rpx;
  height: 48rpx;
  line-height: 48rpx;
  text-align: center;
  font-size: 22rpx;
  font-family: PingFang SC-Bold, PingFang SC;
  font-weight: bold;
  color: #ffffff;
  border-top-right-radius: 12rpx;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 5% 100%);
}
.file-item .file-state.red {
  background-color: #ff503d;
}
.file-item .file-name {
  font-size: 32rpx;
  font-family: PingFang SC-Bold, PingFang SC;
  font-weight: bold;
  color: #303133;
}
.file-item .file-created {
  margin-top: 4rpx;
  font-size: 24rpx;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #909399;
}
.file-item .file-divider {
  margin: 24rpx 0 20rpx;
  height: 2rpx;
  background-color: #eeeeee;
}
.file-item .file-info-item {
  margin-bottom: 8rpx;
}
.file-item .file-info-item:last-child {
  margin-bottom: 0;
}
.file-item .file-info-item .file-info-label {
  display: inline-block;
  width: 144rpx;
  font-size: 26rpx;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #909399;
}
.file-item .file-info-item .file-info-value {
  font-size: 26rpx;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #606266;
}

.template {
  display: flex;
}
.template .template-left {
  margin-right: 16rpx;
  flex: 2;
}
.template .template-left .company,
.template .template-left .system {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120rpx;
  border: 2rpx solid #ffffff;
  box-sizing: content-box;
}
.template .template-left .company .image,
.template .template-left .system .image {
  position: absolute;
  top: 0;
  right: 0;
  width: 140rpx;
  height: 120rpx;
}
.template .template-left .company {
  margin-bottom: 16rpx;
  background: linear-gradient(135deg, #ffffff 0%, #f1f4ff 100%);
  border-radius: 12rpx 12rpx 12rpx 12rpx;
}
.template .template-left .system {
  background: linear-gradient(135deg, #ffffff 0%, #fff6ef 100%);
  border-radius: 12rpx 12rpx 12rpx 12rpx;
}
.template .template-info {
  margin-left: 32rpx;
  position: relative;
  z-index: 2;
}
.template .template-info .template-title {
  font-size: 28rpx;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #303133;
}
.template .template-info .template-desc {
  font-size: 22rpx;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #a8abb2;
}
.template .template-right {
  position: relative;
  flex: 1;
  background: linear-gradient(135deg, #ffffff 0%, #f2fff7 100%);
  border-radius: 12rpx 12rpx 12rpx 12rpx;
  border: 2rpx solid #ffffff;
}
.template .template-right .local-image {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 160rpx;
  height: 176rpx;
}
.template .template-right .template-info {
  margin-top: 24prx;
}

.section-title {
  margin: 48rpx 0 24rpx;
  font-size: 30rpx;
  font-family: PingFang SC-Bold, PingFang SC;
  font-weight: bold;
  color: #303133;
}

.work-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40rpx;
  background-color: #fff;
  border-radius: 12rpx;
}
.work-data .work-data-item {
  flex-basis: 25%;
}
.work-data .work-data-item .work-data-val {
  text-align: center;
  font-size: 40rpx;
  font-family: DIN-Bold, DIN;
  font-weight: bold;
  color: #303133;
}
.work-data .work-data-item .work-data-label {
  margin-top: 8rpx;
  text-align: center;
  font-size: 22rpx;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #909399;
}

.sign-page .page-content .header .header-logo {
  height: 108rpx;
  width: 108rpx;
  border-radius: 50%;
  background-color: #fff;
  overflow: hidden;
}
.sign-page .page-content .header .header-title {
  font-size: 36rpx;
  font-family: PingFang SC-Bold, PingFang SC;
  font-weight: bold;
  color: #303133;
}
.sign-page .page-content .header .header-desc {
  margin-top: 12rpx;
  display: inline-block;
  padding: 4rpx 16rpx;
  font-size: 20rpx;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #303133;
  background: linear-gradient(90deg, rgba(90, 126, 248, 0) 0%, rgba(90, 126, 248, 0.12) 100%);
  border-radius: 100rpx 100rpx 100rpx 100rpx;
}
.sign-page .page-content .header .header-desc .sign-count {
  font-size: 26rpx;
  font-family: DIN-Bold, DIN;
  font-weight: bold;
  color: #5a7ef8;
}
</style>

<route lang="json" type="home">
{
  "style": {
    "navigationStyle": "default",
    "navigationBarTitleText": "首页",
    "backgroundColor": "#F5F5F7"
  }
}
</route>
