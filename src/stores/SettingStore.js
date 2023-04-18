import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useUserStore } from './UserStore.js';

export const useSettingStore = defineStore('settingStore', () => {
    const userStore = useUserStore();

    // Прочие настройки
    const timezoneOptions = new Map([
      ['Kaliningrad', 'Калининград'],
      ['Moscow', 'Москва'],
      ['Samara', 'Самара'],
      ['Ekaterinburg', 'Екатеринбург'],
      ['Omsk', 'Омск'],
      ['Krasnoyarsk', 'Красноярск'],
      ['Irkutsk', 'Иркутск'],
      ['Yakutsk', 'Якутск'],
      ['Vladivostok', 'Владивосток'],
      ['Magadan', 'Магадан'],
      ['Kamchatka', 'Камчатка'],
    ]);
    const placeholder = computed(() => userStore.user.timezonestring
      ? timezoneOptions.get(userStore.user.timezonestring)
      : 'Московское время',
    );
    const isSelectedTimezone = computed(() => !!userStore.user.timezonestring);
    const lockLentaUpdateTooltip = 'Лента будет автоматически обновляться 1 раз в 3 секунды';
    const colorLentaTooltip = 'Включение зеленого/желтого цвета';
    const setTimezone = timezone => {
      for (const [key, value] of timezoneOptions) {
        if (value === timezone) {
          userStore.user.timezonestring = key;
          break;
        }
      }
    };
    const setOtherSettings = setting => {
      switch (setting.id) {
        case 'input-58':
          userStore.user.locklentaupdate = !setting.value;
          break;
        case 'input-59':
          userStore.user.colorlenta = setting.value;
          break;
        default:
          break;
      }
    };

    const notificationSourceTooltip = 'Прямой переход в объявление на источнике';

    // Оповещения о новых подборках
    const notificationPushTooltip = 'Можно установить только в приложении';
    const isEditNotifyParams = ref({
      'email': false,
      'telegramChat': false,
    });
    const setIsEditNotifyParam = type => {
      isEditNotifyParams.value[type] = true;
    };
    const setNotifyParam = param => {
      userStore.user[param.type] = param.value;
    };

    // Звонок через SIP
    const setSipCall = value => {
      userStore.user.calltype = +value;
    };

    return {
      lockLentaUpdateTooltip,
      colorLentaTooltip,
      notificationSourceTooltip,
      notificationPushTooltip,
      timezoneOptions,
      placeholder,
      isSelectedTimezone,
      isEditNotifyParams,
      setTimezone,
      setOtherSettings,
      setIsEditNotifyParam,
      setNotifyParam,
      setSipCall,
    };
  },
);
