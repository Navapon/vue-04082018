<template>
  <div>
    <PageHeader></PageHeader>
    <div class="container">
      <!-- Button List -->
      <section>
        <div class="row pt-5">
          <div class="col">
            <button class="btn btn-info float-right" @click="isNew = !isNew">
              <i class="fa fa-plus-circle"></i> New Recipe
            </button>
          </div>
        </div>
      </section>
      <!-- Form Section -->
      <section v-if="isNew">
        <div class="row" >
          <div class="col">
            <RecipeForm  @cancel="isNew = $event" @save="addRecipe"></RecipeForm>
          </div>
        </div>
      </section>
      <div class="form-group">
        <label for="">Search here</label>
        <input type="text" class="form-control" v-model="search">
      </div>
      <!-- Recipe List -->
      <section>
        <div class="row pt-3">
          <div class="col-sm-12 col-md-3 pt-4" v-for="recipe in filterList" :key="recipe.id" >
            <RecipeList :recipe="recipe" @delete="deleteRecipe" ></RecipeList>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import PageHeader from '@/components/main-layout/PageHeader.vue'
import RecipeList from '@/components/recipe/RecipeList'
import RecipeForm from '@/components/recipe/RecipeForm'

export default {
  components: {
    PageHeader,
    RecipeList,
    RecipeForm
  },
  data () {
    return {
      recipes: [
        {
          'id': 1,
          'title': 'First Food',
          'description': 'lorem',
          'image': 'https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f2d35c4ea30a81e428e66c653748f91&auto=format&fit=crop&w=921&q=80',
          'ingredients': ['a', 'b', 'c']
        }
      ],
      isNew: false,
      search: ''
    }
  },
  computed: {
    filterList () {
      return this.recipes.filter(recipe => {
        return recipe.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  },
  methods: {
    addRecipe (recipe) {
      recipe.id = this.recipes.length === 0 ? 1 : (this.recipes[this.recipes.length - 1].id) + 1
      this.recipes.push(recipe)
      this.isNew = false
    },
    deleteRecipe (id) {
      const index = this.recipes.findIndex((value) => value.id === id)
      this.recipes.splice(index, 1)
      console.log('deleted')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
