<script setup>
const props = defineProps({
  value: {
    type: String,
    required: false,
    default: '',
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
});
const emit = defineEmits(['edit']);
</script>

<template>
  <div class="input-field">
    <div class="input-field__main">
      <input
        class="input-field__input input"
        type="text"
        name="text-field"
        :value="value"
        :placeholder="placeholder"
        @input="emit('edit', $event.target.value)"
      >
      <div class="extra-field__currency"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-field__main {
	position: relative;
}
</style>
