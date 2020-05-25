<template>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" >
       <a href="#">FutureProgrammerLi</a>
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
      <!-- :default-selected-keys="['2']" -->
        <a-menu-item key="1">
          Home
        </a-menu-item>
        <a-menu-item key="2">
          Archives
        </a-menu-item>
        <a-menu-item key="3">
          Email
        </a-menu-item>
      </a-menu>
    </a-layout-header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>