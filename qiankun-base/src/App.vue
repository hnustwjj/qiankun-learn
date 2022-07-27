<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/vue">vue</router-link>
    <router-link to="/react">react</router-link>
  </nav>
  <router-view />
  <div id="vue"></div>
  <div id="react"></div>
</template>

<style lang="less"></style>
