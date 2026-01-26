<template>
  <div class="landing-page">
    <!-- 固定LINEボタン -->
    <Transition name="fade">
      <a
        v-show="showLineButton"
        href="https://s.lmes.jp/landing-qr/2002059008-M8KDDdoP?uLand=zI2YQN"
        class="fixed-line-button lme_qr_add_friend"
        target="_blank"
        rel="noopener noreferrer"
        @click="trackEvent('固定LINEボタン')"
      >
        <img :src="lineButtonImage" alt="LINEで気軽に相談する" />
      </a>
    </Transition>

    <!-- Phase 2: ファーストビュー -->
    <FirstViewSection ref="firstViewRef" />

    <PropertySection :properties="propertiesTop" />

    <!-- Phase 3: メディア掲載 -->
    <MediaSection ref="mediaSectionRef" />

    <!-- 優待特典+プレゼント -->
    <BenefitsSection />

    <!-- Phase 4: お悩み -->
    <!-- <ConcernsSection /> -->

    <!-- Phase 5: 選ばれる理由 -->
    <ReasonsSection />

    <!-- Phase 6: ご相談・来店 -->
    <ConsultationSection position="上部" />

    <!-- Phase 7: 物件選び放題 -->
    <PropertySection :properties="propertiesBottom" />

    <!-- Phase 8: SNS紹介 -->
    <SnsSection />

    <!-- Phase 9: 安心ポイント -->
    <SafetyPointSection />

    <!-- Phase 10: お客様の声 -->
    <TestimonialsSection />

    <!-- Phase 11: ご相談・来店（再利用） -->
    <ConsultationSection :hide-top-overlay="true" position="中部" />

    <!-- Phase 12: ご入居までの流れ -->
    <FlowSection />

    <!-- Phase 13: スマートにお部屋探し -->
    <SmartSearchSection />

    <!-- Phase 14: よくある質問 -->
    <FaqSection />

    <!-- Phase 15: 店舗情報 -->
    <ShopInfoSection />

    <!-- Phase 16: ご相談・来店（再利用） -->
    <ConsultationSection position="下部" />

    <!-- Phase 17: フッター -->
    <FooterSection />

    <!-- 離脱防止ポップアップ -->
    <LeavePopup
      :visible="showLeavePopup"
      @close="handleLeavePopupClose"
      @line-click="handleLeavePopupLineClick"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import lineButtonImage from '@/assets/images/line-button.svg';
import FirstViewSection from '@/components/sections/FirstViewSection.vue';
import MediaSection from '@/components/sections/MediaSection.vue';
import BenefitsSection from '@/components/sections/BenefitsSection.vue';
// import ConcernsSection from '@/components/sections/ConcernsSection.vue';
import ReasonsSection from '@/components/sections/ReasonsSection.vue';
import ConsultationSection from '@/components/sections/ConsultationSection.vue';
import PropertySection from '@/components/sections/PropertySection.vue';
import SnsSection from '@/components/sections/SnsSection.vue';
import SafetyPointSection from '@/components/sections/SafetyPointSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import FlowSection from '@/components/sections/FlowSection.vue';
import SmartSearchSection from '@/components/sections/SmartSearchSection.vue';
import FaqSection from '@/components/sections/FaqSection.vue';
import ShopInfoSection from '@/components/sections/ShopInfoSection.vue';
import FooterSection from '@/components/sections/FooterSection.vue';
import LeavePopup from '@/components/common/LeavePopup.vue';

// 物件画像のインポート（FV直下用）
import yoyogiImage from '@/assets/images/properties/yoyogi.jpg';
import shibuyaImage from '@/assets/images/properties/shibuya.jpg';
import kasaiImage from '@/assets/images/properties/kasai.jpg';
import shinNakanoImage from '@/assets/images/properties/shin-nakano.jpg';

// 物件画像のインポート（下部用）
import ishikawatyoImage from '@/assets/images/properties/ishikawatyo.png';
import sakuragaokaImage from '@/assets/images/properties/sakuragaoka.png';
import senzokuImage from '@/assets/images/properties/senzoku.png';
import shiroganedaiImage from '@/assets/images/properties/shiroganedai.png';

// FV直下の物件データ
const propertiesTop = [
  {
    id: 1,
    image: yoyogiImage,
    area: '渋谷区',
    price: '210,000',
    layout: '1DK',
    size: '33㎡',
    url: 'https://www.instagram.com/p/DNaiDoLpkVY/?igsh=MWg1Z2szcmt3dm1qeQ==',
    eventName: '物件カード_代々木公園駅'
  },
  {
    id: 2,
    image: shibuyaImage,
    area: '渋谷区',
    price: '未公開',
    layout: '2LDK',
    size: '91㎡',
    url: 'https://www.instagram.com/p/DNDb9xrJ-so/?igsh=MWY0ZzI4ZXd5cThvOQ==',
    eventName: '物件カード_渋谷駅'
  },
  {
    id: 3,
    image: kasaiImage,
    area: '江戸川区',
    price: '136,000',
    layout: '1DK',
    size: '41㎡',
    url: 'https://www.instagram.com/p/DPYxmlHEuMY/?igsh=cmgyZXVydThjaHZr',
    eventName: '物件カード_葛西駅'
  },
  {
    id: 4,
    image: shinNakanoImage,
    area: '中野区',
    price: '120,000',
    layout: '2DK',
    size: '41㎡',
    url: 'https://www.instagram.com/p/DON_nZIEp1q/?igsh=MW0yYXV2MDA0eTR4aA==',
    eventName: '物件カード_新中野駅'
  }
];

