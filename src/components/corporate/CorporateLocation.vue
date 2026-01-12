<template>
  <section class="location-section">
    <h2></h2>
    <div class="map">
      <iframe
        width="100%"
        height="300"
        frameborder="0"
        style="border:0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.8715065849487!2d139.7059796!3d35.6555373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5b859cc0c3%3A0x5a0ab246385c4944!2z44CSMTUwLTAwMDIg5p2x5Lqs6YO95riL6LC35Yy65riL6LC377yT5LiB55uu77yR77yV4oiS77yVIOODkeODvOODq-ODk-ODqyA0Zg!5e0!3m2!1sja!2sjp!4v1735881125179!5m2!1sja!2sjp"
      ></iframe>
    </div>
  </section>
</template>

<style scoped lang="scss">
.location-section {
  width: 80%;
  padding: 60px 0;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 90%;
    padding: 20px 0;
  }


  h2 {
    font-size: 2rem;
    color: #343a40;
    margin-bottom: 1rem;
  }

  .map {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 500px) {
      border-radius: 4px;
    }
  }
}
</style>
