<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
  readonly: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="input-field">
    <label class="input-field__label caption">
      <slot />
    </label>
    <div class="input-field__main">
      <input
        class="input-field__input input"
        type="text"
        name="text-field"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        placeholder
        :readonly="readonly"
      >
      <div class="extra-field__currency"></div>
      <slot name="info" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-field__main {
	position: relative;
}
</style>
