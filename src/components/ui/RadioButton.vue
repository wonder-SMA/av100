<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
});
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="radio-label">
    <input
      class="radio-label__input"
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="value == modelValue"
      :disabled="disabled"
      @change="emit('update:modelValue', value)"
    >
    <label class="radio-label__main" :for="id">
      <slot />
    </label>
  </div>
</template>

<style lang="scss" scoped>
.radio-label__input {
	margin-right: 3px;
}
</style>
