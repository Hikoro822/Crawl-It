<script setup>
import { useProfile } from '@/composables/useProfile';
import { useAuth } from '@/composables/useAuth';
import AppProfile from '@/components/AppProfile.vue';

const { user, loading, error, handleUpdateAvatar } = useProfile();
const { logout } = useAuth();
</script>

<template>
  <div v-if="loading">Загрузка...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <AppProfile
        :user="user"
        @logout="logout"
        @update-avatar="handleUpdateAvatar"
    />
  </div>
</template>