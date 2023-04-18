<script setup>
import { ref } from 'vue';
import AuthModalBodySection from '../layouts/AuthModalBodySection.vue';
import EyeIcon from '../ui/EyeIcon.vue';
import Modal from '../layouts/Modal.vue';

const props = defineProps({
  error: {
    type: Object,
    required: false,
  },
});
const emit = defineEmits(['signIn', 'openRegModal']);

const login = ref('');
const password = ref('');
const type = ref('password');

const onShowPassword = () => {
  type.value = type.value === 'password' ? 'text' : 'password';
};

const onSignIn = () => {
  if (login.value && password.value) {
    emit('signIn', { login: login.value, password: password.value });
  }
};
</script>

<template>
  <Modal name="auth" heading="Авторизация">
    <AuthModalBodySection btn-title="Войти" @apply="onSignIn" id="input-71" name="auth">
      <div class="auth-section__fields">
        <div class="auth-section__field input-field">
          <div class="input-field__main">
            <div
              class="form-control input-field__input input"
              id="user-reg-login"
              name="username"
            >
              <div class="form-control__wrapper">
                <label class="form-control__label">Логин</label>
                <div class="form-control__main">
                  <div class="form-control__inner">
                    <input
                      class="input-field__input input"
                      type="text"
                      v-model="login"
                      placeholder="Введите Логин"
                      autocomplete="username"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="auth-section__field input-field">
          <div class="input-field__main">
            <div
              class="form-control input-field__input input"
              id="user-reg-password"
              name="password"
            >
              <div class="form-control__wrapper">
                <label class="form-control__label">Пароль</label>
                <div class="form-control__main">
                  <div class="form-control__inner">
                    <input
                      class="input-field__input input"
                      :type="type"
                      v-model="password"
                      placeholder="Введите пароль"
                      autocomplete="current-password"
                    />
                    <div
                      class="form-control__toggle form-control__toggle--eye"
                      @click="onShowPassword"
                    >
                      <EyeIcon
                        class="form-control__toggle-icon"
                        :decoration="type !== 'password'"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="auth-section__field is-restore-password">
          <div class="auth-section__password-restore">
            <a href="#" class="auth-section__password-restore">Забыли пароль?</a>
          </div>
        </div>
      </div>
      <div v-if="error?.title" class="v-form-error">{{ error.title }}</div>
      <template #small>
        <small data-v-122bb2e0="" class="auth-section__helper">
          Нет аккаунта?
          <a href="#" data-modal-win-trigger="reg" @click="emit('openRegModal')">
            Зарегистрироваться
          </a>
        </small>
      </template>
    </AuthModalBodySection>
    <div class="mob-filter__bottom auth-section__info is-desktop-hidden">
      <div class="auth-section__info-help">Остались вопросы?</div>
      <div class="auth-section__info-contact">
        <div>
          <a href="tel:+8 (800) 200-07-48" class="auth-section__password-restore">8 (800) 200-07-48</a>
        </div>
        <div>
          <a href="mailto:help@av100.pro" class="auth-section__password-restore">help@av100.pro</a>
        </div>
      </div>
    </div>
  </Modal>
</template>

<style lang="scss">
.modal-win {
	.modal-win__main--auth {
		max-width: 440px;
	}
}

.form-control.input {
	border: none !important;
}

.form-control__wrapper {
	display: block;
}

.form-control__label {
	max-width: 12rem;
	margin: 0.7rem 1.5rem 0 0;
	padding: 0;
	flex: 0 0 8rem;
	font-size: 1.4rem;
	font-weight: 500;
	color: #000;
}

.form-control__main {
	width: 100%;
	border: 0.1rem solid #e1e1e3;
	border-radius: 0.3rem;
	padding: 1rem 1.3rem;
	background: #fff;
	box-shadow: none;
	font-family: Montserrat, Helvetica, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.1;
	color: #222;
	appearance: none;
	outline: none;
	transition: all .3s;

	.input {
		border: none;
	}
}

.form-control__inner {
	display: flex;
	align-items: center;

	.input {
		padding: 0;
	}
}

.form-control__toggle {
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	display: flex;
	padding: 5px;
	background: #f1f1f1;
	cursor: pointer;
}

.form-control__toggle--eye {
	margin-left: 5px;
	padding: 0;
	align-items: center;
	background: transparent;
}

.mob-filter__bottom {
	position: sticky;
	bottom: 0;
	z-index: 2;
	border-top: 0.1rem solid #e1e1e3;
	margin-top: auto;
	padding: 3rem 2rem 2.5rem;
	background: #fff;
}

.auth-section__info {
	border: none;
	padding: 0;
	display: block;
	font-size: 1.2rem;
	color: #686869;
}

.auth-section__info-help {
	margin: 1.4rem 0;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
}

.auth-section__info-contact {
	display: flex;
	justify-content: space-between;
}

.auth-section__helper {
	font-size: 1.4rem;
	font-weight: 500;

	a {
		color: #2dc574;
	}
}

@media (min-width: 768px) {
	.is-desktop-hidden {
		display: none !important;
	}
}
</style>
