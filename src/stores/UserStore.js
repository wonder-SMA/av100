import Cookies from 'js-cookie';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { router } from '../router/router.js';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const useUserStore = defineStore('userStore', () => {
      const prevRouter = ref('');
      const token = ref('');
      const user = ref({});
      const errors = ref(new Map());
      const regNumber = ref('');

      // Инициализация при первой загрузке приложения
      const initialize = async (pathname) => {
        prevRouter.value = pathname;
        token.value = Cookies.get('token');
        if (!token.value) {
          await router.push('/login');
        } else {
          const id = JSON.parse(Cookies.get('user')).id;
          await getUser({ token: token.value, id });
        }
      };

      // Логин пользователя
      const signIn = async ({ login, password }) => {
        try {
          const response = await fetch(API_URL + '/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': API_KEY,
              'X-Device-OS': 'web',
            },
            body: JSON.stringify({ login, password, 'fromuser': 0 }),
          });
          const data = await response.json();
          if (!response.ok) {
            errors.value.set('auth', data.errors[0]);
          } else {
            await getUser({ token: data.token, id: data.user.id });
            Cookies.set('token', data.token, { expires: 365 });
            token.value = data.token;
            await router.push(prevRouter.value === '/login' ? '/' : prevRouter.value);
            errors.value.set('auth', {});
          }
        } catch (e) {
          errors.value.set('auth', { title: e.message });
        }
      };

      // Регистрация пользователя
      const register = async (phone) => {
        try {
          const response = await fetch(API_URL + '/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': API_KEY,
              'X-Device-OS': 'web',
            },
            body: JSON.stringify({ login: phone }),
          });
          if (!response.ok) {
            const data = await response.json();
            errors.value.set('reg', data.errors[0]);
          } else {
            regNumber.value = phone;
            errors.value.set('reg', {});
          }
        } catch (e) {
          errors.value.set('reg', { title: e.message });
        }
      };

      // Получение данных пользователя
      const getUser = async ({ token, id }) => {
        try {
          const response = await fetch(API_URL + `/user/${id}`, {
            method: 'GET',
            headers: {
              'X-Api-Key': API_KEY,
              'X-User-Token': token,
              'X-Device-OS': 'web',
            },
          });
          const data = await response.json();
          if (!response.ok) {
            errors.value.set('getUser', data.errors[0]);
          } else {
            Cookies.set('user', JSON.stringify(data), { expires: 365 });
            user.value = data;
            errors.value.set('getUser', {});
          }
        } catch (e) {
          errors.value.set('getUser', { title: e.message });
        }
      };

      // Редактирование данных пользователя и настроек
      const updateUser = async () => {
        const id = user.value.id;
        const cookieUser = JSON.parse(Cookies.get('user'));

        if (cookieUser.email !== user.value.email) {
          cookieUser.email = user.value.email;
          try {
            const response = await fetch(API_URL + `/user/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': API_KEY,
                'X-User-Token': token.value,
                'X-Device-OS': 'web',
              },
              body: JSON.stringify(cookieUser),
            });
            if (!response.ok) {
              const data = await response.json();
              errors.value.set('updateUser', data.errors[0]);
            } else {
              await getUser({ token: token.value, id });
              errors.value.set('updateUser', {});
            }
          } catch (e) {
            errors.value.set('updateUser', { title: e.message });
          }
        }
      };

      // Очистка номера регистрации
      const clearRegNumber = () => {
        regNumber.value = '';
      };

      // Очистка ошибок запросов
      const clearError = name => {
        errors.value.set(name, {});
      };

      return {
        user,
        regNumber,
        errors,
        initialize,
        signIn,
        getUser,
        register,
        updateUser,
        clearError,
        clearRegNumber,
      };
    },
  )
;
