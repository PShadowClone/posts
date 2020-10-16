<template>
    <div class="h1 mb-0">
        <span class="kt-switch kt-switch--outline kt-switch--icon kt-switch--info">
		    <label>
		        <input type="checkbox" v-model="value" @click="onClick(value,$event)">
		            <span></span>
		    </label>
		</span>
    </div>
</template>

<script>
    export default {
        props: ['columns', 'row'],
        data(){
          return{
              value: this.row[this.columns.column.attr]
          }
        },
        methods:{
            onClick(val, event){
                event.preventDefault();
                let self = this
                self.getStatusCallback({column: self.columns.column, row: self.row, val: {is_active: !val}})
                    .then(
                        (response) => {this.value = !val}
                    )
            }
        },
        watch:{
        },
        created() {
        }
    }
</script>

<style scoped>

</style>
