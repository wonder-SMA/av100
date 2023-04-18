<script setup>
import { ref } from 'vue';
import Dropdown from './Dropdown.vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  isSelected: {
    type: Boolean,
    required: false,
  },
});
const emit = defineEmits(['select']);

const isActive = ref(false);

const setIsActive = value => {
  isActive.value = value;
};

const onSelect = option => {
  emit('select', option);
  setIsActive(false);
};

const onBlur = event => {
  if (event.relatedTarget?.className !== 'multiselect__dropdown') {
    setIsActive(false);
  }
};
</script>

<template>
  <div
    class="multiselect"
    :class="{'multiselect--active': isActive}"
    tabindex="0"
    role="combobox"
    aria-owns="listbox-null"
    @focus="setIsActive(true)"
    @blur="onBlur"
  >
    <label class="multiselect__label caption">
      <slot />
    </label>
    <div class="multiselect__main">
      <div class="multiselect__header">
        <input
          type="text"
          autocomplete="off"
          spellcheck="false"
          tabindex="0"
          :placeholder="placeholder"
          aria-controls="listbox-null"
          readonly
          class="multiselect__input"
          :class="{'multiselect__input-selected': isSelected}"
          @focus="setIsActive(true)"
          @blur="onBlur"
        >
      </div>
      <Dropdown v-if="isActive" :options="options" @select="onSelect" :checkedValue="placeholder" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.multiselect__header, .multiselect__main {
	position: relative;
}

.multiselect__input {
	width: 100%;
	height: 45px;
	padding: 0 40px 0 10px;
	border: 1px solid #e1e1e3;
	border-radius: 3px;
	font-family: inherit;
	font-weight: 500;
	background: #fff;
	outline: none;

	&:hover, &:focus {
		border: 1px solid #2dc574;
		transition: .5s;
	}

	&::placeholder {
		color: #a3a3a3;
	}
}

.multiselect__input-selected::placeholder {
	color: #222 !important;
}

.multiselect.is-sm {
	.multiselect__input {
		height: 28px;
	}

	.multiselect__header:after {
		top: 11px;
		right: 11px;
		width: 10px;
		background-size: 10px;
	}
}

.multiselect__header:after, .multiselect__input {
	transition: .5s;
}

.multiselect__header:after {
	position: absolute;
	top: 18px;
	right: 20px;
	width: 15px;
	height: 8px;
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width= \"15\" height= \"8\" fill= \"none\" xmlns= \"http://www.w3.org/2000/svg\" %3E%3Cpath d= \"m.842.99 6.428 6 6.429-6\" stroke= \"%232DC574\" stroke-width= \"1.7\" stroke-linejoin= \"round\" /%3E%3C/svg%3E");
	background-position: 50%;
	background-repeat: no-repeat;
	content: "";
}

.multiselect--active .multiselect__header:after {
	transform: rotate(180deg);
	transition: .5s;
}
</style>
