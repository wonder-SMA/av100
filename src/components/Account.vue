<script setup>
import { storeToRefs } from 'pinia';
import InputField from '../components/ui/InputField.vue';
import SubSection from '../components/layouts/SubSection.vue';
import { useUserStore } from '../stores/UserStore.js';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>

<template>
  <SubSection class="settings-section__subsection" isMobileHidden>
    <template #heading>Учётная запись</template>
    <template #body>
      <div class="settings-section__fields">
        <InputField readonly v-model="user.companyname" class="settings-section__field">Компания</InputField>
        <InputField readonly v-model="user.login" class="settings-section__field">Логин</InputField>
        <InputField v-model="user.phone" class="settings-section__field">
          Номер телефона
        </InputField>
        <InputField v-model="user.fname" class="settings-section__field">Имя</InputField>
        <InputField v-model="user.lname" class="settings-section__field">
          Фамилия
          <template #info>
            <small class="settings-section__info">* Не обязательно</small>
          </template>
        </InputField>
      </div>
    </template>
  </SubSection>
</template>
