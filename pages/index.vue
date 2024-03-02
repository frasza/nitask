<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
})

const { user, clear } = useUserSession()

const items = [
  [
    {
      label: user.value?.name,
      slot: 'account',
      disabled: true,
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-heroicons-arrow-left-on-rectangle',
      click: clear,
    },
  ],
]
</script>

<template>
  <div class="p-3">
    <div class="flex justify-between items-center">
      <span>niTask</span>
      <UDropdown
        :items="items"
        :ui="{
          item: { disabled: 'cursor-text select-text', size: 'text-xs' },
        }"
        :popper="{ placement: 'bottom-start' }"
      >
        <UAvatar :src="user.picture" alt="Avatar" />

        <template #account="{ item }">
          <div class="text-left">
            <p>Signed in as</p>
            <p class="truncate text-gray-900 dark:text-white">
              {{ item.label }}
            </p>
          </div>
        </template>

        <template #item="{ item }">
          <span class="truncate">{{ item.label }}</span>

          <UIcon
            :name="item.icon"
            class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
          />
        </template>
      </UDropdown>
    </div>
  </div>
</template>
