<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <button class="btn" :disabled="disabled">
    <span class="btn__text">
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
	border: 0.1rem solid transparent;
	border-radius: 0.4rem;
	padding: 1.3rem 2rem;
	display: inline-block;
	vertical-align: middle;
	font-family: inherit;
	font-size: 1.3rem;
	font-weight: 600;
	line-height: 1.1;
	text-align: center;
	white-space: nowrap;
	color: #fff;
	background: transparent;
	outline: none;
	user-select: none;
	cursor: pointer;
	transition: all .3s;

	&[disabled] {
		color: #333;
		filter: grayscale(50%);
		opacity: .7;
		cursor: default;
		pointer-events: none;
	}
}

.btn--primary {
	color: #fff;
	background: #2dc574;

	&[disabled] {
		background-color: #dbdbdb;
	}
}

.btn--block {
	width: 100%;
	display: block;
}

.btn__text {
	display: inline-block;
	vertical-align: middle;
}
</style>
