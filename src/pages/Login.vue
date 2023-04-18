<script setup>
import { storeToRefs } from 'pinia';
import AuthModal from '../components/modals/AuthModal.vue';
import RegModal from '../components/modals/RegModal.vue';
import { useModalStore } from '../stores/ModalStore.js';
import { useUserStore } from '../stores/UserStore.js';

const userStore = useUserStore();
const { regNumber, errors } = storeToRefs(userStore);
const modalStore = useModalStore();
const { isModalOpen, isAgreeToOffer } = storeToRefs(modalStore);

const onSignIn = data => {
  userStore.signIn(data);
};

const onRegister = phone => {
  userStore.register(phone);
};

const onClose = name => {
  modalStore.setIsModalOpen({ name, value: false });
  Object.keys(isAgreeToOffer.value).forEach(key => {
    modalStore.setIsAgreeToOffer({ name: key, value: true });
  });

  userStore.clearError(name);
  if (regNumber) {
    userStore.clearRegNumber();
  }
};
</script>

<template>
  <AuthModal
    @signIn="onSignIn"
    @close="onClose('auth')"
    :error="errors.get('auth')"
    @openRegModal="modalStore.setIsModalOpen({name: 'reg', value: true})"
  />
  <RegModal
    v-if="isModalOpen.reg"
    @register="onRegister"
    @close="onClose('reg')"
    :error="errors.get('reg')"
    :regNumber="regNumber"
  />
</template>

<style lang="scss" scoped>

</style>
