<script setup>
import { storeToRefs } from 'pinia';
import SubSection from '../components/layouts/SubSection.vue';
import ParamEdit from '../components/ParamEdit.vue';
import PostEntry from '../components/layouts/PostEntry.vue';
import EditIcon from '../components/ui/EditIcon.vue';
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
    <template #heading>Оповещения о новых подборках</template>
    <template #body>
      <div class="settings-section__subcaption caption is-desktop-hidden">Уведомления</div>
      <PostEntry isMuted>
        Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии
        вашей подборки.
      </PostEntry>
      <div class="settings-section__fields">
        <div class="settings-section__subcaption caption is-mobile-hidden">Уведомления</div>
        <div class="settings-section__notifications">
          <div class="settings-section__field is-flex">
            <RadioButton
              class="settings-section__radio"
              id="is-notification-none"
              name="notification"
              value="-1"
              v-model="user.notifytype"
            >
              Выкл
            </RadioButton>
          </div>
          <div class="settings-section__field is-flex">
            <RadioButton
              class="settings-section__radio"
              id="is-notification-push"
              name="notification"
              value="0"
              v-model="user.notifytype"
              disabled
            >
              Push
            </RadioButton>
            <span class="checkbox-label__main-tooltip">
              <TippyTooltip
                class="checkbox-label__tooltip-icon"
                :text="settingStore.notificationPushTooltip"
              />
            </span>
          </div>
          <div class="settings-section__field is-flex">
            <RadioButton
              class="settings-section__radio"
              id="is-notification-email"
              name="notification"
              value="2"
              v-model="user.notifytype"
            >
              Email
            </RadioButton>
            <div v-if="!settingStore.isEditNotifyParams['email']" class="settings-section__current-param">
              <span class="settings-section__current-param-text">
                {{ userStore.user.email || '' }}
              </span>
              <span class="settings-section__current-param-edit">
                <EditIcon
                  class="settings-section__current-param-edit-icon"
                  @click="settingStore.setIsEditNotifyParam('email')"
                />
              </span>
            </div>
            <ParamEdit
              v-else
              :value="userStore.user.email || ''"
              @edit="value => settingStore.setNotifyParam({value, type: 'email'} )"
            />
          </div>
          <div class="settings-section__field is-flex">
            <RadioButton
              class="settings-section__radio"
              id="is-notification-telegram"
              name="notification"
              value="1"
              v-model="user.notifytype"
            >
              <a class="radio-label__main--link" href="https://avclick.me/v/AVinfoBot">
                Telegram ID
              </a>
            </RadioButton>
            <div v-if="!settingStore.isEditNotifyParams['telegramChat']" class="settings-section__current-param">
              <span class="settings-section__current-param-text">
                {{ userStore.user.telegramChat || '' }}
              </span>
              <span class="settings-section__current-param-edit">
                <EditIcon
                  class="settings-section__current-param-edit-icon"
                  @click="settingStore.setIsEditNotifyParam('telegramChat')"
                />
              </span>
            </div>
            <ParamEdit
              v-else
              :value="userStore.user.telegramChat || ''"
              @edit="value => settingStore.setNotifyParam({value, type: 'telegramChat'} )"
            />
          </div>
        </div>
      </div>
    </template>
  </SubSection>
</template>
