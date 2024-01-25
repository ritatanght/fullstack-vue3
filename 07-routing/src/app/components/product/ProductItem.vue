<template>
  <section id="product-item" class="box">
    <div class="product-item__details">Product Item</div>
    <div class="product-item__image"></div>
  </section>
</template>

<script>
export default {
  name: "ProductItem",
};
</script>

<style scoped>
#product-item {
  display: flex;
  width: 100%;
  position: relative;
}
.return-icon {
  position: absolute;
  top: 5px;
  left: 10px;
  color: #00d1b2;
  cursor: pointer;
}
.product-item__details {
  max-width: 50%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product-item__image {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product-item__description {
  padding-bottom: 10px;
}
.product-item__created_at {
  font-size: 12px;
  padding-bottom: 10px;
}
.product-item__button {
  max-width: 150px;
}
</style>
