<template>
  <Layout>
    <div class="nav_barre">
        <g-image alt="Example image" src="~/lo.png" width="120" height="50" />
         <g-image alt="Example image" src="~/home.png" width="53" height="53" />
          <g-image alt="Example image" src="~/profie.png" width="53" height="53" />
           <g-image alt="Example image" src="~/calendar.png" width="53" height="53" />

   </div>
<div class="title-seconde">
  <h2>Les dernièrs événements de la NWS</h2>
  </div>
<br>
    <div class="content">
     <g-image alt="Example image" src="~/jpo.png" width="1116" height="379" />
    </div>
    <br>
 <div class="title-third">
    <h2>Les dernières Actualités des Alumnis</h2>
    </div>
     <br>
    <div class="card">
     <g-image alt="Example image" src="~/alumnis.jpg" width="1116" height="379" />
    </div>
  


 
 
    <footer class="footer">
    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
</footer>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
body{
  background: lightgrey;
}

.content{
  width: 1116px;
  height: 379;
 padding-right:30px;
 padding-left: 30px;
  border: 2px solid lightgrey;
  border-radius: 20px 20px;
  background: white;
 margin:0 auto;
}
.title-seconde{
  margin: 0 auto;
  width: 1116px;
  height: 379;
  border: 2px solid lightgrey;
  border-radius: 20px 20px;
  padding: 30px;
  margin: 0 auto;
  background: white;
  text-align: center;
 margin:0 auto;
}
.title-third{
  margin: 0 auto;
  width: 1116px;
  height: 379;
  border: 2px solid lightgrey;
  border-radius: 20px 20px;
  padding: 30px;
  margin: 0 auto;
  background: white;
  text-align: center;
   margin:0 auto;
}
.card{
  margin: auto;
  width: 1116px;
  height: 379;
 padding-right:30px;
 padding-left: 30px;
  border: 2px solid lightgrey;
  border-radius: 20px 20px;
  background: white;

   margin:0 auto;
}
.nav_barre{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 78px;
  background: white;
  margin:0 auto;
  margin-bottom: 20px;

}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:0px;
  height: 78px;
  margin-top: 30px;

  background: #00a5a5;
}

 /*tes images auront une marge de 5px a gauche*/
 
g-image{
margin-left : 20px /*tes images auront une marge de 5px a gauche*/
}


</style>
