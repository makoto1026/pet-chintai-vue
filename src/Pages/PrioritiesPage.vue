<template>
  <!-- ヘッダー＆KV -->
  <div class="head">
    <AppHeader class="header" />
    <img class="kv" src="@/assets/images/kv.png" />
  </div>
  <!-- 優待コンテンツ -->
  <div class="content">
    <FootprintsBrownIcon class="footprints-icon" />
    <p class="info-text">お引越しして終わりじゃない。<br>ペット住まいラボは、<br>その後のペットライフまで応援します。</p>
    <div class="service-container">
      <DogBrownIcon class="dog-icon" />
      <p class="title">SERVICE</p>
      <div v-for="d in destinations" :key="d.id">
        <PriorityContainer
          :imageUrl="d.imageUrl"
          :headTitle="d.headTitle"
          :title="d.title"
          :description="d.description"
          :benefitsNum="d.benefitsNum"
          :benefitsOne="d.benefitsOne"
          :benefitsTwo="d.benefitsTwo"
          :link="d.link"
        />
      </div>
    </div>
    <div class="limited-service-container">
      <FootprintsWhiteIcon class="footprints-white-icon" />
      <p class="limited-service-head">今しか出会えないサービスも！</p>
      <p class="limited-service-title">期間限定優待</p>
      <div v-for="l in limitedDestinations" :key="l.id">
        <LimitedPriorityContainer
          :imageUrl="l.imageUrl"
          :headTitle="l.headTitle"
          :title="l.title"
          :description="l.description"
          :benefitsNum="l.benefitsNum"
          :benefitsOne="l.benefitsOne"
          :benefitsTwo="l.benefitsTwo"
          :link="l.link"
        />
      </div>
    </div>
  </div>
  <!-- お問い合わせ -->
  <div class="contact">
    <p class="contact-info">luxury優待は、ペット賃貸でご契約くださった<br>お客様のみの特典となります。<br>担当者にご連絡いただければご紹介します。</p>
    <AppButton @click="openContact()" class="contact-button">
      <EmailWhiteIcon class="email-white-icon" />
      <p class="button-text">お問い合わせ</p>
    </AppButton>
  </div>
  <!-- フッター -->
  <AppFooter />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import PriorityContainer from '@/components/PriorityContainer.vue';
import LimitedPriorityContainer from '@/components/LimitedPriorityContainer.vue';
import { Destination } from '@/entity/destination';
import { db } from '@/firebase';
import { getDocs, collection } from 'firebase/firestore';
import FootprintsBrownIcon from '@/components/icons/footprints-brown.vue';
import FootprintsWhiteIcon from '@/components/icons/footprints-white.vue';
import DogBrownIcon from '@/components/icons/dog-brown.vue';
import EmailWhiteIcon from '@/components/icons/email-white.vue';

const destinations = ref<Destination[]>([])

const limitedDestinations = ref<Destination[]>([])

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'priorityDestinations'))
  destinations.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    headTitle: doc.data().headTitle,
    title: doc.data().title,
    description: doc.data().description,
    imageUrl: doc.data().imageUrl,
    contentType: doc.data()['content-type'],
    benefitsNum: doc.data()['benefits-num'],
    benefitsOne: doc.data()['benefits-one'],
    benefitsTwo: doc.data()['benefits-two'],
    order: doc.data().order,
    link: doc.data().link ?? "",
  }))

  // contentType=2...期間限定のものをlimitedDestinationsへ格納する
  limitedDestinations.value = destinations.value.filter((d) => d.contentType === 2)
  // orderでソート
  limitedDestinations.value.sort((a, b) => a.order - b.order)

  // contentType=1...常設のものだけに絞る
  destinations.value = destinations.value.filter((d) => d.contentType === 1)
  // orderでソート
  destinations.value.sort((a, b) => a.order - b.order)
})

function openContact() {
  window.open('https://petchintai.com/index.html#inquiry', '_blank');
}
</script>

<style scoped lang="scss">
.head {
  position: relative;
  height: 657px;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: $white;
}

.kv {
  width: 100%;
  object-fit: contain;
}

.content {
  padding: 60px 0 0 0;
  background-color: $backgroundCream;
  position: relative;
}

.footprints-icon {
  position: absolute;
  top: -36px;
  right: 0%;
}

.info-text {
  font-size: $md;
  line-height: 1.5;
  color: $text;
  text-align: center;
  margin-bottom: 80px;
  font-family: $font-gothic;
}

.dog-icon {
  position: absolute;
  top: -70px;
  left: 0%;
  background: $backgroundCream;
}

.service-container {
  padding: 80px 28px 0 28px;
  border-top: 2px solid $secondaryOpacity;
  position: relative;
}

.title {
  font-size: $xxl;
  text-align: center;
  font-family: $font-mincho;
  margin-bottom: 40px;
  color: $secondaryOpacity;
}

.limited-service-container {
  position: relative;
  padding: 40px 28px;
  background-color: $backgroundYellow;
  position: relative;
}

.footprints-white-icon {
  position: absolute;
  top: -36px;
  right: 0%;
}

.limited-service-head {
  font-size: $sm;
  color: $primary;
  text-align: center;
  font-family: $font-gothic;
}

.limited-service-title {
  font-size: $xl;
  color: $primary;
  text-align: center;
  font-weight: bold;
  margin-bottom: 40px;
  font-family: $font-gothic;
}

// お問い合わせ
.contact {
  padding: 80px 28px 120px 28px;
  background-image: url('@/assets/images/contact-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

.contact-info {
  font-size: $sm;
  color: $white;
  line-height: 32px;
  text-align: center;
  margin-bottom: 20px;
  font-family: $font-gothic;
}

.contact-button {
  width: 180px;
  height: 48px;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $white;
  border-radius: 50px;
  margin: 0 auto;
  cursor: pointer;
}

.button-text {
  font-family: $font-gothic;
}

.underline {
  display: inline;
  border-bottom: 1px solid $primary;
}
</style>