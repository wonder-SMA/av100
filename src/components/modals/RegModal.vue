<script setup>
import { ref } from 'vue';
import AuthModalBodySection from '../layouts/AuthModalBodySection.vue';
import Modal from '../layouts/Modal.vue';

const props = defineProps({
  regNumber: {
    type: String,
    required: true,
  },
  error: {
    type: Object,
    required: false,
  },
});
const emit = defineEmits(['register', 'close']);

const phone = ref('');

const onRegister = () => {
  if (phone.value) {
    emit('register', phone.value);
  }
};
</script>

<template>
  <Modal name="reg" heading="Регистрация">
    <AuthModalBodySection btn-title="Отправить" @apply="onRegister" id="input-73" name="reg">
      <div class="auth-section__intro">
        Введите номер телефона и получите доступ к системе на <b>2 часа</b>.
      </div>
      <div class="auth-section__fields">
        <div class="auth-section__field input-field">
          <label for="user-reg-phone" class="input-field__label caption">
            Телефон
          </label>
          <div class="input-field__main">
            <input
              class="input-field__input input"
              type="tel"
              v-model="phone"
              id="user-reg-phone"
              name="phone"
            />
            <div v-if="error?.code === 10" class="auth-section__field is-restore-password">
              <a href="#" class="auth-section__password-restore">Восстановить пароль?</a>
            </div>
            <div v-if="error?.title" class="v-form-error">{{ error.title }}</div>
          </div>
        </div>
      </div>
      <template #small>
        <small class="auth-section__info">
          Повторная регистрация не допускается
        </small>
      </template>
    </AuthModalBodySection>
    <div v-if="regNumber">
      <Modal name="reg" heading="Регистрация" @close="emit('close', 'reg')">
        <AuthModalBodySection btn-title="Продолжить" @apply="emit('close', 'reg')" name="reg" id="">
          <div class="auth-section__intro">
            На номер <b>+79611888053</b> отправлен пароль.
          </div>
        </AuthModalBodySection>
      </Modal>
    </div>
  </Modal>
</template>

<style lang="scss">
.modal-win {
	.modal-win__main--reg {
		max-width: 440px;
	}
}

.auth-section__field {
	.caption {
		font-size: 1.4rem;
	}
}

.auth-section__field.is-restore-password {
	margin-top: 0;
}

.auth-section__intro {
	margin-bottom: 2.5rem;
	font-size: 1.4rem;
	line-height: 1.3;
	color: #686869;
}

.auth-section__info {
	border: none;
	padding: 0;
	display: block;
	font-size: 1.2rem;
	color: #686869;
}

@media (min-width: 768px) {
	.auth-section__field .caption {
		max-width: 13rem;
		margin-top: 0.7rem;
		margin-right: 1rem;
		margin-bottom: 0;
		flex: 0 0 9rem;
	}
}
</style>
