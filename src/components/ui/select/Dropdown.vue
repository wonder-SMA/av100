<script setup>
import DropdownItem from './DropdownItem.vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  checkedValue: {
    type: String,
    required: false,
  },
});
const emit = defineEmits(['select']);
</script>

<template>
  <div class="multiselect__dropdown" tabindex="-1">
    <div class="multiselect__scroll">
      <DropdownItem
        v-for="(option, index) of options"
        :id="'null-' + index"
        :key="index"
        select="Часовой пояс"
        selected="Selected"
        deselect="Press enter to remove"
        :option="option"
        @select="emit('select', $event)"
        :checkedValue="checkedValue"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.multiselect__dropdown {
	position: absolute;
	top: 45px;
	right: 0;
	left: 0;
	z-index: 56;
	border-radius: 3px;
	color: #fff;
	background: #2dc574;
	box-shadow: 0 1px 12px rgba(0, 0, 0, .12);
	overflow: hidden;
}

.multiselect__scroll {
	max-height: 270px;
	overflow: hidden;
	overflow-y: auto;
}

.multiselect__scroll::-webkit-scrollbar {
	width: 6px;
	height: 6px;
	border-radius: 5px;
	background-color: #ededed;
}

.multiselect__scroll::-webkit-scrollbar-thumb {
	border-radius: 5px;
	background-color: #bdc2d3;
}

.multiselect__scroll::-webkit-scrollbar-thumb:hover {
	background-color: #2dc574;
}

.multiselect__scroll::-webkit-scrollbar-button {
	display: none;
}

.multiselect.is-sm {
	.multiselect__dropdown {
		top: 28px;
	}
}
</style>
