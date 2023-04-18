<script setup>
const props = defineProps({
  isFlex: {
    type: Boolean,
    required: false,
  },
  isMobileHidden: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <div class="wide-section">
    <div class="wide-section__header" :class="{'is-flex': isFlex, 'is-mobile-hidden': isMobileHidden}">
      <div class="wide-section__heading">
        <slot name="heading" />
      </div>
      <slot />
    </div>
    <div class="wide-section__body">
      <slot name="body" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wide-section {
	align-items: flex-start;

	&__header.is-flex {
		display: flex;
		align-items: center;
	}

	&__heading {
		margin-bottom: 0;
		font-size: 1.8rem;
		font-weight: 600;
	}

	&__body {
		flex: 1;
	}
}

@media (min-width: 576px) {
	.wide-section__body {
		max-width: 49rem;
	}
}

@media (min-width: 768px) {
	.wide-section {
		display: flex;
	}

	.wide-section__header {
		max-width: 25rem;
		margin-right: 2rem;
		margin-bottom: 0;
		flex: 0 0 25rem;
	}
}
</style>
