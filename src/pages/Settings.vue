<script setup>
import { storeToRefs } from 'pinia';
import Account from '../components/Account.vue';
import CollectionAlerts from '../components/CollectionAlerts.vue';
import GoToCard from '../components/GoToCard.vue';
import OtherSettings from '../components/OtherSettings.vue';
import SipCall from '../components/SipCall.vue';
import { useSettingStore } from '../stores/SettingStore.js';
import { useUserStore } from '../stores/UserStore.js';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const settingStore = useSettingStore();
</script>

<template>
  <main class="content">
    <div>
      <div v-if="Object.keys(user).length" class="container-fluid padding-top-2">
        <div class="settings-section">
          <OtherSettings />
          <GoToCard />
          <CollectionAlerts />
          <Account />
          <SipCall />
        </div>
      </div>
      <div class="page-intro">
        <div class="container-fluid">
          <div class="page-intro__header">
            <h1 class="page-intro__heading main-heading">
              Настройки
            </h1>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.content {
	flex: 1 0 auto;

	.page-intro {
		padding: 0 0 0.1rem;
		background: #f9f9fc;

		&__header {
			margin-bottom: 1.5rem;
			display: flex;
			align-items: center;
		}

		.main-heading {
			margin: 0;
		}
	}
}

.container-fluid {
	max-width: 1920px;
	margin: 0 auto;
	padding: 0 1.5rem;
}

.padding-top-2 {
	padding-top: 2rem;
}

.settings-section {
	margin-bottom: 5rem;

	&__subsection:not(:last-child) {
		margin-bottom: 2rem;
	}

	.wide-section__header {
		margin-bottom: 1.5rem;
	}

	.post-entry {
		font-size: 1.3rem;
		font-weight: 500;

		& + .settings-section__fields {
			margin-top: 2rem;
		}
	}

	.input {
		padding: 0.8rem 1rem;
		font-size: 1.4rem;
		font-weight: 500;
	}
}

.settings-section__field:not(:last-child) {
	margin-bottom: 2rem;
}

.settings-section__field {
	.input-field__label {
		font-size: 1.4rem;
		font-weight: 600;
	}

	.radio-label__main {
		font-size: 1.4rem;
	}

	.checkbox-label.has-tooltip {
		width: 100%;
	}

	.radio-label__main--link {
		color: #2dc574;
		text-decoration: underline;
	}
}

.is-flex {
	display: flex;
	align-items: center;
}

.settings-section__subsection:first-child {
	.settings-section__fields:nth-child(2) {
		margin-top: 2.5rem;
	}
}

.settings-section__subcaption {
	margin-bottom: 2rem;
}

.settings-section__notifications {
	.settings-section__field {
		justify-content: space-between;
	}
}

.settings-section__bottom {
	border-top: 0.1rem solid #e1e1e3;
	margin-top: 3rem;
	padding-top: 1.5rem;
}

.settings-section__info {
	margin-top: 0.5rem;
	display: block;
	font-size: 1.2rem;
	color: #a3a3a3;
}

.settings-section__current-param {
	font-size: 1.3rem;
	font-weight: 500;
	color: #000;
}

.settings-section__current-param-edit {
	color: #2dc574;
	cursor: pointer;
}

.settings-section__current-param-edit-icon {
	width: 2.2rem;
	height: 2.2rem;
	margin-left: 0.5rem;
	fill: currentColor;
	transition: all .3s;
}

.checkbox-label__tooltip-icon.icon {
	width: 2rem;
	height: 2rem;
	margin-left: 0.5rem;
	fill: #cdcdcd;
	cursor: help;
}

@media (min-width: 576px) {
	.settings-section__fields {
		max-width: 37rem;
	}
}

@media (max-width: 767px) {
	.is-mobile-hidden {
		display: none !important;
	}
}

@media (min-width: 768px) {
	.settings-section {
		margin-bottom: 8rem;

		.post-entry {
			font-size: 1.4rem;
			font-weight: 400;
		}

		.input {
			font-weight: 400;
		}
	}

	.settings-section__subsection:not(:last-child) {
		margin-bottom: 4rem;
	}

	.settings-section__field {
		display: flex;

		.input-field__label {
			max-width: 12rem;
			margin-top: 0.6rem;
			margin-right: 1rem;
			margin-bottom: 0;
			flex: 0 0 12rem;
			font-weight: 500;
		}

		.input-field__main {
			flex: 1;
		}

		.input-field__input {
			flex: 1;
		}
	}

	.settings-section__subcaption.is-desktop-hidden {
		display: none;
	}

	.settings-section__notifications {
		.settings-section__field:not(:last-child) {
			border-bottom: 0.1rem solid #e1e1e3;
			margin-bottom: 1.5rem;
			padding-bottom: 1.5rem;
		}

		.settings-section__radio {
			max-width: 12rem;
			margin-right: 1rem;
			flex: 0 0 12rem;
		}

		.settings-section__param-edit {
			flex: 1;
		}
	}

	.settings-section__notifications.block-2 {
		.settings-section__radio {
			max-width: 30rem;
			flex: 0 0 30rem;
		}
	}

	.settings-section__field-zone {
		display: flex;

		label {
			margin-top: 0.4rem;
			margin-right: 2.5rem;
			margin-bottom: 0;
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 16px;
		}
	}

	.settings-section__current-param {
		font-size: 1.4rem;
		font-weight: 400;
	}
}

@media (min-width: 1200px) {
	.settings-section {
		margin-bottom: 12rem;
	}
}
</style>
