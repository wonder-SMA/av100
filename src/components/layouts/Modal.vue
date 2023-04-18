<script setup>
import CloseIcon from '../ui/CloseIcon.vue';

const props = defineProps({
  name: {
    type: String,
    required: false,
  },
  heading: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(['close']);
</script>

<template>
  <div class="modal-win modal_size_md">
    <div class="modal-win__main is-modal-win-opened" :class="`modal-win__main--${name}`">
      <div class="modal-win__close" @click="emit('close', name)">
        <CloseIcon class="modal-win__close-icon" style="width: 18px; height: 18px" />
      </div>
      <div class="modal-win__body">
        <div class="modal-content" :data-modal-win="name" hidden="hidden">
          <div class="modal-content__header">
            <div class="modal-content__heading">{{ heading }}</div>
          </div>
          <div class="modal-content__body">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal-win {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 200;
	display: flex;
	background: rgba(0, 0, 0, .8);
	overflow-x: hidden;
	overflow-y: auto;
	transition: opacity .3s, transform .3s;
}

.modal-win__main {
	animation: fadeOut .25s;
	background: #fff;
	margin: auto;
	opacity: 0;
	padding: 3rem;
	position: relative;
	transition: opacity 1s;
	width: 92%;
}

.modal-win__main.is-modal-win-opened {
	animation: scaleIn .3s forwards;
	opacity: 1;
}

.modal-win__close {
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	z-index: 200;
	width: 1.2rem;
	height: 1.2rem;
	border: none;
	padding: 0;
	background: none;
	cursor: pointer;
	transition: all .3s;

	&:hover {
		transform: rotate(90deg);

		.modal-win__close-icon {
			fill: #333
		}
	}
}

.modal-win__close-icon {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 1.2rem;
	height: 1.2rem;
	fill: #2dc574;
	cursor: pointer;
	transform: translate(-50%, -50%);
	transition: all .3s;
}

.modal-win [data-modal-win][hidden] {
	display: block !important;
}

.modal-content__header {
	position: relative;
}

.modal-content__heading {
	margin-bottom: 3rem;
	font-family: Montserrat, Helvetica, Arial, sans-serif;
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 1.4;
	color: #000;
	text-transform: uppercase;
}

@media (min-width: 576px) {
	.modal-win__main {
		max-width: 54rem;
		width: 100%;
	}
}
</style>
