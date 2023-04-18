import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modalStore', () => {
    // Состояние открытия модалок
    const isModalOpen = ref({
      auth: false,
      reg: false,
    });

    const setIsModalOpen = data => {
      isModalOpen.value[data.name] = data.value;
    };

    // Состояние соглашения с договором оферты
    const isAgreeToOffer = ref({
      auth: true,
      reg: true,
    });

    const setIsAgreeToOffer = data => {
      isAgreeToOffer.value[data.name] = data.value;
    };

    return {
      isModalOpen,
      isAgreeToOffer,
      setIsModalOpen,
      setIsAgreeToOffer,
    };
  },
);
