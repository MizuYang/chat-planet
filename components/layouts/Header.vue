<script lang="ts" setup>
const colorMode = useColorMode();

const toggleColorMode = (): void => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const isDark = computed(() => colorMode.value === "dark");
</script>

<template>
  <nav
    class="nav-header flex items-center justify-between border-b border-gray-300 bg-gray-100 px-4 py-1 dark:border-gray-700 dark:bg-gray-900"
  >
    <div
      class="mx-auto flex w-full max-w-[700px] items-center justify-between xl:max-w-[900px] 2xl:max-w-[1200px]"
    >
      <!-- logo -->
      <h1 class="flex items-center">
        <NuxtLink to="/" class="logo-button cursor-pointer hover:opacity-95">
          <span class="sr-only">聊天星球</span>
          <img
            src="/logo-light.png"
            alt="聊天星球 Logo"
            class="object-fit-contain block size-18 dark:hidden"
            aria-hidden="true"
          />
          <img
            src="/logo-dark.png"
            alt="聊天星球 Logo"
            class="object-fit-contain hidden size-18 dark:block"
            aria-hidden="true"
          />
        </NuxtLink>
      </h1>
      <div class="ms-auto flex items-center gap-4">
        <!-- 使用者頭像 -->
        <button
          type="button"
          class="flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="使用者資訊"
        >
          <UIcon
            name="i-heroicons-user-circle"
            class="block size-8 text-2xl text-gray-700 dark:text-gray-300"
          />
        </button>
        <!-- 通知 -->
        <button
          type="button"
          class="relative flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="通知"
        >
          <UIcon
            name="i-heroicons-bell"
            class="block size-8 text-2xl text-gray-700 dark:text-gray-300"
          />
        </button>
        <!-- 色彩模式切換 -->
        <ClientOnly>
          <button
            type="button"
            class="relative flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="切換色彩模式"
            @click="toggleColorMode"
          >
            <UIcon
              name="i-heroicons-sun"
              :class="[
                'color-mode-icon size-8 text-2xl text-gray-700 dark:text-gray-300',
                { 'icon-hidden': isDark, 'icon-visible': !isDark },
              ]"
            />
            <UIcon
              name="i-heroicons-moon"
              :class="[
                'color-mode-icon absolute size-8 text-2xl text-gray-700 dark:text-gray-300',
                { 'icon-visible': isDark, 'icon-hidden': !isDark },
              ]"
            />
          </button>
          <template #fallback>
            <div
              class="flex size-12 cursor-pointer items-center justify-center rounded-full p-2"
              aria-label="切換色彩模式"
            ></div>
          </template>
        </ClientOnly>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.color-mode-icon {
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}
.icon-visible {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
.icon-hidden {
  opacity: 0;
  transform: rotate(180deg) scale(0);
}
</style>