// LP下部の物件データ（別の物件セット）
const propertiesBottom = [
  {
    id: 1,
    image: shiroganedaiImage,
    area: '港区',
    price: '未公開',
    layout: '3LDK',
    size: '193㎡',
    url: '#',
    eventName: '物件カード_白金台'
  },
  {
    id: 2,
    image: sakuragaokaImage,
    area: '保土ケ谷区',
    price: '75,000',
    layout: '1K',
    size: '21㎡',
    url: '#',
    eventName: '物件カード_桜ヶ丘'
  },
  {
    id: 3,
    image: ishikawatyoImage,
    area: '中区',
    price: '660,000',
    layout: '4LDK',
    size: '172㎡',
    url: '#',
    eventName: '物件カード_石川町'
  },
  {
    id: 4,
    image: senzokuImage,
    area: '大田区',
    price: '241,000',
    layout: '1R',
    size: '51㎡',
    url: '#',
    eventName: '物件カード_洗足'
  }
];

const showLineButton = ref(false);
const mediaSectionRef = ref<InstanceType<typeof MediaSection> | null>(null);
const firstViewRef = ref<InstanceType<typeof FirstViewSection> | null>(null);
const showLeavePopup = ref(false);
const hasShownLeavePopup = ref(false);

// PTエンジンのイベントトラッキング
interface WindowWithPT extends Window {
  _pt_sp_2?: { push: (method: string, data: { eventName: string }) => void };
}
const trackEvent = (eventName: string) => {
  const w = window as WindowWithPT;
  w._pt_sp_2?.push('setCustomEvent', { eventName });
};

const updateButtonVisibility = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // ボタンの中央位置（画面下端から46px上）
  const buttonCenterFromBottom = 46;
  const buttonCenterY = windowHeight - buttonCenterFromBottom;

  // MediaSectionの下端位置を取得
  const mediaElement = mediaSectionRef.value?.$el as HTMLElement | undefined;
  const mediaBottom = mediaElement ? mediaElement.offsetTop + mediaElement.offsetHeight : 0;

  // MediaSectionの下端がボタンの中央より上にスクロールされたら表示
  const mediaBottomRelativeToViewport = mediaBottom - scrollTop;
  const isMediaPastButtonCenter = mediaBottomRelativeToViewport < buttonCenterY;

  // フッターに近づいたら非表示（下から100px）
  const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
  const isNearFooter = distanceFromBottom <= 100;

  // MediaSectionがボタン中央より上かつフッター付近でない場合に表示
  showLineButton.value = isMediaPastButtonCenter && !isNearFooter;
};

// 離脱防止ポップアップのハンドラー
const handleLeavePopupClose = () => {
  showLeavePopup.value = false;
};

const handleLeavePopupLineClick = () => {
  trackEvent('離脱防止ポップアップ_LINE');
  showLeavePopup.value = false;
};

// FVより下にスクロールしたかどうかの状態
const isBelowFV = ref(false);
// ブラウザバック検知用の履歴が追加済みかどうか
const hasAddedBackHistory = ref(false);

// スクロール時にFVより下かどうかをチェック
const checkScrollBelowFV = () => {
  const fvElement = firstViewRef.value?.$el as HTMLElement | undefined;
  const fvBottom = fvElement ? fvElement.offsetTop + fvElement.offsetHeight : 0;
  const scrollTop = window.scrollY;
  const wasBelowFV = isBelowFV.value;
  isBelowFV.value = scrollTop > fvBottom;

  // FVより下に初めてスクロールした時にダミー履歴を追加
  if (isBelowFV.value && !wasBelowFV && !hasAddedBackHistory.value) {
    history.pushState(null, '', null);
    hasAddedBackHistory.value = true;
  }
};

// ブラウザバック検知用のハンドラー
const handlePopState = () => {
  // FVより下にスクロールされている場合、かつポップアップ未表示の場合
  if (isBelowFV.value && !hasShownLeavePopup.value) {
    // 離脱防止ポップアップを表示
    showLeavePopup.value = true;
    hasShownLeavePopup.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', updateButtonVisibility);
  window.addEventListener('scroll', checkScrollBelowFV);
  updateButtonVisibility();

  // ブラウザのスクロール復元を無効化
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // ブラウザバック検知の設定（キャプチャフェーズで登録してVue Routerより先に処理）
  window.addEventListener('popstate', handlePopState, true);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateButtonVisibility);
  window.removeEventListener('scroll', checkScrollBelowFV);
  window.removeEventListener('popstate', handlePopState, true);
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.landing-page {
  width: 100%;
  max-width: $max-container-width;
  margin: 0 auto;
  background: $white;
  min-height: 100vh;
}

.fixed-line-button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: block;
  max-width: 320px;
  width: calc(100% - 40px);
  animation: bounce 1s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-8px);
  }
}

// フェードアニメーション
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
