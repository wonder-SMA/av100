<script setup>
import { storeToRefs } from 'pinia';
import SubSection from '../components/layouts/SubSection.vue';
import PostEntry from '../components/layouts/PostEntry.vue';
import Switcher from '../components/ui/Switcher.vue';
import { useSettingStore } from '../stores/SettingStore.js';
import { useUserStore } from '../stores/UserStore.js';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const settingStore = useSettingStore();
</script>

<template>
  <SubSection class="settings-section__subsection" isFlex>
    <template #heading>Звонок через SIP</template>
    <Switcher id="input51" :checkedValue="!!user.calltype" @check="settingStore.setSipCall" />
    <template #body>
      <PostEntry isMuted>
        Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так,
        будто звонки совершаются с разных номеров.
      </PostEntry>
    </template>
  </SubSection>
</template>
