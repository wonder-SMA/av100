<script setup>
import { storeToRefs } from 'pinia';
import SubSection from '../components/layouts/SubSection.vue';
import Button from '../components/ui/Button.vue';
import CheckBox from '../components/ui/CheckBox.vue';
import Select from '../components/ui/select/Select.vue';
import TippyTooltip from '../components/ui/TippyTooltip.vue';
import { useSettingStore } from '../stores/SettingStore.js';
import { useUserStore } from '../stores/UserStore.js';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const settingStore = useSettingStore();
const { isSelectedTimezone, placeholder } = storeToRefs(settingStore);
</script>

<template>
  <SubSection class="settings-section__subsection" isMobileHidden>
    <template #heading>Прочие настройки</template>
    <template #body>
      <div class="settings-section__fields">
        <div class="settings-section__field is-flex">
          <Select
            class="settings-section__field-zone is-sm"
            :options="Array.from(settingStore.timezoneOptions.values())"
            :placeholder="placeholder"
            @select="settingStore.setTimezone"
            :isSelected="isSelectedTimezone"
          >
            Часовой пояс
          </Select>
        </div>
      </div>
      <div class="settings-section__fields">
        <div class="settings-section__field is-flex">
          <CheckBox
            class="has-tooltip"
            id="input-58"
            :checkedValue="!user.locklentaupdate"
            @check="settingStore.setOtherSettings"
          >
            Автоматически переходить к новым объявлениям
            <template #tooltip>
              <span class="checkbox-label__main-tooltip">
                <TippyTooltip
                  class="checkbox-label__tooltip-icon"
                  :text="settingStore.lockLentaUpdateTooltip"
                />
              </span>
            </template>
          </CheckBox>
        </div>
        <div class="settings-section__field is-flex">
          <CheckBox
            class="has-tooltip"
            id="input-59"
            :checkedValue="user.colorlenta"
            @check="settingStore.setOtherSettings"
          >
            Включить цвета в ленте
            <template #tooltip>
              <span class="checkbox-label__main-tooltip">
                <TippyTooltip
                  class="checkbox-label__tooltip-icon"
                  :text="settingStore.colorLentaTooltip"
                />
              </span>
            </template>
          </CheckBox>
        </div>
      </div>
      <div class="settings-section__bottom">
        <Button
          class="settings-section__btn block btn btn--block btn--primary"
          @click="userStore.updateUser"
        >
          Сохранить
        </Button>
      </div>
    </template>
  </SubSection>
</template>
