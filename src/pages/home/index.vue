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

    <view class="relative z-2 px-4 py-5.25">
      <view class="header flex items-center justify-between">
        <view>
          <view class="text-lg font-bold color-black">
            武汉锦辰数科技术有限公司
          </view>
          <view class="bg-tag mt-1.5 inline-block rounded-[100rpx] px-[16rpx] py-[4rpx] text-xs">
            电子签剩余
            <text class="text-sm font-bold color-[#5a7ef8]">
              2000
            </text>
            份
          </view>
        </view>
        <view class="h-14 w-14 rounded-full bg-white">
          <image class="h-14 w-14" src="/static/vite.png" mode="scaleToFill" />
        </view>
      </view>

      <view class="section">
        <view class="section-title">
          工作台
        </view>
        <view class="section-content">
          <view class="flex items-center justify-between rounded-md bg-white p-5">
            <view v-for="item in workData" :key="item.id" class="basis-1/4">
              <view class="text-center text-xl font-bold">
                {{ item.value }}
              </view>
              <view class="mt-1 text-center text-xs font-normal text-gray">
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
          <view class="w-full flex">
            <view class="mr-2 basis-2/3">
              <view class="tpl-left company">
                <view class="relative z-2 ml-4">
                  <view class="flex">
                    <view class="text-sm font-normal">
                      企业模板
                    </view>
                    <text class="i-carbon:chevron-right text-gray" />
                  </view>
                  <view class="text-xs text-gray">
                    企业发布的模板方案
                  </view>
                </view>
                <view class="tpl-image">
                  <image
                    class="h-[120rpx] w-[140rpx]"
                    src="/static/images/209@2x.png"
                    mode="scaleToFill"
                    style="width: 140rpx; height: 120rpx"
                  />
                </view>
              </view>
              <view class="tpl-left system">
                <view class="relative z-2 ml-4">
                  <view class="flex">
                    <view class="text-normal text-sm">
                      系统模板
                    </view>
                    <text class="i-carbon:chevron-right text-gray" />
                  </view>
                  <view class="text-xs text-gray">
                    系统预设多种模板方案
                  </view>
                </view>
                <view class="tpl-image">
                  <image
                    class="h-[120rpx] w-[140rpx]"
                    src="/static/images/210@2x.png"
                    mode="scaleToFill"
                  />
                </view>
              </view>
            </view>
            <view class="tpl-right basis-1/3">
              <view class="ml-4 mt-3">
                <view class="flex">
                  <view class="text-sm font-normal">
                    本地合同
                  </view>
                  <text class="i-carbon:chevron-right text-gray" />
                </view>
                <view class="text-xs font-normal text-gray">
                  创建合同
                </view>
              </view>
              <view class="absolute bottom-0 right-0 h-[176rpx] w-[160rpx]">
                <image
                  class="h-[176rpx] w-[160rpx]"
                  src="/static/images/212@2x.png"
                  mode="scaleToFill"
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
            <view v-for="item in 10" :key="item" class="relative mb-3 rounded-lg bg-white p-3">
              <view class="clip-path absolute right-0 top-0 h-[48rpx] w-[138rpx] rounded-tr-lg bg-[#ff503d] text-center text-xs font-bold leading-[48rpx] color-white">
                审批驳回
              </view>

              <view class="text-base font-bold">
                《居间服务协议》
              </view>
              <view class="mt-1 text-xs font-normal text-gray">
                张力于2023年04月11日 12:21发起
              </view>
              <view class="mb-3 mt-3 h-[2rpx] bg-[#eeeeee]" />
              <view class="mb-1 last:mb-0">
                <text class="inline-block w-[144rpx] text-sm text-gray">
                  发起方
                </text>
                <text class="text-sm">
                  武汉申贷网络有限公司
                </text>
              </view>
              <view class="mb-1 last:mb-0">
                <text class="inline-block w-[144rpx] text-sm text-gray">
                  接收方
                </text>
                <text class="text-sm">
                  张丽然
                </text>
              </view>
              <view class="mb-1 last:mb-0">
                <text class="inline-block w-[144rpx] text-sm text-gray">
                  合同编号
                </text>
                <text class="text-sm">
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
.bg-tag {
  background: linear-gradient(90deg, rgba(90, 126, 248, 0) 0%, rgba(90, 126, 248, 0.12) 100%);
}

.clip-path {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 5% 100%);
}

.tpl-left {
  --at-apply: relative flex justify-between items-center h-[120rpx] box-content border border-solid border-[#ffffff]
}
.tpl-image {
  --at-apply: absolute top-0 right-0 w-[140rpx] h-[120rpx]
}
.tpl-left.company {
  margin-bottom: 16rpx;
  background: linear-gradient(135deg, #ffffff 0%, #f1f4ff 100%);
  border-radius: 12rpx 12rpx 12rpx 12rpx;
}
.tpl-left.system {
  background: linear-gradient(135deg, #ffffff 0%, #fff6ef 100%);
  border-radius: 12rpx 12rpx 12rpx 12rpx;
}
.tpl-right {
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f2fff7 100%);
  border-radius: 12rpx 12rpx 12rpx 12rpx;
  border: 2rpx solid #ffffff;
}

.section-title {
  --at-apply: text-base font-bold text-gray-800 mt-[48rpx] mb-[24rpx]
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
