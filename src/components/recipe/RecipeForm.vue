<template>
  <div class="col-md-6 offset-md-3 col-sm-12 ">
    <div class="jumbotron">
    <form @submit.prevent >
      <!-- Form group -->
      <div class="text-center">
        <h2>Recipe Form</h2>
      </div>
      <div class="form-group row ">
        <label for="title" class="col-sm-2 col-form-label">Title</label>
        <div class="col-12">
          <input type="text" class="form-control" id="title" placeholder="Your title ..." v-model="recipe.title">
        </div>
         <label for="description" class="col-sm-2 col-form-label">Description</label>
        <div class="col-12">
          <input type="text" class="form-control" id="description" placeholder="Your description ... " v-model="recipe.description">
        </div>
        <div class="col-12">
          <label for="" class="col-sm-2 col-form-label">Image</label>
          <input type="text" class="form-control" id="image" placeholder="Your image url ... " v-model="recipe.image">
        </div>
      </div>
      <!-- Add button to dynamic ingredient-->
      <div class="row">
        <div class="col">
          <button class="btn btn-primary float-right" @click="addIngredient">
            <i class="fa fa-plus-circle"></i> more Ingredient
          </button>
        </div>
      </div>
      <!-- Ingredient -->
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Ingredients</label>
        <div class="col-12 pt-2" v-for="(ingredient,index) in recipe.ingredients" :key="index">
          <input type="text" class="form-control pt-" id="ingredient" placeholder="Your Ingredient ... " v-model="recipe.ingredients[index]">
        </div>
      </div>
      <!-- Add button to dynamic ingredient-->

      <div class="center-block text-center">
          <button type="submit" class="btn btn-danger" @click="$emit('cancel', false)">
            <i class="fa fa-ban"></i> Cancel
          </button>
          <button type="submit" class="btn btn-success" @click="save">
            <i class="fa fa-save"></i> Save
          </button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    recipe: {
      type: Object,
      default: () => {
        return {
          id: '',
          title: '',
          image: '',
          description: '',
          ingredients: ['']
        }
      }
    }
  },
  methods: {
    addIngredient () {
      this.recipe.ingredients.push('')
    },
    save () {
      this.$emit('save', this.recipe)
      console.log('saved')
    }
  }
}
</script>

<style scoped>

</style>
