<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  option: {
    type: String,
    required: true,
  },
  checkedValue: {
    type: String,
    required: false,
  },
  select: {
    type: String,
    required: true,
  },
  selected: {
    type: String,
    required: true,
  },
  deselect: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['select']);
</script>

<template>
  <div class="multiselect__group" role="option" :id="id" @click="emit('select', option)">
    <div
      class="multiselect-control is-mark multiselect__control"
      :data-select="select"
      :data-selected="selected"
      :data-deselect="deselect"
    >
      <input class="multiselect-control__input" type="checkbox" :checked="option === checkedValue">
      <span class="multiselect-control__toggle" />
      <span class="multiselect-control__label">{{ option }}</span>
      <div class="multiselect-control__bg"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.multiselect-control {
	position: relative;
	display: inline-flex;
	align-items: flex-start;
	font-size: 14px;
	font-weight: 500;

	&:hover {
		background: #22a860;
		cursor: pointer;
	}

	label {
		font-size: 14px;
		font-weight: 600;
		line-height: 20px;
		color: #000;
	}
}

.multiselect.is-sm {
	.multiselect-control {
		font-size: 1.2rem;
	}
}

.multiselect-control.is-mark {
	position: relative;
	z-index: 1;
	padding: 10px;

	.multiselect-control__icon {
		max-width: 24px;
		margin-right: 10px;
		flex-shrink: 0;
	}

	.multiselect-control__input[type=checkbox] ~ .multiselect-control__toggle {
		margin-right: 10px;
	}

	.multiselect-control__input[type=checkbox] ~ .multiselect-control__toggle:before {
		width: 13px;
		height: 10px;
		display: block;
		background-image: none;
		content: "";
		transition: .5s;
	}

	.multiselect-control__bg {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		border-radius: 3px;
		visibility: hidden;
		background: #22a860;
		opacity: 0;
		transition: .5s;
	}

	.multiselect-control__input:checked ~ .multiselect-control__bg {
		opacity: 1;
		visibility: visible;
		transition: .5s;
	}

	.multiselect-control__input:checked ~ .multiselect-control__toggle:before {
		width: 13px;
		height: 10px;
		display: block;
		content: "";
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.467 5.583 4.408 8.5l7.059-7' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
		opacity: 1;
		transition: .5s;
	}

}

.multiselect-control.is-mark,
.multiselect-control.is-mark .multiselect-control__label {
	display: flex;
	align-items: center;
}

.multiselect-control__input {
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	width: 1px;
	height: 1px;
	clip: rect(0, 0, 0, 0);
}

.multiselect-control__input:checked ~ .multiselect-control__toggle:before {
	width: 21px;
	height: 21px;
	display: block;
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='21' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' rx='3' fill='%232DC574'/%3E%3Cpath d='m4.445 10.092 3.268 3.241 7.843-7.778' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
	content: "";
	opacity: 1;
	transition: .5s;
}

.multiselect-control__input[type=checkbox] ~ .multiselect-control__toggle {
	margin-right: 5px;
}

.multiselect-control__input[type=checkbox] ~ .multiselect-control__toggle:before {
	width: 21px;
	height: 21px;
	display: block;
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='21' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' rx='3' fill='%232DC574'/%3E%3Cpath d='m4.445 10.092 3.268 3.241 7.843-7.778' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
	content: "";
	transition: .5s;
}
</style>
