<template>
  <div class="home">
    <v-form>
      <v-file-input 
      label="Selecione as legendas" 
      prepend-icon="mdi-message-text" 
      append-icon="mdi-send" 
      outlined
      multiple
      v-model="files"
      @click:append="processSubtitles"
      >
    </v-file-input>
    </v-form>
    <div class="pills">
      <PillComponent v-for="item in groupedWords" :word="item.word" :amount="item.amount" :key="item.word"/>
    </div>
  </div>
</template>

<script>
import PillComponent from './PillComponent';
import { ipcRenderer } from 'electron';

export default {
  components: {
    PillComponent,
  },
    data: function() {
        return {
            groupedWords: [
            {word:"i", amount: 450},
            {word:"am", amount: 1150},
            {word:"can", amount: 700}
            ]
        }
    },
    methods: {
      processSubtitles() {
        ipcRenderer.send("files", "ALOO")
        ipcRenderer.on('files', (event, data) => {
          console.log(data);
        })
      }
    }
}
</script>

<style scoped>
  .home {
    margin: 20px;
  }
  .pills {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>