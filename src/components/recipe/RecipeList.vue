<template>
  <div>
    <div class="card">
      {{ recipe.id }}
      <img class="card-img-top" :src="recipe.image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ recipe.title }}</h5>
        <p class="card-text">{{ recipe.description }} </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(ingredient,index) in recipe.ingredients" :key="ingredient+index ">
          {{ ingredient }}
        </li>
      </ul>
      <div class="card-body">
        <button class="btn btn-danger" @click="$emit('delete', recipe.id)"><i class="fa fa-trash"   ></i> Delete</button>
        <button class="btn btn-primary"><i class="fa fa-shopping-cart" ></i> something </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: Object,
    default: () => {}
  }
}
</script>

<style scoped>

</style>
