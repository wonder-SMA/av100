<script setup>
import TooltipIcon from './TooltipIcon.vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <TooltipIcon v-tippy="{ content: text }" />
</template>

<style lang="scss">
div[data-tippy-root] .tippy-box[data-theme~="light"] {
	position: relative;
	text-align: center;
	padding: 0.3125rem 0.5625rem;
	border-radius: 3px;
	font-size: 1.2rem;
	font-weight: 600;
	line-height: 1.1;
	color: #fff;
	background: #2dc574;
	box-shadow: 0 0.1rem 1.2rem rgba(0, 0, 0, .12);

	&[data-placement^="top"] .tippy-svg-arrow {
		fill: #2dc574;
	}

	&[data-placement^="bottom"] .tippy-svg-arrow {
		fill: #2dc574;
	}
}
</style>
