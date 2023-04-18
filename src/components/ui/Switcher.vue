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
  <div class="switcher-label settings-section__switcher switcher-label--thin" :value="checkedValue">
    <input
      class="switcher-label__input"
      :id="id"
      type="checkbox"
      :checked="checkedValue"
      @change="emit('check', $event.target.checked)"
    >
    <label class="switcher-label__main" :for="id" />
  </div>
</template>

<style lang="scss" scoped>
.switcher-label__input {
	position: absolute;
	top: -9999px;
	left: -9999px;
	width: 1px;
	height: 1px;
	overflow: hidden;
	visibility: hidden;
	opacity: 0;

	&:checked + label:after {
		background: #2dc574;
		box-shadow: none;
	}
}

.switcher-label__main {
	position: relative;
	min-height: 2.5rem;
	margin: 0;
	padding: 0 0 0 5.5rem;
	display: flex;
	align-items: center;
	color: #000;
	font-size: 1.2rem;
	font-weight: 500;
	line-height: 1.2;
	cursor: pointer;
	user-select: none;

	&:before, &:after {
		position: absolute;
		height: 2.5rem;
		left: 0;
		content: "";
		transition: all .3s;
	}

	&:before {
		width: 5rem;
		border-radius: 12px;
		background: #a3a3a3;
	}

	&:after {
		top: 0;
		width: 2.5rem;
		border-radius: 50%;
		background: #f1f1f1;
		box-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .24);
	}
}

.settings-section__switcher {
	margin-left: 1rem;
}

.switcher-label--thin {
	.switcher-label__input + label:before {
		border: 0.2rem solid #bababa;
		background: none;
	}

	.switcher-label__input:checked + label:before {
		border-color: #2dc574;
	}

	.switcher-label__input:checked + label:after {
		left: 1.6rem;
	}

	.switcher-label__main {
		min-width: 3.5rem;
		padding-left: 4rem;

		&:before {
			width: 3.5rem;
			min-width: 3.5rem;
			height: 2rem;
		}

		&:after {
			width: 1.9rem;
			height: 1.9rem;
			top: 0.3rem;
			background: #bababa;
			box-shadow: none;
		}
	}
}
</style>
