<template>
  <div>
    <PillComponent v-for="item in groupedWords" :word="item.word" :amount="item.amount" :key="item.word"/>
  </div>
</template>

<script>
import PillComponent from './PillComponent';
export default {
    PillComponent,
    data: function() {
        return {
            groupedWords: [
            {word:"i", amount: 450},
            {word:"am", amount: 1150},
            {word:"can", amount: 700}
            ]
        }
    }
}
</script>

<style>

</style>