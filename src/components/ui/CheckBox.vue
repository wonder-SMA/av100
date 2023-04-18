<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  checkedValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['check']);
</script>

<template>
  <div class="checkbox-label">
    <input
      class="checkbox-label__input"
      type="checkbox"
      :id="id"
      :checked="checkedValue"
      @change="emit('check', {id, value: $event.target.checked})"
    >
    <label class="checkbox-label__main" :for="id">
      <slot />
    </label>
    <slot name="tooltip" />
  </div>
</template>

<style lang="scss" scoped>
.checkbox-label {
	display: flex;
}

.checkbox-label__input {
	position: absolute;
	top: -9999px;
	left: -9999px;
	width: 1px;
	height: 1px;
	overflow: hidden;
	visibility: hidden;
	opacity: 0;
}

.checkbox-label__main {
	position: relative;
	width: 100%;
	min-width: 2rem;
	min-height: 2rem;
	margin: 0;
	padding: 0 0 0 2.5rem;
	display: flex;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 500;
	line-height: 1.2;
	color: #000;
	user-select: none;
	cursor: pointer;
}

.checkbox-label__main:before {
	position: absolute;
	top: 0.1rem;
	left: 0;
	width: 1.8rem;
	height: 1.8rem;
	border: 1px solid #2dc574;
	border-radius: 0.2rem;
	content: "";
}

.checkbox-label__input:checked + .checkbox-label__main:before {
	position: absolute;
	border-color: #2dc574;
	background-color: #2dc574;
	content: "";
}

.checkbox-label__input:checked + .checkbox-label__main:after {
	position: absolute;
	top: 0.3rem;
	left: 0.2rem;
	width: 1.3rem;
	height: 1.3rem;
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='14' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.492 6.092 4.76 9.333l7.843-7.778' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: contain;
	color: #fff;
	content: "";
}
</style>
