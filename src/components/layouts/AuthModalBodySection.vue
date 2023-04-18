<script setup>
import { storeToRefs } from 'pinia';
import { useModalStore } from '../../stores/ModalStore.js';
import Button from '../ui/Button.vue';
import CheckBox from '../ui/CheckBox.vue';

const props = defineProps({
  btnTitle: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['apply']);

const modalStore = useModalStore();
const { isAgreeToOffer } = storeToRefs(modalStore);

const onCheckAgree = ({ value }) => {
  modalStore.setIsAgreeToOffer({ name: props.name, value });
};
</script>

<template>
  <form class="modal-content__auth auth-section" @submit.prevent>
    <slot />
    <div v-if="id" class="auth-section__offer">
      <CheckBox
        class="auth-section__offer-checkbox"
        :id="id"
        :checkedValue="isAgreeToOffer[name]"
        @check="onCheckAgree"
      />
      <p class="auth-section__offer-text">
        Я согласен с договором
        <a
          href="https://av100.pro/docs/offer.pdf"
          target="_blank"
          class="auth-section__offer-text-link"
        >
          оферты
        </a>
      </p>
    </div>
    <div class="auth-section__bottom">
      <Button
        class="mob-filter__accept-btn btn--primary btn--block"
        @click="emit('apply')"
        :disabled="!isAgreeToOffer[name]"
      >
        {{ btnTitle }}
      </Button>
      <slot name="small" />
    </div>
  </form>
</template>

<style lang="scss">
.auth-section__fields {
	margin-bottom: 3rem;
}

.auth-section__field {
	&:not(:last-child) {
		margin-bottom: 1.5rem;
	}

	.input {
		padding-bottom: 0.9rem;
		padding-top: 0.9rem;
	}
}

.input-field__main {
	position: relative;
}

.auth-section__offer {
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
}

.auth-section__bottom {
	text-align: center;
}

.auth-section__offer-text {
	font-size: 1.4rem;
	font-weight: 500;
}

.auth-section__offer-text-link {
	color: #2dc574;
}

.auth-section__field.is-restore-password {
	margin-top: -1rem;
	display: block;
	text-align: right;
}

.auth-section__password-restore {
	padding-right: 1.3rem;
	font-size: 1.4rem;
	font-weight: 500;
	color: #2dc574;
}

.mob-filter__accept-btn {
	margin-bottom: 1.5rem;
}

.v-form-error {
	position: relative;
	margin: 3px 0;
	text-align: center;
	font-size: 14px;
	color: #e12f17;
}

@media (min-width: 768px) {
	.auth-section__field {
		display: flex;
		align-items: flex-start;

		.input-field__main {
			flex: 1;
		}
	}
}
</style>
