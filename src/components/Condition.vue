<template>
    <div >
        <div class="condition" v-for="term in terms" :key="term.id">
          <FORM id="Form" name="Form" method="GET">
            Условие {{term.id}}
            <SELECT name="Select" id="select" class="select">
                <OPTION SELECTED VALUE="0">Выберете условие</OPTION>
                <OPTION  VALUE="1">Возраст респондента</OPTION>
                <OPTION VALUE="2">Тип карты лояльности</OPTION>
                <OPTION VALUE="3">Статус карты рояльности</OPTION>
            </SELECT>
        </FORM>
        <section class="ranges">
                <div v-for="range in range" :key="range.id">
            {{ range.next }} Диапазон {{ range.id }} 
                <section class="range">
                     от <input class="input-first"> 
                     до <input class="input-first">
                </section> 
               
            </div>
        </section>
        <section class="buttons">       
            <button class="add-poll" @click="addPoll">+ Добавить диапазон</button>
            <button class="delete-poll" @click="deletePoll(id)">Удалить условие</button>
        </section> 
           
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // пытался сделать в одном массиве другой массив,
                //  чтобы при добавление диапазона везде не добавлялось,
                //  но не получилось все это динамечески выводить,
                // чтобы он видел массив в массиве
                terms:[
                    {
                        id: 1,
                        
                    },
                    {
                        id: 2
                    }
                   
                ],
                range: [
                    {id: 1},
                    {id: 2, next: 'ИЛИ'},
                    
                ]
            }
        },
        methods: {
            addPoll(){
               
                this.range.push({id: +(this.range.length+1) , next: 'ИЛИ'})
                
              
                console.log("Новый диапазон добавлен")
            },
            //  не понимаю, как id связать с this.terms.id,
            //  пробовал в button id сделать динамическое,
            //   но через id="{{}}" не получается :(
            deletePoll(id){
                this.terms.splice(id, 1)
            }
        }
    }
</script>

<style  scoped>
.condition{
    padding: 1% 0 8% 5%;
    background-color: rgba(255, 225, 0, 0.2);
}
.select{
    margin-left: 100px;
    width: 50%;
}
.ranges{
    margin: 50px 0 0 0;
   
}
.range {
    float: right;
    padding-right: 30%;
}
.input-first{
    width: 10%;
    height: 15px;
}
.buttons {
    margin: 30px 0 0 0;
    float: right;
}
.add-poll{
    margin: 0 250px 0 0 ;
}
.delete-poll{
    margin: 0 20px 0 0;
}
</style>