<script setup>
const props = defineProps({
  isMuted: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <div class="post-entry">
    <p :class="{'is-muted': isMuted}">
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped>
.post-entry {
	margin: 0;
	font-weight: 500;

	.is-muted {
		color: #686869;
	}
}
</style>
