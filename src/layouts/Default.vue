<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">Mon compte</g-link>
      </nav>
    </header>
    <slot  /> 

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1960px;
    margin: 0 auto;
    

}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:0px;
  height: 78px;

  background: #e94a34;
}

.nav__link {
  margin-left: 20px;
}

</style>


