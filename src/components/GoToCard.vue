<script setup>
import { storeToRefs } from 'pinia';
import SubSection from '../components/layouts/SubSection.vue';
import PostEntry from '../components/layouts/PostEntry.vue';
import RadioButton from '../components/ui/RadioButton.vue';
import TippyTooltip from '../components/ui/TippyTooltip.vue';
import { useSettingStore } from '../stores/SettingStore.js';
import { useUserStore } from '../stores/UserStore.js';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const settingStore = useSettingStore();
</script>

<template>
  <SubSection class="settings-section__subsection" isMobileHidden>
    <template #heading>Переход в карточку</template>
    <template #body>
      <PostEntry isMuted>
        Выберите, каким образом будет открываться детальное представление выбранного вами транспорта.
      </PostEntry>
      <div class="settings-section__fields">
        <div class="settings-section__notifications block-2">
          <div class="settings-section__field is-flex">
            <RadioButton
              class="settings-section__radio"
              id="is-notification-card"
              name="redirecttarget"
              value="0"
              v-model="user.redirecttarget"
            >
              В карточку в текущем окне
            </RadioButton>
          </div>
          <div class="settings-section__field is-flex">
            <RadioButton
              class="settings-section__radio"
              id="is-notification-page"
              name="redirecttarget"
              value="1"
              v-model="user.redirecttarget"
            >
              В карточку в отдельном окне
            </RadioButton>
          </div>
          <div class="settings-section__field is-flex">
            <RadioButton
              class="settings-section__radio"
              id="is-notification-source"
              name="redirecttarget"
              value="2"
              v-model="user.redirecttarget"
            >
              На источник
            </RadioButton>
            <span class="checkbox-label__main-tooltip">
              <TippyTooltip
                class="checkbox-label__tooltip-icon"
                :text="settingStore.notificationSourceTooltip"
              />
            </span>
          </div>
        </div>
      </div>
    </template>
  </SubSection>
</template>
